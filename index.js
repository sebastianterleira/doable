import DOMHandler from "./src/dom-handler.js";
import LoginPage from "./src/pages/login-page.js";
import { tokenKey } from "./src/config.js";
import { getTasks } from "./src/services/task-sevices.js"

async function init() {
	const token = sessionStorage.getItem(tokenKey);
	if (!token) return DOMHandler.load(LoginPage);

	const user = await getTasks();
	console.log(user);
	DOMHandler.load(LoginPage);
}

sessionStorage.setItem(tokenKey, "hVsvaQcxKc9Ey8zrJdVA2pJx");
init()