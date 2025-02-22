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
  .getElementById("addRecipeBtn")
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
  });

// ✅ Reset Recipe Input Fields After Adding
function resetRecipeInputs() {
  document.getElementById("recipeInput").value = "";
  document.getElementById("categoryInput").value = "";
  document.getElementById("ingredientsInput").value = "";
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

// ✅ Chatbot Minimize/Maximize Toggle
document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.getElementById("chatbot-container");
  const toggleButton = document.getElementById("toggle-chatbot");

  // ✅ Load Chatbot State from LocalStorage
  const isChatHidden = localStorage.getItem("chatHidden") === "true";
  if (isChatHidden) {
    chatbotContainer.classList.add("chat-hidden");
    toggleButton.textContent = "+";
  } else {
    toggleButton.textContent = "-";
  }
  toggleButton.style.color = "#ffffff";

  // ✅ Toggle Chatbot Visibility on Click
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
  });
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
  .getElementById("addRecipeBtn")
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
  });

// ✅ Reset Recipe Input Fields After Adding
function resetRecipeInputs() {
  document.getElementById("recipeInput").value = "";
  document.getElementById("categoryInput").value = "";
  document.getElementById("ingredientsInput").value = "";
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

// ✅ Chatbot Minimize/Maximize Toggle
document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.getElementById("chatbot-container");
  const toggleButton = document.getElementById("toggle-chatbot");

  // ✅ Load Chatbot State from LocalStorage
  const isChatHidden = localStorage.getItem("chatHidden") === "true";
  if (isChatHidden) {
    chatbotContainer.classList.add("chat-hidden");
    toggleButton.textContent = "+";
  } else {
    toggleButton.textContent = "-";
  }

  // ✅ Ensure Button is White
  toggleButton.style.color = "#ffffff";

  // ✅ Toggle Chatbot Visibility on Click
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
  });
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

// ✅ Ensure AI is Ready Before Accepting Requests
export async function askChatBot(request) {
  if (!apiKeyLoaded || !genAI || !model) {
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

// ✅ Allow "Enter" key to submit forms
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("send-btn")
    ?.addEventListener("click", handleChatInput);

  const inputFields = [
    "chat-input",
    "recipeInput",
    "categoryInput",
    "ingredientsInput",
    "ingredientFilter",
    "categoryFilter",
  ];

  inputFields.forEach((id) => {
    document.getElementById(id)?.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        if (id === "chat-input") {
          document.getElementById("send-btn")?.click();
        } else if (id === "ingredientFilter" || id === "categoryFilter") {
          document.getElementById("filterBtn")?.click();
        } else {
          document.getElementById("addRecipeBtn")?.click();
        }
      }
    });
  });
});

// ✅ Reset Input Fields After Adding Recipe
export function resetRecipeInputs() {
  document.getElementById("recipeInput").value = "";
  document.getElementById("categoryInput").value = "";
  document.getElementById("ingredientsInput").value = "";
}

// ✅ Chatbot Minimize/Maximize Toggle
document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.getElementById("chatbot-container");
  const toggleButton = document.getElementById("toggle-chatbot");

  // ✅ Load Chatbot State from LocalStorage
  const isChatHidden = localStorage.getItem("chatHidden") === "true";
  if (isChatHidden) {
    chatbotContainer.classList.add("chat-hidden");
    toggleButton.textContent = "+";
  } else {
    toggleButton.textContent = "-";
  }

  // ✅ Ensure Button is White
  toggleButton.style.color = "#ffffff";

  // ✅ Toggle Chatbot Visibility on Click
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
  });
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
      console.log("✅ Google Gemini API Key Loaded");
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      apiKeyLoaded = true;
    } else {
      appendMessage("🚨 No API key found in Firestore.");
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

// ✅ Allow "Enter" key to submit chat input
document.getElementById("chat-input")?.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send-btn")?.click();
  }
});

// ✅ Chatbot Minimize/Maximize Toggle
document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.getElementById("chatbot-container");
  const toggleButton = document.getElementById("toggle-chatbot");

  // ✅ Load Chatbot State from LocalStorage
  const isChatHidden = localStorage.getItem("chatHidden") === "true";
  if (isChatHidden) {
    chatbotContainer.classList.add("chat-hidden");
    toggleButton.textContent = "+"; // Show "+" when minimized
  } else {
    toggleButton.textContent = "-"; // Show "-" when open
  }

  // ✅ Set Minimize Button Color to White
  toggleButton.style.color = "#ffffff";

  // ✅ Toggle Chatbot Visibility on Click
  toggleButton.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chat-hidden");

    // ✅ Update Button Symbol & Save State
    if (chatbotContainer.classList.contains("chat-hidden")) {
      toggleButton.textContent = "+"; // "+" when minimized
      localStorage.setItem("chatHidden", "true");
    } else {
      toggleButton.textContent = "-"; // "-" when open
      localStorage.setItem("chatHidden", "false");
    }
    toggleButton.style.color = "#ffffff";
  });
});

