/*import { GoogleGenerativeAI } from "@google/generative-ai";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

// ✅ Global Variables
let genAI;
let model;
let apiKeyLoaded = false;

// ✅ Fetch Google Gemini API Key from Firestore
export async function getApiKey() {
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

// ✅ Ask Chatbot
export async function askChatBot(request) {
  if (!genAI || !model) {
    appendMessage("🚨 AI is still initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: request }] }],
    });

    console.log("🟡 AI Full Response:", result);

    if (result && result.candidates) {
      console.log("AI Candidates:", result.candidates);
    }

    let aiResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!aiResponse || aiResponse.length < 5) {
      console.warn("AI returned no valid response.");
      aiResponse = "🚫 AI could not generate a meaningful response.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(`🚨 Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
}

// ✅ Append Chat Messages
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
export function handleChatInput() {
  const chatInput = document.getElementById("chat-input");
  if (!chatInput) return;

  const prompt = chatInput.value.trim();
  if (prompt) {
    askChatBot(prompt);
  } else {
    appendMessage("⚠️ Please enter a prompt.");
  }
  chatInput.value = "";
}*/

/*import { GoogleGenerativeAI } from "@google/generative-ai";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

// ✅ Global Variables
let genAI;
let model;
let apiKeyLoaded = false;

// ✅ Fetch Google Gemini API Key from Firestore
export async function getApiKey() {
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

// ✅ Process User Input for AI
export async function askChatBot(request) {
  if (!genAI || !model) {
    appendMessage("🚨 AI is still initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: request }] }],
    });

    console.log("🟡 AI Full Response:", result);

    // ✅ Extract AI response correctly
    let aiResponse = "";

    // New logic to properly extract response
    if (
      result &&
      result.response &&
      result.response.candidates &&
      result.response.candidates.length > 0
    ) {
      aiResponse =
        result.response.candidates[0]?.content?.parts?.[0]?.text?.trim();
    } else if (result && result.candidates && result.candidates.length > 0) {
      aiResponse = result.candidates[0]?.content?.parts?.[0]?.text?.trim();
    }

    if (!aiResponse || aiResponse.length < 5) {
      console.warn("⚠️ AI did not generate a valid response.");
      aiResponse = "🚫 AI could not generate a meaningful response.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(`🚨 Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
}

// ✅ Handle Chat Input (Send Button)
export function handleChatInput() {
  const chatInput = document.getElementById("chat-input");
  if (!chatInput) return;

  const prompt = chatInput.value.trim();
  if (prompt) {
    askChatBot(prompt);
  } else {
    appendMessage("⚠️ Please enter a prompt.");
  }
  chatInput.value = "";
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

// ✅ Add Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("send-btn")
    ?.addEventListener("click", handleChatInput);
});*/

/*import { GoogleGenerativeAI } from "@google/generative-ai";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

// ✅ Global Variables
let genAI;
let model;
let apiKeyLoaded = false;

// ✅ Fetch Google Gemini API Key from Firestore
export async function getApiKey() {
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

// ✅ Process User Input for AI
export async function askChatBot(request) {
  if (!genAI || !model) {
    appendMessage("🚨 AI is still initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    const formattedRequest = `
This is a chatbot for a **Recipe Organizer app**. 
- Users can add, edit, delete, and filter recipes. 
- If a user asks about recipes, give **specific steps**. 
- If it's a general question, respond normally.

**User's question:** ${request}
`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: request }] }],
    });

    console.log("🟡 AI Full Response:", result);

    // ✅ Extract AI response correctly
    let aiResponse = "";

    // New logic to properly extract response
    if (
      result &&
      result.response &&
      result.response.candidates &&
      result.response.candidates.length > 0
    ) {
      aiResponse =
        result.response.candidates[0]?.content?.parts?.[0]?.text?.trim();
    } else if (result && result.candidates && result.candidates.length > 0) {
      aiResponse = result.candidates[0]?.content?.parts?.[0]?.text?.trim();
    }

    if (!aiResponse || aiResponse.length < 5) {
      console.warn("⚠️ AI did not generate a valid response.");
      aiResponse = "🚫 AI could not generate a meaningful response.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(`🚨 Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
}

// ✅ Handle Chat Input (Send Button)
export function handleChatInput() {
  const chatInput = document.getElementById("chat-input");
  if (!chatInput) return;

  const prompt = chatInput.value.trim();
  if (prompt) {
    askChatBot(prompt);
  } else {
    appendMessage("⚠️ Please enter a prompt.");
  }
  chatInput.value = "";
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

// ✅ Add Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("send-btn")
    ?.addEventListener("click", handleChatInput);
});

// ✅ Allow "Enter" key to submit chat input
document.getElementById("chat-input")?.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("send-btn")?.click();
  }
});

// ✅ Allow "Enter" key to submit adding recipes
document
  .getElementById("recipeInput")
  ?.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      document.getElementById("addRecipeBtn")?.click();
    }
  });

// ✅ Allow "Enter" key to submit filters
document
  .getElementById("ingredientFilter")
  ?.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      document.getElementById("filterBtn")?.click();
    }
  });*/

