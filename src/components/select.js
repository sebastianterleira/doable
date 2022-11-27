import STORE from "../store.js";

let arr = STORE.tasks;

export function select({selected = "Alphabetical (a-z)"}) {
    return`
    <div class="flex align-item__center gap-12 mb-1.1">
      <label for="sort" class="overline pl-0.32">sort</label>
    <div class="select">
      <div class="select__container">
        <select
          name="sort"
          id="sort"
          class="select__content select__input"
        >
          <option value="Alphabetical (a-z)" ${
            selected === "Alphabetical (a-z)" ? arr.sort() : ""
          }>Alphabetical (a-z)</option>
          <option value="Due Date" ${
            selected === "Due Date" ? "selected" : ""
          }>Due Date</option>
          <option value="Importance" ${
            selected === "Importance" ? "selected" : ""
          }>Importance</option>
        </select>
      </div>
    </div>
  </div>
    `;
  }
