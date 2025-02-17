/*import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXHfs546W38_wpb5hKIVatze-StM5NQQE",
  authDomain: "recipe-organizer-f9bc7.firebaseapp.com",
  projectId: "recipe-organizer-f9bc7",
  storageBucket: "recipe-organizer-f9bc7.firebasestorage.app",
  messagingSenderId: "907283353267",
  appId: "1:907283353267:web:dd265f90d55b7fe3756ac6",
  measurementId: "G-5MVPH1ZKFQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sw = new URL("service-worker.js", import.meta.url);
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(sw.href, { scope: "/RecipeOrganizer/" })
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.error("Service Worker Error:", err));
}


const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", async () => {
  const taskText = taskInput.value.trim();

  if (taskText) {
    await addTaskToFirestore(taskText);
    renderTasks();
    taskInput.value = "";
  }
});

async function addTaskToFirestore(taskText) {
  try {
    await addDoc(collection(db, "todos"), {
      text: taskText,
      completed: false,
    });
    console.log("Recipe successfully added");
  } catch (error) {
    console.error("Error adding task: ", error);
  }
}

// Fetch and Render Tasks
async function renderTasks() {
  const tasks = await getTasksFromFirestore();
  console.log("Recipe fetched from Firestore: ", tasks);
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear the list before rendering

  tasks.forEach((task) => {
    if (!task.data().completed) {
      const taskItem = document.createElement("li");
      taskItem.id = task.id;
      taskItem.textContent = task.data().text;
      taskList.appendChild(taskItem);
    }
  });
}

// Get Tasks from Firestore
async function getTasksFromFirestore() {
  const data = await getDocs(collection(db, "todos"));
  const userData = [];
  data.forEach((doc) => {
    userData.push(doc);
  });
  return userData;
}

// Call renderTasks when the app loads
window.addEventListener("load", () => {
  renderTasks();
});

// Sanitize User Input
function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

const taskText = sanitizeInput(taskInput.value.trim());
//await addTaskToFirestore(taskText);

// Remove Task on Click
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});*/

/*import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXHfs546W38_wpb5hKIVatze-StM5NQQE",
  authDomain: "recipe-organizer-f9bc7.firebaseapp.com",
  projectId: "recipe-organizer-f9bc7",
  storageBucket: "recipe-organizer-f9bc7.firebasestorage.app",
  messagingSenderId: "907283353267",
  appId: "1:907283353267:web:dd265f90d55b7fe3756ac6",
  measurementId: "G-5MVPH1ZKFQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sw = new URL("service-worker.js", import.meta.url);
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(sw.href, { scope: "/RecipeOrganizer/" })
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.error("Service Worker Error:", err));
}

// DOM Elements
const recipeInput = document.getElementById("recipeInput");
const categoryInput = document.getElementById("categoryInput");
const ingredientsInput = document.getElementById("ingredientsInput");
const addRecipeBtn = document.getElementById("addRecipeBtn");
const recipeList = document.getElementById("recipeList");

// Add Recipe
addRecipeBtn.addEventListener("click", async () => {
  const recipeName = recipeInput.value.trim();
  const category = categoryInput.value.trim();
  const ingredients = ingredientsInput.value.trim().split(",");

  if (recipeName && category && ingredients.length > 0) {
    await addRecipeToFirestore(recipeName, category, ingredients);
    renderRecipes();
    recipeInput.value = "";
    categoryInput.value = "";
    ingredientsInput.value = "";
  }
});

async function addRecipeToFirestore(recipeName, category, ingredients) {
  try {
    await addDoc(collection(db, "recipes"), {
      name: recipeName,
      category: category,
      ingredients: ingredients,
    });
    console.log("Recipe successfully added");
  } catch (error) {
    console.error("Error adding recipe: ", error);
  }
}

// Fetch and Render Recipes
async function renderRecipes() {
  const recipes = await getRecipesFromFirestore();
  console.log("Recipes fetched from Firestore: ", recipes);
  recipeList.innerHTML = ""; // Clear list before rendering

  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.id = recipe.id;
    recipeItem.innerHTML = `<strong>${recipe.data().name}</strong> - ${
      recipe.data().category
    }<br>
                            Ingredients: ${recipe.data().ingredients.join(", ")}
                            <button class="delete-btn" data-id="${
                              recipe.id
                            }">Delete</button>`;
    recipeList.appendChild(recipeItem);
  });

  // Add delete functionality
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", async (e) => {
      await deleteRecipeFromFirestore(e.target.dataset.id);
      renderRecipes();
    });
  });
}

// Get Recipes from Firestore
async function getRecipesFromFirestore() {
  const data = await getDocs(collection(db, "recipes"));
  const recipeData = [];
  data.forEach((doc) => {
    recipeData.push(doc);
  });
  return recipeData;
}

// Delete Recipe
async function deleteRecipeFromFirestore(id) {
  try {
    await deleteDoc(doc(db, "recipes", id));
    console.log("Recipe deleted");
  } catch (error) {
    console.error("Error deleting recipe: ", error);
  }
}

// Call renderRecipes when the app loads
window.addEventListener("load", () => {
  renderRecipes();
});*/

