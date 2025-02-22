import "./js/firebase.js";
import "./js/signin.js";
import "./js/tasks.js";
import "./js/service-worker.js";

const email = JSON.parse(localStorage.getItem("email"));
if (window.location.pathname.includes("index.html") && email) {
  window.location.href = "tasks.html";
}
if (window.location.pathname.includes("tasks.html") && !email) {
  window.location.href = "index.html";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(new URL("./js/service-worker.js", import.meta.url))
      .then((reg) => console.log("Service Worker Registered:", reg))
      .catch((err) =>
        console.error("Service Worker Registration Failed:", err)
      );
  });
}
