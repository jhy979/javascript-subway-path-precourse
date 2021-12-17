import commonView from "./commonView.js";

export default class View {
  constructor() {
    this.renderDefaultView();
  }

  renderDefaultView() {
    const $app = document.querySelector("#app");
    $app.innerHTML = commonView;
  }

  getResult(result) {
    console.log(result);
  }
}
