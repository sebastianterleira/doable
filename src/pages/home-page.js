import DOMHandler from "../dom-handler.js";
import LoginPage from "./login-page.js";
import { logout } from "../services/sessions-service.js";

const HomePage = {
	toString() {
		return `
			<h1>Home Page<h1>
			<a class="text-center block mb-8 js-logout">Logout</a>
			`
		},
	addListeners() {
		listenLogout();
	},
};

function listenLogout() {
  const a = document.querySelector(".js-logout");

  a.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      await logout();
      DOMHandler.load(LoginPage);
    } catch (error) {
      console.log(error);
    }
  });
}

export default HomePage;