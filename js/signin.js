import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

document.addEventListener("DOMContentLoaded", () => {
  const signInBttn = document.getElementById("signIn");

  if (!signInBttn) {
    console.error("signIn button not found");
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
