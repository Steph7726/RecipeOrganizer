// ✅ Import Firebase Modules
/*import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  doc,
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Chatbot Global Variables
let genAI;
let model;

// ✅ Fetch Google Gemini API Key from Firestore
async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      console.log("✅ Google Gemini API Key Loaded");
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    } else {
      appendMessage("🚨 No Google Gemini API key found in Firestore");
    }
  } catch (error) {
    console.error("🚨 Error fetching API key:", error.message);
    appendMessage("🚨 Chatbot error: API Key issue.");
  }
}

// ✅ Chatbot AI Query
async function askChatBot(request) {
  if (!model) {
    appendMessage("🚨 AI is not ready yet. Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: request }] }],
    });

    console.log("🟡 AI Full Response:", result); // Debugging

    let aiResponse = "";
    if (
      result?.candidates &&
      result.candidates[0]?.content?.parts?.length > 0
    ) {
      aiResponse = result.candidates[0].content.parts
        .map((part) => part.text)
        .join("\n");
    } else {
      aiResponse = "🚫 No meaningful response from AI.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(`🚨 Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
}

// ✅ Chatbot Command Rules
function ruleChatBot(request) {
  const lowerCaseRequest = request.toLowerCase();

  if (lowerCaseRequest.startsWith("add recipe")) {
    const details = lowerCaseRequest
      .replace("add recipe", "")
      .trim()
      .split(";");
    const [name, category, ingredients] = details;
    if (name && category && ingredients) {
      addRecipe(name.trim(), category.trim(), ingredients.split(","));
      appendMessage(`✅ Recipe '${name}' added successfully!`);
    } else {
      appendMessage(
        "⚠️ Format: 'add recipe Name; Category; ingredient1, ingredient2'"
      );
    }
    return true;
  }

  if (lowerCaseRequest.startsWith("show recipes")) {
    getRecipes();
    appendMessage("📜 Showing all your recipes...");
    return true;
  }

  if (lowerCaseRequest.startsWith("find recipe")) {
    const searchTerm = lowerCaseRequest.replace("find recipe", "").trim();
    getRecipesBySearch(searchTerm);
    appendMessage(`🔍 Searching for recipes with '${searchTerm}'...`);
    return true;
  }

  return false;
}

// ✅ Display Chatbot Messages
function appendMessage(message) {
  const chatHistory = document.getElementById("chat-history");
  if (!chatHistory) return;

  const historyItem = document.createElement("div");
  historyItem.textContent = message;
  historyItem.className = "history";
  chatHistory.appendChild(historyItem);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// ✅ Chatbot Event Listener
document.addEventListener("DOMContentLoaded", () => {
  const chatSendBtn = document.getElementById("send-btn");
  if (!chatSendBtn) {
    console.error("🚨 send-btn button not found");
    return;
  }
  chatSendBtn.addEventListener("click", handleChatInput);
});

// ✅ Handle Chat Input
function handleChatInput() {
  const chatInput = document.getElementById("chat-input");
  if (!chatInput) {
    console.error("🚨 Chat input field not found");
    return;
  }

  const prompt = chatInput.value.trim();
  if (prompt) {
    if (!ruleChatBot(prompt)) {
      askChatBot(prompt);
    }
  } else {
    appendMessage("⚠️ Please enter a prompt.");
  }
  chatInput.value = "";
}

// ✅ Check if user is authenticated
const email = JSON.parse(localStorage.getItem("email"));
if (!email) {
  window.location.href = "index.html";
}

// ✅ Sign Out Function
document.addEventListener("DOMContentLoaded", () => {
  const signOutBttn = document.getElementById("signOutBttn");
  if (!signOutBttn) {
    console.error("🚨 signOutBttn not found");
    return;
  }
  signOutBttn.addEventListener("click", () => {
    localStorage.removeItem("email");
    window.location.href = "index.html";
  });
});

// ✅ Add Recipe to Firestore with authenticated user email
async function addRecipe(name, category, ingredients) {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) {
    alert("You must be logged in to add recipes.");
    return;
  }

  try {
    await addDoc(collection(db, "recipes"), {
      name,
      category,
      ingredients,
      email,
      created_at: new Date(),
    });
    alert(`✅ Recipe "${name}" added!`);
    getRecipes(); // Refresh list
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
    alert(`🚨 Error adding recipe: ${error.message}`);
  }
}

// ✅ Get User Recipes from Firestore
async function getRecipes() {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) {
    alert("You must be logged in to view recipes.");
    return;
  }

  try {
    const q = query(collection(db, "recipes"), where("email", "==", email));
    const snapshot = await getDocs(q);
    const list = document.getElementById("recipeList");
    list.innerHTML = "";

    if (snapshot.empty) {
      list.innerHTML = "<p>🚫 No recipes found.</p>";
      return;
    }

    snapshot.forEach((doc) => {
      const data = doc.data();
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${data.name}</strong> - ${data.category}<br>
        Ingredients: ${data.ingredients.join(", ")}
      `;
      list.appendChild(item);
    });
  } catch (error) {
    console.error("🚨 Error fetching recipes:", error);
  }
}

// ✅ Event Listeners for Recipe Addition
document.addEventListener("DOMContentLoaded", () => {
  const addRecipeBtn = document.getElementById("addRecipeBtn");
  if (!addRecipeBtn) {
    console.error("🚨 addRecipeBtn not found");
    return;
  }

  addRecipeBtn.addEventListener("click", () => {
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
});

// ✅ Fetch Recipes on Load
window.addEventListener("DOMContentLoaded", async () => {
  await getApiKey();
  getRecipes();
});*/

