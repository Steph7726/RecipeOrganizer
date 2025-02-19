import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Global Variables
let genAI;
let model;
let apiKeyLoaded = false;

// ✅ Fetch Google Gemini API Key from Firestore
export async function getApiKey(db) {
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
}
