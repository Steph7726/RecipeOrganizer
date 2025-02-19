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

/*import { db } from "./firebase.js";
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
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Global Variables
let genAI;
let model;
let apiKeyLoaded = false;

// ✅ Ensure DOM elements exist before executing
document.addEventListener("DOMContentLoaded", async () => {
  setupEventListeners();
  await getApiKey(); // Fetch API Key for Chatbot
  getRecipes(); // Load existing recipes
});

// ✅ Fetch Google Gemini API Key from Firestore
async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      console.log("✅ Google Gemini API Key Loaded:", apiKey);
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      apiKeyLoaded = true;
    } else {
      appendMessage("🚨 No Google Gemini API key found in Firestore");
    }
  } catch (error) {
    console.error("🚨 Error fetching API key:", error.message);
    appendMessage("🚨 Chatbot error: API Key issue.");
  }
}

// ✅ Ask Google Gemini AI
async function askChatBot(request) {
  if (!apiKeyLoaded || !model) {
    appendMessage("🚨 AI is still initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: request }] }],
    });

    console.log("🟡 AI Full Response:", result);

    let aiResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!aiResponse) {
      aiResponse = "🚫 AI could not generate a meaningful response.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(`🚨 Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
}

// ✅ Handle Chatbot Commands
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
    getRecipes(searchTerm);
    appendMessage(`🔍 Searching for recipes with '${searchTerm}'...`);
    return true;
  }

  return false;
}

// ✅ Append Messages to Chat
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
function handleChatInput() {
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
}

// ✅ Setup Event Listeners
function setupEventListeners() {
  const sendBtn = document.getElementById("send-btn");
  if (sendBtn) sendBtn.addEventListener("click", handleChatInput);

  const addRecipeBtn = document.getElementById("addRecipeBtn");
  if (addRecipeBtn) addRecipeBtn.addEventListener("click", addRecipeHandler);

  const filterBtn = document.getElementById("filterBtn");
  if (filterBtn) filterBtn.addEventListener("click", filterRecipes);

  const signOutBttn = document.getElementById("signOutBttn");
  if (signOutBttn) signOutBttn.addEventListener("click", signOut);
}

// ✅ Sign Out Function
function signOut() {
  localStorage.removeItem("email");
  window.location.href = "index.html";
}

// ✅ Add Recipe Handler
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
    alert("🚨 Please fill out all fields.");
  }
}

// ✅ Add Recipe to Firestore
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
      favorite: false,
      created_at: new Date(),
    });
    getRecipes();
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
  }
}

// ✅ Delete Recipe
async function deleteRecipe(recipeId) {
  await deleteDoc(doc(db, "recipes", recipeId));
  getRecipes();
}

// ✅ Edit Recipe
async function editRecipe(recipeId) {
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    await updateDoc(doc(db, "recipes", recipeId), {
      name: newName,
      category: newCategory,
      ingredients: newIngredients.split(","),
    });
    getRecipes();
  } else {
    alert("🚨 Please fill in all fields.");
  }
}

// ✅ Toggle Favorite Recipe
async function toggleFavorite(recipeId) {
  const recipeRef = doc(db, "recipes", recipeId);
  const recipeSnapshot = await getDoc(recipeRef);
  const currentFavorite = recipeSnapshot.data().favorite || false;
  await updateDoc(recipeRef, { favorite: !currentFavorite });
  getRecipes();
}

// ✅ Get Recipes (Supports Filtering)
async function getRecipes(filter = "") {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) return;

  const q = query(collection(db, "recipes"), where("email", "==", email));
  const snapshot = await getDocs(q);
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${data.name}</strong> (${data.category})<br>
      Ingredients: ${data.ingredients.join(", ")}
    `;
    list.appendChild(item);
  });
}*/

/*import { db } from "./firebase.js";
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
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Global Variables
let genAI;
let model;
let apiKeyLoaded = false;

// ✅ Ensure DOM elements exist before executing
document.addEventListener("DOMContentLoaded", async () => {
  setupEventListeners();
  await getApiKey();
  getRecipes();
});

// ✅ Fetch Google Gemini API Key from Firestore
async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      console.log("✅ Google Gemini API Key Loaded:", apiKey);
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      apiKeyLoaded = true;
    } else {
      appendMessage("🚨 No Google Gemini API key found in Firestore");
    }
  } catch (error) {
    console.error("🚨 Error fetching API key:", error.message);
    appendMessage("🚨 Chatbot error: API Key issue.");
  }
}

// ✅ Handle Chatbot Commands
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

// ✅ Append Messages to Chat
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
function handleChatInput() {
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
}

// ✅ Setup Event Listeners
function setupEventListeners() {
  document
    .getElementById("send-btn")
    ?.addEventListener("click", handleChatInput);
  document
    .getElementById("addRecipeBtn")
    ?.addEventListener("click", addRecipeHandler);
  document.getElementById("signOutBttn")?.addEventListener("click", signOut);
}

// ✅ Sign Out Function
function signOut() {
  localStorage.removeItem("email");
  window.location.href = "index.html";
}

// ✅ Add Recipe Handler
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
    alert("🚨 Please fill out all fields.");
  }
}

// ✅ Add Recipe to Firestore
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
      favorite: false,
      created_at: new Date(),
    });
    getRecipes();
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
  }
}

// ✅ Delete Recipe
async function deleteRecipe(recipeId) {
  await deleteDoc(doc(db, "recipes", recipeId));
  getRecipes();
}

// ✅ Edit Recipe
async function editRecipe(recipeId) {
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    await updateDoc(doc(db, "recipes", recipeId), {
      name: newName,
      category: newCategory,
      ingredients: newIngredients.split(","),
    });
    getRecipes();
  } else {
    alert("🚨 Please fill in all fields.");
  }
}

// ✅ Toggle Favorite Recipe
async function toggleFavorite(recipeId) {
  const recipeRef = doc(db, "recipes", recipeId);
  const recipeSnapshot = await getDoc(recipeRef);
  const currentFavorite = recipeSnapshot.data().favorite || false;
  await updateDoc(recipeRef, { favorite: !currentFavorite });
  getRecipes();
}

// ✅ Get Recipes
async function getRecipes() {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) return;

  const q = query(collection(db, "recipes"), where("email", "==", email));
  const snapshot = await getDocs(q);
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${data.name}</strong> (${data.category})<br>
      Ingredients: ${data.ingredients.join(", ")}
    `;
    list.appendChild(item);
  });
}*/

