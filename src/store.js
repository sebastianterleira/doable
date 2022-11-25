import DOMHandler from "./dom-handler.js";
import HomePage from "./pages/home-page.js";
import LoginPage from "./pages/login-page.js";
// import NewContact from "./pages/new-contact-page.js";
import {
	createTask,
	getTasks,
	//   editContact,
} from "./services/task-sevices.js";
import { logout } from "./services/sessions-service.js";

const initialContactables = [
  {
    id: 1,
    title: "UNO",
    due_date: "2022-11-25",
    important: false,
    completed: false,
    user_id: 419,
    created_at: "2022-11-18T01:20:43.857Z",
    updated_at: "2022-11-18T01:20:43.857Z",
  },
  {
    id: 2,
    title: "DOS",
    due_date: "2022-11-26",
    important: false,
    completed: false,
    user_id: 420,
    created_at: "2022-11-18T01:20:43.857Z",
    updated_at: "2022-11-18T01:20:43.857Z",
  },
  {
    id: 3,
    title: "TRES",
    due_date: "2022-11-27",
    important: false,
    completed: false,
    user_id: 421,
    created_at: "2022-11-18T01:20:43.857Z",
    updated_at: "2022-11-18T01:20:43.857Z",
  },
  {
    id: 4,
    title: "CUATRO",
    due_date: "2022-11-28",
    important: false,
    completed: false,
    user_id: 422,
    created_at: "2022-11-18T01:20:43.857Z",
    updated_at: "2022-11-18T01:20:43.857Z",
  },
];

async function fetchTasks() {
  this.contacts = await getTasks();
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

function listenTasks() {
  const ul = document.querySelector(".js-contacts ");
  ul &&
    ul.addEventListener("click", async (event) => {
    event.preventDefault();
    const editLink = event.target.closest("[data-id]");
    if (!editLink) return;
    const id = Number(editLink.dataset.id);

    const contact = STORE.contacts.find((item) => item.id === id);
      // console.log(contact);
    STORE.edit = contact;
    DOMHandler.load(NewContact);
    });
}

const STORE = {
  user: null,
  contacts: [],
  edit: {},
  details: {},
  header: {},
  fetchTasks,
  listenLogout,
  listenTasks,
};

export default STORE;