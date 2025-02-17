import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI;
let model;

// ✅ Fetch API Key from Firestore
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
  const historyItem = document.createElement("div");
  historyItem.textContent = message;
  historyItem.className = "history";
  chatHistory.appendChild(historyItem);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// ✅ Chatbot Event Listener
document.getElementById("send-btn").addEventListener("click", handleChatInput);

function handleChatInput() {
  const chatInput = document.getElementById("chat-input");
  const prompt = chatInput.value.trim();
  if (prompt) {
    if (!ruleChatBot(prompt)) {
      askChatBot(prompt); // Query AI if no rules match
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
const signOutBttn = document.getElementById("signOutBttn");
signOutBttn.addEventListener("click", () => {
  localStorage.removeItem("email");
  window.location.href = "index.html";
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
