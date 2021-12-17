import Dijkstra from "../utils/Dijkstra.js";
import { defaultMap } from "../utils/constants.js";

export default class SubwayMap {
  constructor() {
    this.stationInfo = new Set();
    this.dijkstra = new Dijkstra();
    this.makeDefaultMap("dist");
  }

  makeDefaultMap(type) {
    if (type === "dist") {
      defaultMap.forEach((info) => {
        this.dijkstra.addEdge(info.v1, info.v2, info.dist);
      });
      return;
    }

    defaultMap.forEach((info) => {
      this.dijkstra.addEdge(info.v1, info.v2, info.time);
    });
  }

  // getShortestPath(depart, dest) {
  //   console.log(this.dijkstra.findShortestPath("매봉", "교대"));
  // }
}