/*import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Google AI module

const firebaseConfig = {
  apiKey: "AIzaSyBXHfs546W38_wpb5hKIVatze-StM5NQQE",
  authDomain: "recipe-organizer-f9bc7.firebaseapp.com",
  projectId: "recipe-organizer-f9bc7",
  storageBucket: "recipe-organizer-f9bc7.firebasestorage.app",
  messagingSenderId: "907283353267",
  appId: "1:907283353267:web:dd265f90d55b7fe3756ac6",
  measurementId: "G-5MVPH1ZKFQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", { scope: "/RecipeOrganizer/" })
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.error("Service Worker Error:", err));
}

// DOM Elements
const recipeInput = document.getElementById("recipeInput");
const categoryInput = document.getElementById("categoryInput");
const ingredientsInput = document.getElementById("ingredientsInput");
const addRecipeBtn = document.getElementById("addRecipeBtn");
const recipeList = document.getElementById("recipeList");
const categoryFilter = document.getElementById("categoryFilter");
const ingredientFilter = document.getElementById("ingredientFilter");
const filterBtn = document.getElementById("filterBtn");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatOutput = document.getElementById("chatOutput");
const authBtn = document.getElementById("authBtn");

let genAI;
let model;

// Fetch API Key from Firestore
async function getApiKey() {
  try {
    let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    let apiKey = snapshot.data().key;
    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("Google Gemini AI Model Initialized.");
  } catch (error) {
    console.error("Error fetching API key:", error);
  }
}

// AI Chatbot - Ask Question
async function askChatBot(request) {
  if (!model) {
    chatOutput.innerHTML =
      "Chatbot is still initializing. Try again in a few seconds.";
    return;
  }

  try {
    chatOutput.innerHTML = "Thinking...";
    const response = await model.generateContent(request);
    chatOutput.innerHTML = response.text();
  } catch (error) {
    console.error("Error calling chatbot:", error);
    chatOutput.innerHTML = "Chatbot is currently unavailable.";
  }
}

// Handle Chatbot Request
chatSend.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    askChatBot(userMessage);
  }
});

// Add Recipe
addRecipeBtn.addEventListener("click", async () => {
  const recipeName = recipeInput.value.trim();
  const category = categoryInput.value.trim();
  const ingredients = ingredientsInput.value
    .trim()
    .split(",")
    .map((i) => i.trim());

  if (recipeName && category && ingredients.length > 0) {
    await addRecipeToFirestore(recipeName, category, ingredients);
    renderRecipes();
    recipeInput.value = "";
    categoryInput.value = "";
    ingredientsInput.value = "";
  }
});

async function addRecipeToFirestore(recipeName, category, ingredients) {
  try {
    await addDoc(collection(db, "recipes"), {
      name: recipeName,
      category: category,
      ingredients: ingredients,
      favorite: false,
    });
    console.log("Recipe successfully added");
  } catch (error) {
    console.error("Error adding recipe: ", error);
  }
}

// Fetch and Render Recipes
async function renderRecipes(category = "", ingredient = "") {
  const recipes = await getRecipesFromFirestore();
  recipeList.innerHTML = ""; // Clear list before rendering

  recipes.forEach((recipe) => {
    const data = recipe.data();

    if (
      (category && data.category !== category) ||
      (ingredient &&
        !data.ingredients.some((ing) => ing.toLowerCase().includes(ingredient)))
    ) {
      return;
    }

    const recipeItem = document.createElement("li");
    recipeItem.innerHTML = `
      <strong>${data.name}</strong> - ${data.category} <br>
      Ingredients: ${data.ingredients.join(", ")}
      <button class="fav-btn" data-id="${recipe.id}" style="color: ${
      data.favorite ? "gold" : "black"
    }">⭐</button>
      <button class="edit-btn" data-id="${recipe.id}">✏️</button>
      <button class="delete-btn" data-id="${recipe.id}">❌</button>
    `;

    recipeList.appendChild(recipeItem);
  });

  // Attach Event Listeners
  document
    .querySelectorAll(".fav-btn")
    .forEach((btn) => btn.addEventListener("click", toggleFavorite));
  document
    .querySelectorAll(".edit-btn")
    .forEach((btn) => btn.addEventListener("click", editRecipe));
  document.querySelectorAll(".delete-btn").forEach((btn) =>
    btn.addEventListener("click", async (e) => {
      await deleteRecipeFromFirestore(e.target.dataset.id);
      renderRecipes(category, ingredient);
    })
  );
}

// Filter Recipes
filterBtn.addEventListener("click", () => {
  const selectedCategory = categoryFilter.value;
  const ingredientQuery = ingredientFilter.value.trim().toLowerCase();
  renderRecipes(selectedCategory, ingredientQuery);
});

// Get Recipes from Firestore
async function getRecipesFromFirestore() {
  const data = await getDocs(collection(db, "recipes"));
  const recipeData = [];
  data.forEach((doc) => {
    recipeData.push(doc);
  });
  return recipeData;
}

// Delete Recipe
async function deleteRecipeFromFirestore(id) {
  try {
    await deleteDoc(doc(db, "recipes", id));
    console.log("Recipe deleted");
  } catch (error) {
    console.error("Error deleting recipe: ", error);
  }
}

// Toggle Favorite
async function toggleFavorite(e) {
  const recipeId = e.target.dataset.id;
  const recipeRef = doc(db, "recipes", recipeId);
  const recipeSnapshot = await getDocs(recipeRef);
  const currentFavorite = recipeSnapshot.data().favorite || false;

  await updateDoc(recipeRef, { favorite: !currentFavorite });
  renderRecipes();
}

// Edit Recipe
async function editRecipe(e) {
  const recipeId = e.target.dataset.id;
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    await updateDoc(doc(db, "recipes", recipeId), {
      name: newName,
      category: newCategory,
      ingredients: newIngredients.split(",").map((i) => i.trim()),
    });
    renderRecipes();
  }
}

// Load Recipes and API Key on Startup
window.addEventListener("load", async () => {
  await getApiKey();
  renderRecipes();
});*/

