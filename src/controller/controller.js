import View from "../view/view.js";
import SubwayMap from "../model/subwayMap.js";

export default class Controller {
  constructor() {
    this.view = new View();
    this.subwayMap = new SubwayMap();
    this.onClickFindBtn();
  }

  onClickFindBtn() {
    const $btn = document.querySelector("#search-button");

    $btn.addEventListener("click", () => {
      const v1 = document.querySelector("#departure-station-name-input").value;
      const v2 = document.querySelector("#arrival-station-name-input").value;

      if (this.getCheckedType() === "dist") {
        this.subwayMap.makeDefaultMap("dist");
        this.subwayMap.getShortestPath(v1, v2);
        return;
      }

      this.subwayMap.makeDefaultMap("time");
      this.subwayMap.getShortestPath(v1, v2);
    });
  }

  getCheckedType() {
    const dist = document.querySelector('input[name="search-type"]').checked;
    if (dist === true) {
      return "dist";
    }

    return "time";
  }
}
