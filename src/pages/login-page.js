import DOMHandler from "../dom-handler.js";
import HomePage from "./home-page.js";
import { input } from "../components/input.js";
import { login } from "../services/sessions-service.js";

function render() {
    return `
    <main class="section">
      <section class="container">
        <h1 class="heading heading--lg text-center mb-4">Login</h1>
        <form class="flex flex-column gap-4 mb-4 js-login-form">
				${input({
					label: "email",
					id: "email",
					name: "email",
					placeholder: "nando@example.com",
					type: "email",
					required: true,
					value: "seb.terleira1204@mail.com",
				})}
				${input({
					label: "password",
					id: "password",
					name: "password",
					placeholder: "*****",
					type: "password",
					required: true,
					value: "123456",
				})}
					
					<p class="text-center error-300">Error!!</p>
					<button class="button button--primary">Login</button>
        </form>
        <a href="#" class="block text-center js-signup-link">Create account</a>
      </section>
    </main>
    `;
}

function ListenSubmit() {
	const form = document.querySelector(".js-login-form");

	form.addEventListener("submit", async (event) => {
		try {
			event.preventDefault();

			const { email, password } = event.target;

			const credentials = { 
				email: email.value,
				password: password.value
			};

			const user = await login(credentials)
			DOMHandler(HomePage)
		} catch (error) {

		}
	});
}

const LoginPage = {
    toString() {
        return render();
    },
    addListeners() {
			ListenSubmit();
		},
};

export default LoginPage;