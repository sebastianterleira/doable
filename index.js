import DOMHandler from "./src/dom-handler.js";
import LoginPage from "./src/pages/login-page.js";
import HomePage from "./src/pages/home-page.js";
import { tokenKey } from "./src/config.js";
import { getTasks } from "./src/services/task-sevices.js";
import { login } from "./src/services/sessions-service.js";
import STORE from "./src/store.js";

async function init() {
	try {
		const token = sessionStorage.getItem(tokenKey);
		if (!token) throw new Error();

		const user = await getTasks();

		await STORE.fetchTasks();
		console.log(user);
		DOMHandler.load(HomePage);
	} catch (error) {
		sessionStorage.removeItem(tokenKey);
		DOMHandler.load(LoginPage);
	}
}

init();




// sessionStorage.setItem(tokenKey, "8JkKjBXir7n13eLypzGbyULW2");
// login({
	// 	"email": "seb.terleira1204@mail.com",
	// 	"password": "123456"
	// }).then(() => init())
