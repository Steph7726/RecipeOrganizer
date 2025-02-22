import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { getApiKey, askChatBot, handleChatInput } from "./chatbot.js";

document.addEventListener("DOMContentLoaded", async () => {
  setupEventListeners();
  await getApiKey();
  getRecipes();
});

// Event Listeners
function setupEventListeners() {
  document
    .getElementById("send-btn")
    ?.addEventListener("click", handleChatInput);

  document
    .getElementById("addRecipeBtn")
    ?.addEventListener("click", addRecipeHandler);
  document.getElementById("signOutBttn")?.addEventListener("click", signOut);
  document
    .getElementById("filterBtn")
    ?.addEventListener("click", filterRecipes);

  // Allow "Enter" key to submit forms
  ["recipeInput", "categoryInput", "ingredientsInput"].forEach((id) => {
    document.getElementById(id)?.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        document.getElementById("addRecipeBtn")?.click();
      }
    });
  });

  ["ingredientFilter", "categoryFilter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        document.getElementById("filterBtn")?.click();
      }
    });
  });
}

// Show Feedback Messages
function showFeedbackMessage(message, type = "success") {
  const feedbackDiv = document.getElementById("feedback-message");
  if (!feedbackDiv) return;

  feedbackDiv.textContent = message;
  feedbackDiv.classList.remove("hidden", "feedback-error");

  if (type === "error") {
    feedbackDiv.classList.add("feedback-error");
  }

  feedbackDiv.style.display = "block";

  setTimeout(() => {
    feedbackDiv.style.opacity = "0";
    setTimeout(() => {
      feedbackDiv.style.display = "none";
      feedbackDiv.style.opacity = "1";
    }, 500);
  }, 2000);
}

// Sign Out Function
function signOut() {
  localStorage.removeItem("email");
  window.location.href = "index.html";
}

// Add Recipe Handler
function addRecipeHandler() {
  const name = document.getElementById("recipeInput").value.trim();
  const category = document.getElementById("categoryInput").value.trim();
  const ingredients = document
    .getElementById("ingredientsInput")
    .value.trim()
    .split(",");

  if (name && category && ingredients.length > 0) {
    addRecipe(name, category, ingredients);
  } else {
    showFeedbackMessage("Please fill out all fields.", "error");
  }
}

// Add Recipe to Firestore
async function addRecipe(name, category, ingredients) {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) {
    showFeedbackMessage("You must be logged in to add recipes!", "error");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "recipes"), {
      name,
      category,
      ingredients,
      email,
      favorite: false,
      created_at: new Date(),
    });

    getRecipes();
    showFeedbackMessage("Recipe Added!");

    // Clear input fields after adding
    document.getElementById("recipeInput").value = "";
    document.getElementById("categoryInput").value = "";
    document.getElementById("ingredientsInput").value = "";
  } catch (error) {
    console.error("Error adding recipe:", error);
    showFeedbackMessage("Error adding recipe!", "error");
  }
}

// Delete Recipe
window.deleteRecipe = async function (recipeId) {
  try {
    await deleteDoc(doc(db, "recipes", recipeId));
    getRecipes();
    showFeedbackMessage("Recipe Deleted!");
  } catch (error) {
    console.error("Error deleting recipe:", error);
    showFeedbackMessage("Could not delete recipe!", "error");
  }
};

// Edit Recipe
window.editRecipe = async function (recipeId) {
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    try {
      await updateDoc(doc(db, "recipes", recipeId), {
        name: newName,
        category: newCategory,
        ingredients: newIngredients.split(","),
      });

      getRecipes();
      showFeedbackMessage("Recipe Updated!");
    } catch (error) {
      console.error("Error updating recipe:", error);
      showFeedbackMessage("Could not update recipe!", "error");
    }
  } else {
    showFeedbackMessage("Please fill in all fields!", "error");
  }
};

// Toggle Favorite Recipe
window.toggleFavorite = async function (recipeId) {
  try {
    const recipeRef = doc(db, "recipes", recipeId);
    const recipeSnapshot = await getDoc(recipeRef);
    const currentFavorite = recipeSnapshot.data().favorite || false;

    await updateDoc(recipeRef, { favorite: !currentFavorite });

    getRecipes();
    showFeedbackMessage(currentFavorite ? "⭐ Unfavorited!" : "⭐ Favorited!");
  } catch (error) {
    console.error("Error toggling favorite:", error);
    showFeedbackMessage("Could not update favorite status!", "error");
  }
};

// Get Recipes
async function getRecipes() {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) return;

  const q = query(collection(db, "recipes"), where("email", "==", email));
  const snapshot = await getDocs(q);
  const list = document.getElementById("recipeList");
  if (!list) {
    console.error("recipeList element not found");
    return;
  }
  list.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    list.appendChild(createRecipeItem(doc.id, data));
  });

  let resetBtn = document.getElementById("resetFiltersBtn");
  if (!resetBtn) {
    resetBtn = document.createElement("button");
    resetBtn.id = "resetFiltersBtn";
    resetBtn.textContent = "Reset Filters";
    resetBtn.addEventListener("click", resetFilters);
    list.parentElement.appendChild(resetBtn);
  }
}

// Create Recipe Item
function createRecipeItem(recipeId, data) {
  const item = document.createElement("li");
  item.classList.add("recipe-card");

  item.innerHTML = `
    <div class="recipe-text">
      <strong>${data.name}</strong> (${data.category})<br>
      Ingredients: ${data.ingredients.join(", ")}
    </div>
    <div class="recipe-buttons">
      <button class="delete-btn" onclick="deleteRecipe('${recipeId}')">❌ Delete</button>
      <button class="edit-btn" onclick="editRecipe('${recipeId}')">✏️ Edit</button>
      <button class="favorite-btn" onclick="toggleFavorite('${recipeId}')">⭐ ${
    data.favorite ? "Unfavorite" : "Favorite"
  }</button>
    </div>
  `;

  return item;
}

// Filter Recipes
async function filterRecipes() {
  const ingredientFilter = document
    .getElementById("ingredientFilter")
    .value.toLowerCase();
  const categoryFilter = document
    .getElementById("categoryFilter")
    .value.toLowerCase();

  const q = query(
    collection(db, "recipes"),
    where("email", "==", JSON.parse(localStorage.getItem("email")))
  );
  const snapshot = await getDocs(q);
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    if (
      (!ingredientFilter ||
        data.ingredients.some((ing) =>
          ing.toLowerCase().includes(ingredientFilter)
        )) &&
      (!categoryFilter || data.category.toLowerCase().includes(categoryFilter))
    ) {
      list.appendChild(createRecipeItem(doc.id, data));
    }
  });
}

// Reset Filters
function resetFilters() {
  document.getElementById("ingredientFilter").value = "";
  document.getElementById("categoryFilter").value = "";
  getRecipes();
}
