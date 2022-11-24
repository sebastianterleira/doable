import DOMHandler from "./src/dom-handler.js";
import LoginPage from "./src/pages/login-page.js";
import HomePage from "./src/pages/home-page.js";
import { tokenKey } from "./src/config.js";
import { getTasks } from "./src/services/task-sevices.js"

async function init() {
	try {
		const token = sessionStorage.getItem(tokenKey);
		if (!token) return DOMHandler.load(LoginPage);
	
		const user = await getTasks();
		console.log(user);
		DOMHandler.load(HomePage);
	} catch (error) {
		sessionStorage.removeItem(tokenKey);
		DOMHandler.load(LoginPage);
	}
}

sessionStorage.setItem(tokenKey, "L8Yk1U1N9rpPYCnRfs24XBrN");
init()