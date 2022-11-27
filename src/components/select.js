import STORE from "../store.js";

let arr = STORE.tasks;

export function select({selected = "Alphabetical (a-z)"}) {
    return`
    <div class="flex align-item__center gap-12 mb-1.1">
      <label for="selectSort" class="overline pl-0.32">sort</label>
    <div class="select">
      <div class="select__container">
        <select
          name="sort"
          id="selectSort"
          class="select__content select__input"
          onchange="seleccionarSort();"
        >
          <option value="Alphabetical (a-z)">Alphabetical (a-z)</option>
          <option value="Due Date">Due Date</option>
          <option value="Importance">Importance</option>
        </select>
      </div>
    </div>
  </div>
    `;
  }
