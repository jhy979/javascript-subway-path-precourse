import View from "../view/view.js";
import SubwayMap from "../model/subwayMap.js";

export default class Controller {
  constructor() {
    this.view = new View();
    this.subwayMap = new SubwayMap();
  }
}
