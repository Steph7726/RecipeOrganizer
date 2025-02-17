// assets/js/tasks.js
import { db } from "./firebase.js";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// ✅ Check if user is authenticated
const email = JSON.parse(localStorage.getItem("email"));
if (!email) {
  window.location.href = "index.html";
}

// ✅ Sign Out Function
const signOutBttn = document.getElementById("signOutBttn");
signOutBttn.addEventListener("click", () => {
  localStorage.removeItem("email");
  window.location.href = "index.html";
});

// ✅ Add Recipe to Firestore
async function addRecipe(name, category, ingredients) {
  await addDoc(collection(db, "recipes"), {
    name,
    category,
    ingredients,
    email,
    created_at: new Date(),
  });
  alert(`✅ Recipe "${name}" added!`);
  getRecipes();
}

// ✅ Get Recipes from Firestore
async function getRecipes() {
  const q = query(collection(db, "recipes"), where("email", "==", email));
  const snapshot = await getDocs(q);
  const list = document.getElementById("recipeList");
  list.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    const item = document.createElement("li");
    item.innerHTML = `<strong>${data.name}</strong> - ${
      data.category
    } <br> Ingredients: ${data.ingredients.join(", ")}`;
    list.appendChild(item);
  });
}

// ✅ Event Listeners
document.getElementById("addRecipeBtn").addEventListener("click", () => {
  const name = document.getElementById("recipeInput").value.trim();
  const category = document.getElementById("categoryInput").value.trim();
  const ingredients = document
    .getElementById("ingredientsInput")
    .value.trim()
    .split(",");
  if (name && category && ingredients.length > 0) {
    addRecipe(name, category, ingredients);
  } else {
    alert("🚨 Please fill out all fields.");
  }
});

// ✅ Fetch Recipes on Load
window.addEventListener("DOMContentLoaded", getRecipes);
