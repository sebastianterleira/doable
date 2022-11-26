
function render() {
  return `
    <div class="container flex align-item__center full-width bg-gray-100">
			<img src="assets/icons/{ doable }.svg" class="item1"/>
			<img src="assets/icons/Icon.svg" class="js-logout item2"/>
    </div>
    `;
}

const Header = {
  toString() {
    return render();
  },
};

export default Header;