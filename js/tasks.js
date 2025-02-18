import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
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

// ✅ Chatbot AI Query (Fixing the Missing Function)
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

    const aiResponse =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "🚫 No meaningful response from AI.";

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(`🚨 Chatbot Error: ${error.message}`);
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

// ✅ Fetch API Key on Load
window.addEventListener("DOMContentLoaded", getApiKey);
