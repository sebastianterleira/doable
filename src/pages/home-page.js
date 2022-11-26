import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import LoginPage from "./login-page.js";
import { logout } from "../services/sessions-service.js";
import Header from "./layout/header.js";

const HomePage = {
	toString() {
		const title = "Contactable";
		STORE.header = { title };

		return `
			${Header}
			
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