/*import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Google AI module

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXHfs546W38_wpb5hKIVatze-StM5NQQE",
  authDomain: "recipe-organizer-f9bc7.firebaseapp.com",
  projectId: "recipe-organizer-f9bc7",
  storageBucket: "recipe-organizer-f9bc7.firebasestorage.app",
  messagingSenderId: "907283353267",
  appId: "1:907283353267:web:dd265f90d55b7fe3756ac6",
  measurementId: "G-5MVPH1ZKFQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Register Service Worker for PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", { scope: "/RecipeOrganizer/" })
    .then(() => console.log("✅ Service Worker Registered"))
    .catch((err) => console.error("🚨 Service Worker Error:", err));
}

// ✅ DOM Elements
const recipeInput = document.getElementById("recipeInput");
const categoryInput = document.getElementById("categoryInput");
const ingredientsInput = document.getElementById("ingredientsInput");
const addRecipeBtn = document.getElementById("addRecipeBtn");
const recipeList = document.getElementById("recipeList");
const categoryFilter = document.getElementById("categoryFilter");
const ingredientFilter = document.getElementById("ingredientFilter");
const filterBtn = document.getElementById("filterBtn");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatOutput = document.getElementById("chatOutput");
const authBtn = document.getElementById("authBtn");

let genAI;
let model;

// ✅ Step 1: Securely Fetch Google Gemini API Key from Firestore
async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      console.log("✅ Google Gemini AI Model Initialized");
    } else {
      console.error("🚨 No API key found in Firestore");
      chatOutput.innerHTML = "AI Chatbot not available (missing API key).";
    }
  } catch (error) {
    console.error("🚨 Error fetching API key:", error);
    chatOutput.innerHTML = "Error initializing chatbot.";
  }
}

// ✅ Step 2: Google AI Chatbot Function
async function askChatBot(request) {
  if (!model) {
    chatOutput.innerHTML = "AI is initializing... Please wait.";
    return;
  }

  try {
    chatOutput.innerHTML = "🤖 Thinking...";
    const response = await model.generateContent(request);
    chatOutput.innerHTML = response.text();
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    chatOutput.innerHTML = "Chatbot is currently unavailable.";
  }
}

// ✅ Step 3: Handle Chatbot Input
chatSend.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    askChatBot(userMessage);
    chatInput.value = "";
  }
});

// ✅ Step 4: Add a New Recipe to Firestore
addRecipeBtn.addEventListener("click", async () => {
  const recipeName = recipeInput.value.trim();
  const category = categoryInput.value.trim();
  const ingredients = ingredientsInput.value
    .trim()
    .split(",")
    .map((i) => i.trim());

  if (recipeName && category && ingredients.length > 0) {
    await addRecipeToFirestore(recipeName, category, ingredients);
    renderRecipes();
    recipeInput.value = "";
    categoryInput.value = "";
    ingredientsInput.value = "";
  } else {
    alert("🚨 Please fill out all fields before adding.");
  }
});

async function addRecipeToFirestore(recipeName, category, ingredients) {
  try {
    await addDoc(collection(db, "recipes"), {
      name: recipeName,
      category: category,
      ingredients: ingredients,
      favorite: false,
      created_at: new Date(),
    });
    console.log("✅ Recipe successfully added");
  } catch (error) {
    console.error("🚨 Error adding recipe: ", error);
  }
}

// ✅ Step 5: Fetch and Render Recipes with Filtering
async function renderRecipes(category = "", ingredient = "") {
  const recipes = await getRecipesFromFirestore();
  recipeList.innerHTML = ""; // Clear previous list

  recipes.forEach((recipe) => {
    const data = recipe.data();

    // Apply Category and Ingredient Filters
    if (
      (category && data.category.toLowerCase() !== category.toLowerCase()) ||
      (ingredient &&
        !data.ingredients.some((ing) =>
          ing.toLowerCase().includes(ingredient.toLowerCase())
        ))
    ) {
      return; // Skip if filters don't match
    }

    // ✅ Render Recipe Item
    const recipeItem = document.createElement("li");
    recipeItem.innerHTML = `
      <strong>${data.name}</strong> - ${data.category} <br>
      Ingredients: ${data.ingredients.join(", ")} <br>
      <button class="fav-btn" data-id="${recipe.id}" style="color: ${
      data.favorite ? "gold" : "black"
    }">⭐</button>
      <button class="edit-btn" data-id="${recipe.id}">✏️ Edit</button>
      <button class="delete-btn" data-id="${recipe.id}">❌ Delete</button>
    `;

    recipeList.appendChild(recipeItem);
  });

  // ✅ Attach Event Listeners to Buttons
  document
    .querySelectorAll(".fav-btn")
    .forEach((btn) => btn.addEventListener("click", toggleFavorite));
  document
    .querySelectorAll(".edit-btn")
    .forEach((btn) => btn.addEventListener("click", editRecipe));
  document.querySelectorAll(".delete-btn").forEach((btn) =>
    btn.addEventListener("click", async (e) => {
      await deleteRecipeFromFirestore(e.target.dataset.id);
      renderRecipes(category, ingredient);
    })
  );
}

// ✅ Step 6: Apply Filters for Recipes
filterBtn.addEventListener("click", () => {
  const selectedCategory = categoryFilter.value;
  const ingredientQuery = ingredientFilter.value.trim().toLowerCase();
  renderRecipes(selectedCategory, ingredientQuery);
});

// ✅ Step 7: Fetch Recipes from Firestore
async function getRecipesFromFirestore() {
  const data = await getDocs(collection(db, "recipes"));
  const recipeData = [];
  data.forEach((doc) => {
    recipeData.push(doc);
  });
  return recipeData;
}

// ✅ Step 8: Delete Recipe from Firestore
async function deleteRecipeFromFirestore(id) {
  try {
    await deleteDoc(doc(db, "recipes", id));
    console.log("✅ Recipe deleted");
  } catch (error) {
    console.error("🚨 Error deleting recipe: ", error);
  }
}

// ✅ Step 9: Toggle Recipe Favorite Status
async function toggleFavorite(e) {
  const recipeId = e.target.dataset.id;
  const recipeRef = doc(db, "recipes", recipeId);
  const recipeSnapshot = await getDoc(recipeRef);
  const currentFavorite = recipeSnapshot.data().favorite || false;

  try {
    await updateDoc(recipeRef, { favorite: !currentFavorite });
    console.log(`✅ Favorite status updated`);
    renderRecipes();
  } catch (error) {
    console.error("🚨 Error updating favorite:", error);
  }
}

// ✅ Step 10: Edit Existing Recipe
async function editRecipe(e) {
  const recipeId = e.target.dataset.id;
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    try {
      await updateDoc(doc(db, "recipes", recipeId), {
        name: newName,
        category: newCategory,
        ingredients: newIngredients.split(",").map((i) => i.trim()),
      });
      console.log("✅ Recipe updated");
      renderRecipes();
    } catch (error) {
      console.error("🚨 Error updating recipe:", error);
    }
  } else {
    alert("🚨 Please fill in all fields to update the recipe.");
  }
}

// ✅ Step 11: Load Recipes and Initialize API Key on Startup
window.addEventListener("load", async () => {
  await getApiKey(); // Initialize Google AI
  renderRecipes(); // Load Recipes
});*/

