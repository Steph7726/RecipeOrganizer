// js/signin.js
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

// ✅ Run after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const signInBttn = document.getElementById("signIn");

  if (!signInBttn) {
    console.error("🚨 signIn button not found");
    return;
  }

  signInBttn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("email", JSON.stringify(user.email));
        window.location.href = "/RecipeOrganizer/tasks.html";
      })
      .catch((error) => {
        console.error("Sign-in Error:", error.message);
        alert(`Sign-in failed: ${error.message}`);
      });
  });
});

// ✅ Google Sign-In Function
/*function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("email", JSON.stringify(user.email));
        window.location.href = "/RecipeOrganizer/tasks.html";
      })
      .catch((error) => {
        console.error("Sign-in Error:", error.message);
        alert(`Sign-in failed: ${error.message}`);
      });
  }

  // ✅ Attach Event Listener
  signInBttn.addEventListener("click", signIn);
});*/
