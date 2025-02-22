import { GoogleGenerativeAI } from "@google/generative-ai";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

// Global Variables
let genAI;
let model;
let apiKeyLoaded = false;

// Fetch Google Gemini API Key from Firestore
export async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      console.log("Google Gemini API Key Loaded:", apiKey);
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      apiKeyLoaded = true;
    } else {
      appendMessage("No Google Gemini API key found in Firestore");
    }
  } catch (error) {
    console.error("Error fetching API key:", error.message);
    appendMessage("Chatbot error: API Key issue.");
  }
}

// Ask Chatbot
export async function askChatBot(userInput) {
  if (!apiKeyLoaded || !model) {
    appendMessage("AI is still initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${userInput}`);

    // Formatted AI request
    const formattedRequest = `
    This is a chatbot for a **Recipe Organizer app**. 
    - Users can add, edit, delete, and filter recipes. 
    - If a user asks about recipes, give **specific steps**. 
    - If it's a general question, respond normally.

    **User's question:** ${userInput}
    `;

    // Sending Request to AI
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: formattedRequest }] }],
    });

    console.log("AI Full Response:", result);

    // Extract AI response
    let aiResponse = "";

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

    // Handle Empty Response
    if (!aiResponse || aiResponse.length < 5) {
      console.warn("AI did not generate a valid response.");
      aiResponse = "AI could not generate a meaningful response.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    console.error("Chatbot Error:", error);
    appendMessage(`Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
}

// Append Chat Messages
function appendMessage(message) {
  const chatHistory = document.getElementById("chat-history");
  if (!chatHistory) return;

  const historyItem = document.createElement("div");
  historyItem.textContent = message;
  historyItem.className = "history";
  chatHistory.appendChild(historyItem);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Handle Chat Input
export function handleChatInput() {
  const chatInput = document.getElementById("chat-input");
  if (!chatInput) return;

  const prompt = chatInput.value.trim();
  if (prompt) {
    askChatBot(prompt);
  } else {
    appendMessage("Please enter a prompt.");
  }
  chatInput.value = "";
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chat-input");
  if (chatInput) {
    chatInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleChatInput();
      }
    });
  }

  const chatbotContainer = document.getElementById("chatbot-container");
  const toggleButton = document.getElementById("toggle-chatbot");

  toggleButton.style.color = "#ffffff";
  toggleButton.style.fontSize = "28px";

  // Load Chatbot State from LocalStorage
  const isChatHidden = localStorage.getItem("chatHidden") === "true";
  if (isChatHidden) {
    chatbotContainer.classList.add("chat-hidden");
    toggleButton.textContent = "+";
  } else {
    toggleButton.textContent = "-";
  }

  toggleButton.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chat-hidden");

    if (chatbotContainer.classList.contains("chat-hidden")) {
      toggleButton.textContent = "+";
      localStorage.setItem("chatHidden", "true");
    } else {
      toggleButton.textContent = "-";
      localStorage.setItem("chatHidden", "false");
    }

    toggleButton.style.color = "#ffffff";
    toggleButton.style.fontSize = "28px";
  });
});