/*import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Google AI module

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXHfs546W38_wpb5hKIVatze-StM5NQQE",
  authDomain: "recipe-organizer-f9bc7.firebaseapp.com",
  projectId: "recipe-organizer-f9bc7",
  storageBucket: "recipe-organizer-f9bc7.firebasestorage.app",
  messagingSenderId: "907283353267",
  appId: "1:907283353267:web:dd265f90d55b7fe3756ac6",
  measurementId: "G-5MVPH1ZKFQ",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ FIX: Use `import.meta.url` for Parcel v2 compatibility (Service Worker)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(new URL("service-worker.js", import.meta.url), {
      scope: "/RecipeOrganizer/",
    })
    .then(() => console.log("✅ Service Worker Registered"))
    .catch((err) => console.error("🚨 Service Worker Error:", err));
}

// ✅ DOM Elements (Defined in DOMContentLoaded to ensure proper loading)
let recipeInput, categoryInput, ingredientsInput, addRecipeBtn;
let recipeList, categoryFilter, ingredientFilter, filterBtn;
let chatInput, chatSend, chatHistory;

let genAI;
let model;

// ✅ Step 1: Securely Fetch Google Gemini API Key from Firestore
async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      console.log("✅ Google Gemini AI Model Initialized");
    } else {
      appendMessage("🚨 No API key found in Firestore");
    }
  } catch (error) {
    console.error("🚨 Error fetching API key:", error);
    appendMessage("🚨 Chatbot error: API initialization failed.");
  }
}

// ✅ Step 2: Google AI Chatbot Function (Fixed Response Parsing)
async function askChatBot(request) {
  if (!model) {
    appendMessage("AI is initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    const result = await model.generateContent(request);
    const aiResponse =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "No response from AI.";
    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage("🚨 Chatbot service is currently unavailable.");
  }
}

// ✅ Step 3: Chatbot Commands
function ruleChatBot(request) {
  const lowerCaseRequest = request.toLowerCase();

  if (lowerCaseRequest.startsWith("add recipe")) {
    let recipeDetails = lowerCaseRequest.replace("add recipe", "").trim();
    let [name, category, ingredients] = recipeDetails.split(";");
    if (name && category && ingredients) {
      addRecipeToFirestore(
        name.trim(),
        category.trim(),
        ingredients.trim().split(",")
      );
      appendMessage(`✅ Recipe '${name}' added!`);
    } else {
      appendMessage(
        "⚠️ Use format: 'add recipe Name; Category; ingredient1, ingredient2'"
      );
    }
    return true;
  }

  if (lowerCaseRequest.startsWith("show recipes")) {
    renderRecipes();
    appendMessage("📜 Displaying all recipes...");
    return true;
  }

  if (lowerCaseRequest.startsWith("find recipe")) {
    let searchTerm = lowerCaseRequest.replace("find recipe", "").trim();
    renderRecipes("", searchTerm);
    appendMessage(`🔍 Searching for recipes with '${searchTerm}'...`);
    return true;
  }

  return false;
}

// ✅ Step 4: Chat Input Handling
function handleChatInput() {
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

// ✅ Step 5: Append Chat Messages to Chat History
function appendMessage(message) {
  const historyItem = document.createElement("div");
  historyItem.textContent = message;
  historyItem.className = "history";
  chatHistory.appendChild(historyItem);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// ✅ Step 6: Add a New Recipe to Firestore
async function addRecipeToFirestore(name, category, ingredients) {
  try {
    await addDoc(collection(db, "recipes"), {
      name,
      category,
      ingredients,
      favorite: false,
      created_at: new Date(),
    });
    console.log(`✅ Recipe '${name}' added.`);
    renderRecipes();
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
  }
}

// ✅ Step 7: Show All Recipes with Filtering (Fixed ID issue)
async function renderRecipes(category = "", ingredient = "") {
  const recipes = await getRecipesFromFirestore();
  recipeList.innerHTML = ""; // Clear previous list

  if (recipes.length === 0) {
    recipeList.innerHTML = "<p>🚫 No recipes found.</p>";
    return;
  }

  recipes.forEach((recipeDoc) => {
    const data = recipeDoc.data();
    if (
      (category && data.category.toLowerCase() !== category.toLowerCase()) ||
      (ingredient &&
        !data.ingredients.some((ing) =>
          ing.toLowerCase().includes(ingredient.toLowerCase())
        ))
    ) {
      return; // Skip if filters don't match
    }

    const recipeItem = document.createElement("li");
    recipeItem.innerHTML = `
      <strong>${data.name}</strong> - ${data.category} <br>
      Ingredients: ${data.ingredients.join(", ")} <br>
      <button class="fav-btn" data-id="${recipeDoc.id}" style="color: ${
      data.favorite ? "gold" : "black"
    }">⭐</button>
      <button class="edit-btn" data-id="${recipeDoc.id}">✏️ Edit</button>
      <button class="delete-btn" data-id="${recipeDoc.id}">❌ Delete</button>
    `;

    recipeList.appendChild(recipeItem);
  });

  // ✅ Attach Event Listeners
  document
    .querySelectorAll(".fav-btn")
    .forEach((btn) => btn.addEventListener("click", toggleFavorite));
  document
    .querySelectorAll(".edit-btn")
    .forEach((btn) => btn.addEventListener("click", editRecipe));
  document.querySelectorAll(".delete-btn").forEach((btn) =>
    btn.addEventListener("click", async (e) => {
      await deleteRecipeFromFirestore(e.target.dataset.id);
      renderRecipes(category, ingredient);
    })
  );
}

// ✅ Step 8: Filter Recipes by Category or Ingredient
function handleFilter() {
  const selectedCategory = categoryFilter.value;
  const ingredientQuery = ingredientFilter.value.trim().toLowerCase();
  renderRecipes(selectedCategory, ingredientQuery);
}

// ✅ Step 9: Fetch Recipes from Firestore
async function getRecipesFromFirestore() {
  const data = await getDocs(collection(db, "recipes"));
  return data.docs;
}

// ✅ Step 10: Delete Recipe from Firestore
async function deleteRecipeFromFirestore(id) {
  try {
    await deleteDoc(doc(db, "recipes", id));
    console.log(`✅ Recipe deleted.`);
    renderRecipes();
  } catch (error) {
    console.error("🚨 Error deleting recipe:", error);
  }
}

// ✅ Step 11: Toggle Recipe Favorite Status
async function toggleFavorite(e) {
  const recipeId = e.target.dataset.id;
  const recipeRef = doc(db, "recipes", recipeId);
  const recipeSnapshot = await getDoc(recipeRef);
  const currentFavorite = recipeSnapshot.data().favorite || false;

  try {
    await updateDoc(recipeRef, { favorite: !currentFavorite });
    console.log("✅ Favorite status updated.");
    renderRecipes();
  } catch (error) {
    console.error("🚨 Error updating favorite status:", error);
  }
}

// ✅ Step 12: Edit Existing Recipe
async function editRecipe(e) {
  const recipeId = e.target.dataset.id;
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    try {
      await updateDoc(doc(db, "recipes", recipeId), {
        name: newName,
        category: newCategory,
        ingredients: newIngredients.split(",").map((i) => i.trim()),
      });
      console.log("✅ Recipe updated.");
      renderRecipes();
    } catch (error) {
      console.error("🚨 Error updating recipe:", error);
    }
  } else {
    alert("🚨 Please fill in all fields.");
  }
}

// ✅ Step 13: Initialize App Properly (Ensure DOM Loaded)
window.addEventListener("DOMContentLoaded", async () => {
  // Get DOM Elements after loading
  recipeInput = document.getElementById("recipeInput");
  categoryInput = document.getElementById("categoryInput");
  ingredientsInput = document.getElementById("ingredientsInput");
  addRecipeBtn = document.getElementById("addRecipeBtn");
  recipeList = document.getElementById("recipeList");
  categoryFilter = document.getElementById("categoryFilter");
  ingredientFilter = document.getElementById("ingredientFilter");
  filterBtn = document.getElementById("filterBtn");
  chatInput = document.getElementById("chat-input");
  chatSend = document.getElementById("send-btn");
  chatHistory = document.getElementById("chat-history");

  // Attach Event Listeners
  addRecipeBtn.addEventListener("click", async () => {
    const recipeName = recipeInput.value.trim();
    const category = categoryInput.value.trim();
    const ingredients = ingredientsInput.value
      .trim()
      .split(",")
      .map((i) => i.trim());
    if (recipeName && category && ingredients.length > 0) {
      await addRecipeToFirestore(recipeName, category, ingredients);
      recipeInput.value = "";
      categoryInput.value = "";
      ingredientsInput.value = "";
    } else {
      alert("🚨 Please fill out all fields.");
    }
  });

  chatSend.addEventListener("click", handleChatInput);
  filterBtn.addEventListener("click", handleFilter);

  // ✅ Load Recipes and Initialize AI
  await getApiKey();
  renderRecipes();
});*/

