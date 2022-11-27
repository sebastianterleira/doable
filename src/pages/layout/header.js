
function render() {
  return `
    <div class="container large-48 flex align-item__center bg-gray-100 mb-0.8">
			<img src="assets/icons/{ doable }.svg" class="item1"/>
			<img src="assets/icons/Icon.svg" class="js-logout item2 margin-left-right-10"/>
    </div>
    `;
}

const Header = {
  toString() {
    return render();
  },
};

export default Header;