import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  getDoc,
  doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { db } from "./firebase.js";

// ✅ Global Variables
let genAI;
let model;
let apiKeyLoaded = false;

// ✅ Fetch Google Gemini API Key from Firestore
export async function getApiKey() {
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

// ✅ Process User Input for AI
export async function askChatBot(request) {
  if (!genAI || !model) {
    appendMessage("🚨 AI is still initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    const formattedRequest = `
  This is a chatbot for a **Recipe Organizer app**. 
  - Users can add, edit, delete, and filter recipes. 
  - If a user asks about recipes, give **specific steps**. 
  - If it's a general question, respond normally.
  
  **User's question:** ${request}
  `;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: formattedRequest }] }],
    });

    console.log("🟡 AI Full Response:", result);

    let aiResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!aiResponse || aiResponse.length < 5) {
      console.warn("⚠️ AI did not generate a valid response.");
      aiResponse = "🚫 AI could not generate a meaningful response.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("🚨 Chatbot Error:", error);
    appendMessage(`🚨 Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
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

// ✅ Setup Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("send-btn")
    ?.addEventListener("click", handleChatInput);
  document
    .getElementById("addRecipeBtn")
    ?.addEventListener("click", addRecipeHandler);
  document
    .getElementById("filterBtn")
    ?.addEventListener("click", filterRecipes);
  document.getElementById("signOutBttn")?.addEventListener("click", signOut);

  // ✅ Allow "Enter" key for multiple actions
  ["recipeInput", "categoryInput", "ingredientsInput"].forEach((id) => {
    document.getElementById(id)?.addEventListener("keypress", (event) => {
      if (event.key === "Enter")
        document.getElementById("addRecipeBtn")?.click();
    });
  });

  ["ingredientFilter", "categoryFilter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("keypress", (event) => {
      if (event.key === "Enter") document.getElementById("filterBtn")?.click();
    });
  });

  document
    .getElementById("chat-input")
    ?.addEventListener("keypress", (event) => {
      if (event.key === "Enter") document.getElementById("send-btn")?.click();
    });

  setupChatbotToggle();
});

// ✅ Chatbot Minimize/Maximize Toggle
function setupChatbotToggle() {
  const chatbotContainer = document.getElementById("chatbot-container");
  const toggleButton = document.getElementById("toggle-chatbot");

  const isChatHidden = localStorage.getItem("chatHidden") === "true";
  chatbotContainer.classList.toggle("chat-hidden", isChatHidden);
  toggleButton.textContent = isChatHidden ? "+" : "-";
  toggleButton.style.color = "#ffffff";

  toggleButton.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chat-hidden");
    const isHidden = chatbotContainer.classList.contains("chat-hidden");
    toggleButton.textContent = isHidden ? "+" : "-";
    localStorage.setItem("chatHidden", isHidden);
    toggleButton.style.color = "#ffffff";
  });
}

// ✅ Show Feedback Messages
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
    showFeedbackMessage("🚨 Please fill out all fields.", "error");
  }
}

// ✅ Add Recipe to Firestore
async function addRecipe(name, category, ingredients) {
  const email = JSON.parse(localStorage.getItem("email"));
  if (!email) {
    showFeedbackMessage("You must be logged in to add recipes!", "error");
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
    showFeedbackMessage("✅ Recipe Added!");

    // ✅ Reset input fields
    document.getElementById("recipeInput").value = "";
    document.getElementById("categoryInput").value = "";
    document.getElementById("ingredientsInput").value = "";
  } catch (error) {
    console.error("🚨 Error adding recipe:", error);
    showFeedbackMessage("🚨 Error adding recipe!", "error");
  }
}

// ✅ Filter Recipes with Reset Button
function filterRecipes() {
  getRecipes();

  let resetButton = document.getElementById("resetFilterBtn");
  if (!resetButton) {
    resetButton = document.createElement("button");
    resetButton.id = "resetFilterBtn";
    resetButton.textContent = "Reset Filters";
    resetButton.addEventListener("click", () => {
      document.getElementById("ingredientFilter").value = "";
      document.getElementById("categoryFilter").value = "";
      getRecipes();
    });

    document.querySelector(".container").appendChild(resetButton);
  }

  showFeedbackMessage("✅ Filters Applied!");
}