/*import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Google AI module

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXHfs546W38_wpb5hKIVatze-StM5NQQE",
  authDomain: "recipe-organizer-f9bc7.firebaseapp.com",
  projectId: "recipe-organizer-f9bc7",
  storageBucket: "recipe-organizer-f9bc7.firebasestorage.app",
  messagingSenderId: "907283353267",
  appId: "1:907283353267:web:dd265f90d55b7fe3756ac6",
  measurementId: "G-5MVPH1ZKFQ",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ FIX: Use `import.meta.url` for Parcel v2 compatibility (Service Worker)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(new URL("service-worker.js", import.meta.url), {
      scope: "/RecipeOrganizer/",
    })
    .then(() => console.log("✅ Service Worker Registered"))
    .catch((err) => console.error("🚨 Service Worker Error:", err));
}

// ✅ DOM Elements (Defined in DOMContentLoaded to ensure proper loading)
let recipeInput, categoryInput, ingredientsInput, addRecipeBtn;
let recipeList, categoryFilter, ingredientFilter, filterBtn;
let chatInput, chatSend, chatHistory;

let genAI;
let model;

// ✅ Step 1: Securely Fetch Google Gemini API Key from Firestore
async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      console.log("✅ Google Gemini AI Model Initialized");
    } else {
      appendMessage("🚨 No API key found in Firestore");
    }
  } catch (error) {
    console.error("🚨 Error fetching API key:", error);
    appendMessage("🚨 Chatbot error: API initialization failed.");
  }
}

// ✅ Step 2: Google AI Chatbot Function (Fixed Response Parsing)
async function askChatBot(request) {
  if (!model) {
    appendMessage("AI is initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    const result = await model.generateContent(request);
    console.log("🟡 AI Full Response:", result);

    if (result?.candidates && result.candidates[0]?.content?.parts) {
      const aiResponse = result.candidates[0].content.parts
        .map((part) => part.text)
        .join("\n");
      appendMessage(`🤖 AI: ${aiResponse}`);
    } else {
      appendMessage("🚨 Chatbot: No valid response from AI.");
    }
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(
      `🚨 Chatbot is unavailable: ${error.message || "Unknown error"}`
    );
  }
}

// ✅ Step 3: Chatbot Commands
function ruleChatBot(request) {
  const lowerCaseRequest = request.toLowerCase();

  if (lowerCaseRequest.startsWith("add recipe")) {
    let recipeDetails = lowerCaseRequest.replace("add recipe", "").trim();
    let [name, category, ingredients] = recipeDetails.split(";");
    if (name && category && ingredients) {
      addRecipeToFirestore(
        name.trim(),
        category.trim(),
        ingredients.trim().split(",")
      );
      appendMessage(`✅ Recipe '${name}' added!`);
    } else {
      appendMessage(
        "⚠️ Use format: 'add recipe Name; Category; ingredient1, ingredient2'"
      );
    }
    return true;
  }

  if (lowerCaseRequest.startsWith("show recipes")) {
    renderRecipes();
    appendMessage("📜 Displaying all recipes...");
    return true;
  }

  if (lowerCaseRequest.startsWith("find recipe")) {
    let searchTerm = lowerCaseRequest.replace("find recipe", "").trim();
    renderRecipes("", searchTerm);
    appendMessage(`🔍 Searching for recipes with '${searchTerm}'...`);
    return true;
  }

  return false;
}

// ✅ Step 4: Chat Input Handling
function handleChatInput() {
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

// ✅ Step 5: Append Chat Messages to Chat History
function appendMessage(message) {
  const historyItem = document.createElement("div");
  historyItem.textContent = message;
  historyItem.className = "history";
  chatHistory.appendChild(historyItem);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// ✅ Step 6: Add a New Recipe to Firestore
async function addRecipeToFirestore(name, category, ingredients) {
  try {
    await addDoc(collection(db, "recipes"), {
      name,
      category,
      ingredients,
      favorite: false,
      created_at: new Date(),
    });
    console.log(`✅ Recipe '${name}' added.`);
    renderRecipes();
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
  }
}

// ✅ Step 7: Show All Recipes with Proper Filtering (Fixed Category & Ingredient Filters)
async function renderRecipes(category = "", ingredient = "") {
  const recipes = await getRecipesFromFirestore();
  recipeList.innerHTML = ""; // Clear previous list

  const filteredRecipes = recipes.filter((recipeDoc) => {
    const data = recipeDoc.data();
    const recipeCategory = data.category ? data.category.toLowerCase() : "";
    const categoryMatch =
      !category || recipeCategory === category.toLowerCase();
    const ingredientMatch =
      !ingredient ||
      data.ingredients.some((ing) =>
        ing.toLowerCase().includes(ingredient.toLowerCase())
      );
    return categoryMatch && ingredientMatch;
  });

  if (filteredRecipes.length === 0) {
    recipeList.innerHTML = "<p>🚫 No matching recipes found.</p>";
    return;
  }

  filteredRecipes.forEach((recipeDoc) => {
    const data = recipeDoc.data();
    const recipeItem = document.createElement("li");
    recipeItem.innerHTML = `
      <strong>${data.name}</strong> - ${data.category} <br>
      Ingredients: ${data.ingredients.join(", ")} <br>
      <button class="fav-btn" data-id="${recipeDoc.id}" style="color: ${
      data.favorite ? "gold" : "black"
    }">⭐</button>
      <button class="edit-btn" data-id="${recipeDoc.id}">✏️ Edit</button>
      <button class="delete-btn" data-id="${recipeDoc.id}">❌ Delete</button>
    `;

    recipeList.appendChild(recipeItem);
  });

  // ✅ Attach Event Listeners
  document
    .querySelectorAll(".fav-btn")
    .forEach((btn) => btn.addEventListener("click", toggleFavorite));
  document
    .querySelectorAll(".edit-btn")
    .forEach((btn) => btn.addEventListener("click", editRecipe));
  document.querySelectorAll(".delete-btn").forEach((btn) =>
    btn.addEventListener("click", async (e) => {
      await deleteRecipeFromFirestore(e.target.dataset.id);
      renderRecipes(category, ingredient);
    })
  );
}

// ✅ Step 8: Filter Recipes by Category or Ingredient
function handleFilter() {
  const selectedCategory = categoryFilter.value;
  const ingredientQuery = ingredientFilter.value.trim().toLowerCase();
  renderRecipes(selectedCategory, ingredientQuery);
}

// ✅ Step 9: Fetch Recipes from Firestore
async function getRecipesFromFirestore() {
  const data = await getDocs(collection(db, "recipes"));
  return data.docs;
}

// ✅ Step 10: Delete Recipe from Firestore
async function deleteRecipeFromFirestore(id) {
  try {
    await deleteDoc(doc(db, "recipes", id));
    console.log(`✅ Recipe deleted.`);
    renderRecipes();
  } catch (error) {
    console.error("🚨 Error deleting recipe:", error);
  }
}

// ✅ Step 11: Toggle Recipe Favorite Status
async function toggleFavorite(e) {
  const recipeId = e.target.dataset.id;
  const recipeRef = doc(db, "recipes", recipeId);
  const recipeSnapshot = await getDoc(recipeRef);
  const currentFavorite = recipeSnapshot.data().favorite || false;

  try {
    await updateDoc(recipeRef, { favorite: !currentFavorite });
    console.log("✅ Favorite status updated.");
    renderRecipes();
  } catch (error) {
    console.error("🚨 Error updating favorite status:", error);
  }
}

// ✅ Step 12: Edit Existing Recipe
async function editRecipe(e) {
  const recipeId = e.target.dataset.id;
  const newName = prompt("Enter new recipe name:");
  const newCategory = prompt("Enter new category:");
  const newIngredients = prompt("Enter new ingredients (comma-separated):");

  if (newName && newCategory && newIngredients) {
    try {
      await updateDoc(doc(db, "recipes", recipeId), {
        name: newName,
        category: newCategory,
        ingredients: newIngredients.split(",").map((i) => i.trim()),
      });
      console.log("✅ Recipe updated.");
      renderRecipes();
    } catch (error) {
      console.error("🚨 Error updating recipe:", error);
    }
  } else {
    alert("🚨 Please fill in all fields.");
  }
}

// ✅ Step 13: Initialize App Properly (Ensure DOM Loaded)
window.addEventListener("DOMContentLoaded", async () => {
  // Get DOM Elements after loading
  recipeInput = document.getElementById("recipeInput");
  categoryInput = document.getElementById("categoryInput");
  ingredientsInput = document.getElementById("ingredientsInput");
  addRecipeBtn = document.getElementById("addRecipeBtn");
  recipeList = document.getElementById("recipeList");
  categoryFilter = document.getElementById("categoryFilter");
  ingredientFilter = document.getElementById("ingredientFilter");
  filterBtn = document.getElementById("filterBtn");
  chatInput = document.getElementById("chat-input");
  chatSend = document.getElementById("send-btn");
  chatHistory = document.getElementById("chat-history");

  // Attach Event Listeners
  addRecipeBtn.addEventListener("click", async () => {
    const recipeName = recipeInput.value.trim();
    const category = categoryInput.value.trim();
    const ingredients = ingredientsInput.value
      .trim()
      .split(",")
      .map((i) => i.trim());
    if (recipeName && category && ingredients.length > 0) {
      await addRecipeToFirestore(recipeName, category, ingredients);
      recipeInput.value = "";
      categoryInput.value = "";
      ingredientsInput.value = "";
    } else {
      alert("🚨 Please fill out all fields.");
    }
  });

  chatSend.addEventListener("click", handleChatInput);
  filterBtn.addEventListener("click", handleFilter);

  // ✅ Load Recipes and Initialize AI
  await getApiKey();
  renderRecipes();
});*/

