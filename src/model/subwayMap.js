import Dijkstra from "../utils/Dijkstra.js";
import { defaultMap } from "../utils/constants.js";

export default class SubwayMap {
  constructor() {
    this.stationInfo = new Set();
    this.dijkstra = new Dijkstra();
    this.makeDefaultMap();
  }

  makeDefaultMap() {
    defaultMap.forEach((info) => {
      this.dijkstra.addEdge(info.v1, info.v2, info.dist);
      this.dijkstra.addEdge(info.v1, info.v2, info.time);
    });
  }
}
