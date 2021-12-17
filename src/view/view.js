import commonView from "./commonView.js";

export default class View {
  constructor() {
    this.renderCommonView();
  }

  renderCommonView() {
    const $app = document.querySelector("#app");
    $app.innerHTML = commonView;
  }
}
