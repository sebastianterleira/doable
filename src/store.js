import DOMHandler from "./dom-handler.js";
import HomePage from "./pages/home-page.js";
import LoginPage from "./pages/login-page.js";
import {
  createTask,
	getTasks,
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
  this.tasks = await getTasks();
}

function listenSubmit() {
  const save = document.querySelector(".js-save-form");

  save.addEventListener("click", async (event) => {
    event.preventDefault();

    const { title, due_date } =
      document.querySelector(".js-profile-form");
      const data = {
        title: title.value,
        due_date: due_date.value,
      };
      try {
        let newC;
          newC = await createTask(data);
          data.id = newC.id;
          STORE.tasks.push(data);
  
        DOMHandler.load(HomePage);
      } catch (error) {
        const errorName = JSON.parse(error.message).errors?.toString();
        if (errorName === "Access denied") DOMHandler.load(LoginPage);
        DOMHandler.reload();
      }
  });
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

const STORE = {
  user: null,
  tasks: [],
  edit: {},
  details: {},
  header: {},
  fetchTasks,
  listenLogout,
  listenSubmit,
};

export default STORE;