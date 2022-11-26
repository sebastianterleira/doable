import DOMHandler from "../dom-handler.js";
import HomePage from "./home-page.js";
import STORE from "../store.js";
import { input } from "../components/input.js";
import { createUser } from "../services/user-service.js"
import LoginPage from "./login-page.js";

function render() {
    const { createUserError } = this.state; 
    return `
    <div class="container large-48 flex align-item__center bg-gray-100 mb-0.8">
		<img src="assets/icons/{ doable }.svg" class="item1"/>
    <a href="#" class="js-login-link item2 flex-direction__row-reverse">Login</a>
    </div>
    <main class="section">
      <section class="container">
        <h1 class="heading heading--lg text-center mb-4">Sing Up</h1>
        <form class="flex flex-column gap-4 mb-4 js-singup-form">
				${input({
          label: "email",
          id: "email",
          name: "email",
          placeholder: "nando@example.com",
          type: "email",
          required: true,
          value: "alfredo2@mail.com",
        })}
				${input({
          label: "password",
          id: "password",
          name: "password",
          placeholder: "*****",
          type: "password",
          required: true,
          value: "4321",
        })}

				${createUserError ? `<p class="text-center error-300">${createUserError}</p>` : ""}
					<button class="button button--primary">Create Account</button>
        </form>
      </section>
    </main>
    `;
}

function listenerSingUp() {
	const form = document.querySelector(".js-singup-form");

	form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();

      const { email, password } = event.target;

      const credentials = {
        email: email.value,
        password: password.value,
      };

      const user = await createUser(credentials);
      STORE.user = user

      await STORE.fetchTasks();

      DOMHandler.load(HomePage);
    } catch (error) {
      console.log(error)
      this.state.createUserError = error.message;
      DOMHandler.reload();
    }
	});
}

function listenLogin() {
	const a = document.querySelector(".js-login-link");

  a.addEventListener("click", async (event) => {
    DOMHandler.load(LoginPage);
  });
}

const CreateUser = {
	toString() {
    return render.call(this);
  },
  addListeners() {
		listenerSingUp();
    listenLogin();
  },
  state: {
    createUserError: null,
  },
}

export default CreateUser;