// ✅ Full app.js with Fixes
import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "recipe-organizer-f9bc7.firebaseapp.com",
  projectId: "recipe-organizer-f9bc7",
  storageBucket: "recipe-organizer-f9bc7.firebasestorage.app",
  messagingSenderId: "907283353267",
  appId: "1:907283353267:web:dd265f90d55b7fe3756ac6",
  measurementId: "G-5MVPH1ZKFQ",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ DOM Elements
let recipeInput, categoryInput, ingredientsInput, addRecipeBtn;
let recipeList, categoryFilter, ingredientFilter, filterBtn;
let chatInput, chatSend, chatHistory;
let genAI, model;

// -----------------------🧠 GOOGLE AI Chatbot -----------------------
async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    } else {
      appendMessage("🚨 No Google Gemini API key found");
    }
  } catch (error) {
    appendMessage(`🚨 Chatbot error: ${error.message}`);
  }
}

// ✅ 2. Chatbot Function with Fixes
async function askChatBot(request) {
  if (!model) {
    appendMessage("AI is initializing...");
    return;
  }
  try {
    appendMessage(`🧑‍💻 You: ${request}`);
    const result = await model.generateContent([request]);
    let aiResponse =
      result?.responses?.[0]?.text ?? "🚫 No meaningful response from AI.";
    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    appendMessage(`🚨 Chatbot Error: ${error.message}`);
  }
}

