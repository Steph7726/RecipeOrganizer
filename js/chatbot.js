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

import { GoogleGenerativeAI } from "@google/generative-ai";
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
});