/*import { db } from "./firebase.js";
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

// ✅ Ensure DOM elements exist before executing
document.addEventListener("DOMContentLoaded", async () => {
  setupEventListeners();
  await getApiKey(db);
  getRecipes();
});

// ✅ Setup Event Listeners
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
}

// ✅ Sign Out Function
function signOut() {
  localStorage.removeItem("email");
  window.location.href = "index.html";
}

// ✅ Add Recipe Handler
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
    alert("🚨 Please fill out all fields.");
  }
}

// ✅ Add Recipe to Firestore
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
      favorite: false,
      created_at: new Date(),
    });
    getRecipes();
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
  }
}

// ✅ Delete Recipe
async function deleteRecipe(recipeId) {
  await deleteDoc(doc(db, "recipes", recipeId));
  getRecipes();
}

// ✅ Edit Recipe
async function editRecipe(recipeId) {
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    await updateDoc(doc(db, "recipes", recipeId), {
      name: newName,
      category: newCategory,
      ingredients: newIngredients.split(","),
    });
    getRecipes();
  } else {
    alert("🚨 Please fill in all fields.");
  }
}

// ✅ Toggle Favorite Recipe
async function toggleFavorite(recipeId) {
  const recipeRef = doc(db, "recipes", recipeId);
  const recipeSnapshot = await getDoc(recipeRef);
  const currentFavorite = recipeSnapshot.data().favorite || false;
  await updateDoc(recipeRef, { favorite: !currentFavorite });
  getRecipes();
}

// ✅ Get Recipes
async function getRecipes() {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) return;

  const q = query(collection(db, "recipes"), where("email", "==", email));
  const snapshot = await getDocs(q);
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${data.name}</strong> (${data.category})<br>
      Ingredients: ${data.ingredients.join(", ")}
      <button onclick="deleteRecipe('${doc.id}')">❌ Delete</button>
      <button onclick="editRecipe('${doc.id}')">✏️ Edit</button>
      <button onclick="toggleFavorite('${doc.id}')">⭐ ${
      data.favorite ? "Unfavorite" : "Favorite"
    }</button>
    `;
    list.appendChild(item);
  });
}

// ✅ Filter Recipes
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
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${data.name}</strong> (${data.category})<br>
        Ingredients: ${data.ingredients.join(", ")}
        <button onclick="deleteRecipe('${doc.id}')">❌ Delete</button>
        <button onclick="editRecipe('${doc.id}')">✏️ Edit</button>
        <button onclick="toggleFavorite('${doc.id}')">⭐ ${
        data.favorite ? "Unfavorite" : "Favorite"
      }</button>
      `;
      list.appendChild(item);
    }
  });
}*/

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

// ✅ Ensure DOM elements exist before executing
document.addEventListener("DOMContentLoaded", async () => {
  setupEventListeners();
  await getApiKey();
  getRecipes();
});

// ✅ Setup Event Listeners
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
}

// ✅ Sign Out Function
function signOut() {
  localStorage.removeItem("email");
  window.location.href = "index.html";
}

// ✅ Add Recipe Handler
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
    alert("🚨 Please fill out all fields.");
  }
}

// ✅ Add Recipe to Firestore
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
      favorite: false,
      created_at: new Date(),
    });
    getRecipes();
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
  }
}

// ✅ Delete Recipe
async function deleteRecipe(recipeId) {
  await deleteDoc(doc(db, "recipes", recipeId));
  getRecipes();
}

// ✅ Edit Recipe
async function editRecipe(recipeId) {
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    await updateDoc(doc(db, "recipes", recipeId), {
      name: newName,
      category: newCategory,
      ingredients: newIngredients.split(","),
    });
    getRecipes();
  } else {
    alert("🚨 Please fill in all fields.");
  }
}

// ✅ Toggle Favorite Recipe
async function toggleFavorite(recipeId) {
  const recipeRef = doc(db, "recipes", recipeId);
  const recipeSnapshot = await getDoc(recipeRef);
  const currentFavorite = recipeSnapshot.data().favorite || false;
  await updateDoc(recipeRef, { favorite: !currentFavorite });
  getRecipes();
}

// ✅ Get Recipes
async function getRecipes() {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) return;

  const q = query(collection(db, "recipes"), where("email", "==", email));
  const snapshot = await getDocs(q);
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${data.name}</strong> (${data.category})<br>
      Ingredients: ${data.ingredients.join(", ")}
      <button onclick="deleteRecipe('${doc.id}')">❌ Delete</button>
      <button onclick="editRecipe('${doc.id}')">✏️ Edit</button>
      <button onclick="toggleFavorite('${doc.id}')">⭐ ${
      data.favorite ? "Unfavorite" : "Favorite"
    }</button>
    `;
    list.appendChild(item);
  });
}

// ✅ Filter Recipes
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
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${data.name}</strong> (${data.category})<br>
        Ingredients: ${data.ingredients.join(", ")}
      `;
      list.appendChild(item);
    }
  });
}