// ✅ Reset Recipe Input Fields
export function resetRecipeInputs() {
  document.getElementById("recipeInput").value = "";
  document.getElementById("categoryInput").value = "";
  document.getElementById("ingredientsInput").value = "";
}*/

/*import { GoogleGenerativeAI } from "@google/generative-ai";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

// ✅ Global Variables
let genAI;
let model;

// ✅ Fetch Google Gemini API Key from Firestore
export async function getApiKey() {
  try {
    const snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
    if (snapshot.exists()) {
      const apiKey = snapshot.data().key;
      genAI = new GoogleGenerativeAI(apiKey);
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    } else {
      appendMessage("🚨 No Google Gemini API key found in Firestore");
    }
  } catch (error) {
    appendMessage("🚨 Chatbot error: API Key issue.");
  }
}

// ✅ Ask Chatbot (Fixed AI Mode)
export async function askChatBot(request) {
  if (!genAI || !model) {
    appendMessage("🚨 AI is still initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    // ✅ **Prepend context instructions**
    const formattedRequest = `
This is a chatbot for a **Recipe Organizer app**. 
- Users can add, edit, delete, and filter recipes. 
- If a user asks about recipes, give **specific steps**. 
- If it's a general question, respond normally.

**User's question:** ${request}
`;

    // ✅ Send request to AI model
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: formattedRequest }] }],
    });

    console.log("🟡 AI Full Response:", result);

    // ✅ Extract AI response
    let aiResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!aiResponse || aiResponse.length < 5) {
      aiResponse = "🚫 AI could not generate a meaningful response.";
    }

    appendMessage(`🤖 AI: ${aiResponse}`);
  } catch (error) {
    appendMessage(`🚨 Chatbot Error: ${error.message || "Could not reach AI"}`);
  }
}

// ✅ Handle Chat Input (For Tasks.js)
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

// ✅ Chatbot Minimize/Maximize Toggle (Ensuring White Button)
document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.getElementById("chatbot-container");
  const toggleButton = document.getElementById("toggle-chatbot");

  if (!chatbotContainer || !toggleButton) return;

  const isChatHidden = localStorage.getItem("chatHidden") === "true";
  chatbotContainer.classList.toggle("chat-hidden", isChatHidden);
  toggleButton.textContent = isChatHidden ? "+" : "-";
  toggleButton.style.color = "#ffffff";

  toggleButton.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chat-hidden");
    const hidden = chatbotContainer.classList.contains("chat-hidden");
    toggleButton.textContent = hidden ? "+" : "-";
    toggleButton.style.color = "#ffffff";
    localStorage.setItem("chatHidden", hidden.toString());
  });
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
      console.error("🚨 No API Key Found in Firestore!");
      appendMessage("🚨 Chatbot Error: No API key found.");
    }
  } catch (error) {
    console.error("🚨 Error fetching API key:", error);
    appendMessage("🚨 Chatbot Error: API Key issue.");
  }
}

// ✅ Ask Chatbot (Fixed AI Mode)
export async function askChatBot(request) {
  if (!apiKeyLoaded || !genAI || !model) {
    appendMessage("🚨 AI is still initializing... Please wait.");
    return;
  }

  try {
    appendMessage(`🧑‍💻 You: ${request}`);

    // ✅ **Prepend context instructions**
    const formattedRequest = `
This is a chatbot for a **Recipe Organizer app**. 
- Users can add, edit, delete, and filter recipes. 
- If a user asks about recipes, give **specific steps**. 
- If it's a general question, respond normally.

**User's question:** ${request}
`;

    // ✅ Send request to AI model
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: formattedRequest }] }],
    });

    console.log("🟡 AI Full Response:", result);

    // ✅ Extract AI response correctly
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

// ✅ Add Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("send-btn")
    ?.addEventListener("click", handleChatInput);
});

// ✅ Allow "Enter" key to submit chat input
document.getElementById("chat-input")?.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send-btn")?.click();
  }
});

// ✅ Fix Minimize/Maximize Chatbot Button Color (White)
document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.getElementById("chatbot-container");
  const toggleButton = document.getElementById("toggle-chatbot");

  // ✅ Load Chatbot State from LocalStorage
  const isChatHidden = localStorage.getItem("chatHidden") === "true";
  if (isChatHidden) {
    chatbotContainer.classList.add("chat-hidden");
    toggleButton.textContent = "+";
  } else {
    toggleButton.textContent = "-";
  }

  toggleButton.style.color = "#ffffff"; // Ensure it's white

  // ✅ Toggle Chatbot Visibility on Click
  toggleButton.addEventListener("click", () => {
    chatbotContainer.classList.toggle("chat-hidden");

    if (chatbotContainer.classList.contains("chat-hidden")) {
      toggleButton.textContent = "+";
      localStorage.setItem("chatHidden", "true");
    } else {
      toggleButton.textContent = "-";
      localStorage.setItem("chatHidden", "false");
    }

    toggleButton.style.color = "#ffffff"; // Maintain white color
  });
});