// ✅ 3. Recipe Filtering Fixes
function handleFilter(event) {
  event.preventDefault();
  const category = categoryFilter.value.trim().toLowerCase();
  const ingredient = ingredientFilter.value.trim().toLowerCase();
  renderRecipes(category, ingredient);
}

// ✅ 4. Render Recipes with Filter
async function renderRecipes(category = "", ingredient = "") {
  const recipes = await getRecipesFromFirestore();
  recipeList.innerHTML = "";

  const filteredRecipes = recipes.filter(({ data }) => {
    const catMatch =
      !category || data.category?.toLowerCase().includes(category);
    const ingMatch =
      !ingredient ||
      data.ingredients?.some((i) => i.toLowerCase().includes(ingredient));
    return catMatch && ingMatch;
  });

  filteredRecipes.forEach(({ id, data }) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${data.name}</strong> (${data.category})`;
    recipeList.appendChild(item);
  });
}

// ✅ 5. Event Listeners with Fixes
window.addEventListener("DOMContentLoaded", async () => {
  recipeInput = document.getElementById("recipeInput");
  categoryInput = document.getElementById("categoryInput");
  ingredientsInput = document.getElementById("ingredientsInput");
  addRecipeBtn = document.getElementById("addRecipeBtn");
  categoryFilter = document.getElementById("categoryFilter");
  ingredientFilter = document.getElementById("ingredientFilter");
  filterBtn = document.getElementById("filterBtn");
  chatInput = document.getElementById("chat-input");
  chatSend = document.getElementById("send-btn");
  chatHistory = document.getElementById("chat-history");

  addRecipeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleAddRecipe();
  });
  chatSend.addEventListener("click", (e) => {
    e.preventDefault();
    handleChatInput();
  });
  filterBtn.addEventListener("click", handleFilter);

  await getApiKey();
  renderRecipes();
});