// ✅ Import Firebase Modules
import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Chatbot Global Variables
let genAI;
let model;

// ✅ Fetch Google Gemini API Key from Firestore
async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      console.log("✅ Google Gemini API Key Loaded");
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    } else {
      appendMessage("🚨 No Google Gemini API key found in Firestore");
    }
  } catch (error) {
    console.error("🚨 Error fetching API key:", error.message);
    appendMessage("🚨 Chatbot error: API Key issue.");
  }
}

// ✅ Chatbot AI Query
async function askChatBot(request) {
  if (!model) {
    appendMessage("🚨 AI is not ready yet. Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: request }] }],
    });

    console.log("🟡 AI Full Response:", result);

    let aiResponse = "";
    if (
      result?.candidates &&
      result.candidates[0]?.content?.parts?.length > 0
    ) {
      aiResponse = result.candidates[0].content.parts
        .map((part) => part.text)
        .join("\n");
    } else {
      aiResponse = "🚫 No meaningful response from AI.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(`🚨 Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
}

// ✅ Chatbot Command Rules
function ruleChatBot(request) {
  const lowerCaseRequest = request.toLowerCase();

  if (lowerCaseRequest.startsWith("add recipe")) {
    const details = lowerCaseRequest
      .replace("add recipe", "")
      .trim()
      .split(";");
    const [name, category, ingredients] = details;
    if (name && category && ingredients) {
      addRecipe(name.trim(), category.trim(), ingredients.split(","));
      appendMessage(`✅ Recipe '${name}' added successfully!`);
    } else {
      appendMessage(
        "⚠️ Format: 'add recipe Name; Category; ingredient1, ingredient2'"
      );
    }
    return true;
  }

  if (lowerCaseRequest.startsWith("show recipes")) {
    getRecipes();
    appendMessage("📜 Showing all your recipes...");
    return true;
  }

  return false;
}

// ✅ Display Chatbot Messages
function appendMessage(message) {
  const chatHistory = document.getElementById("chat-history");
  if (!chatHistory) return;

  const historyItem = document.createElement("div");
  historyItem.textContent = message;
  historyItem.className = "history";
  chatHistory.appendChild(historyItem);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// ✅ Handle Chat Input
document.getElementById("send-btn").addEventListener("click", () => {
  const chatInput = document.getElementById("chat-input");
  if (!chatInput) return;

  const prompt = chatInput.value.trim();
  if (prompt) {
    if (!ruleChatBot(prompt)) {
      askChatBot(prompt);
    }
  } else {
    appendMessage("⚠️ Please enter a prompt.");
  }
  chatInput.value = "";
});

// ✅ Check if user is authenticated
const email = JSON.parse(localStorage.getItem("email"));
if (!email) {
  window.location.href = "index.html";
}

// ✅ CRUD: Add, Edit, Delete, and Favorite Recipes
async function addRecipe(name, category, ingredients) {
  try {
    await addDoc(collection(db, "recipes"), {
      name,
      category,
      ingredients,
      email,
      favorite: false,
      created_at: new Date(),
    });
    getRecipes();
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
  }
}

async function editRecipe(recipeId) {
  const newName = prompt("Enter new name:");
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
    } catch (error) {
      console.error("🚨 Error updating recipe:", error);
    }
  }
}

async function deleteRecipe(recipeId) {
  try {
    await deleteDoc(doc(db, "recipes", recipeId));
    getRecipes();
  } catch (error) {
    console.error("🚨 Error deleting recipe:", error);
  }
}

async function toggleFavorite(recipeId, currentStatus) {
  try {
    await updateDoc(doc(db, "recipes", recipeId), {
      favorite: !currentStatus,
    });
    getRecipes();
  } catch (error) {
    console.error("🚨 Error updating favorite status:", error);
  }
}

// ✅ Fetch Recipes with Filtering
async function getRecipes(category = "", ingredient = "") {
  try {
    const q = query(collection(db, "recipes"), where("email", "==", email));
    const snapshot = await getDocs(q);
    const list = document.getElementById("recipeList");
    list.innerHTML = "";

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (
        (!category ||
          data.category.toLowerCase().includes(category.toLowerCase())) &&
        (!ingredient ||
          data.ingredients.some((i) =>
            i.toLowerCase().includes(ingredient.toLowerCase())
          ))
      ) {
        const item = document.createElement("li");
        item.innerHTML = `
          <strong>${data.name}</strong> (${data.category})<br>
          Ingredients: ${data.ingredients.join(", ")}<br>
          <button onclick="editRecipe('${doc.id}')">✏️ Edit</button>
          <button onclick="deleteRecipe('${doc.id}')">🗑️ Delete</button>
          <button onclick="toggleFavorite('${doc.id}', ${data.favorite})">
            ${data.favorite ? "⭐ Unfavorite" : "☆ Favorite"}
          </button>
        `;
        list.appendChild(item);
      }
    });
  } catch (error) {
    console.error("🚨 Error fetching recipes:", error);
  }
}

// ✅ Load Recipes on Page Load
window.addEventListener("DOMContentLoaded", async () => {
  await getApiKey();
  getRecipes();
});
