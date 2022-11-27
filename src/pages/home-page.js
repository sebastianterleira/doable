import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import LoginPage from "./login-page.js";
import { logout } from "../services/sessions-service.js";
import { select } from "../components/select.js";
import Header from "./layout/header.js";

// let contactType = () =>
//   STORE.tasks.filter((task) => task);

// const arr1 = select.selected === "Alphabetical (a-z)" ? rta : "";

function renderTask(task) {
  const rta = STORE.tasks.sort(function(a, b){
    if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
    if(a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
    return 0;
  })
  
  return`
    <li class="js-tasks">
      <div class="doable__info">
        <p data-id=${task.id}>${task.title}</p>
        <p data-id=${task.id}>${task.due_date}</p>
      </div>
    </li>
  `;
}

function render() {
    return `
      ${Header}
      <div class="container js-task">
      ${select({
        selected: "Alphabetical (a-z)",
      })}
      <div class="flex align-item__center gap-12 mb-1.1">
      <label class="overline pl-1">show</label>
        <div class="checkbox ">
          <input class="checkbox__input" type="checkbox" value="" id="check1" />
          <label for="check1" class="pl-1">Only pending</label>
          <input class="checkbox__input" type="checkbox" value="" id="check2" />
          <label for="check2" class="pl-1">Only important</label>
        </div>
      </div>
      <b>TASKS (${STORE.tasks.length})</b>
      <ul class="js-contact-list">
        ${STORE.tasks.map(renderTask).join("")}
    </ul>
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