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

import { initializeApp } from "firebase/app";
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
});
