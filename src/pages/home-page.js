import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import LoginPage from "./login-page.js";
import { logout } from "../services/sessions-service.js";
import Header from "./layout/header.js";

function render() {
    return `
      ${Header}
      <div class="container js-task">
        <div class="flex align-item__center gap-12 mb-1.1">
          <label for="sort" class="overline pl-1">sort</label>
        <div class="select">
          <div class="select__container">
            <select
              name="sort"
              id="sort"
              class="select__content select__input"
            >
              <option value="Alphabetical (a-z)">Alphabetical (a-z)</option>
              <option value="Due Date">Due Date</option>
              <option value="Importance">Importance</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex align-item__center gap-12 mb-1.1">
      <label class="overline pl-1">show</label>
        <div class="checkbox ">
          <input class="checkbox__input" type="checkbox" value="" id="check1" />
          <label for="check1" class="pl-1">Only pending</label>
          <input class="checkbox__input" type="checkbox" value="" id="check2" />
          <label for="check2" class="pl-1">Only important</label>
        </div>
      </div>
      
    </div>
  `;
}

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

const HomePage = {
  toString() {
    return render();
    },
  addListeners() {
    listenLogout();
  },
};

export default HomePage;