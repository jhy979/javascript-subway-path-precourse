import Dijkstra from "../utils/Dijkstra.js";
import { defaultMap } from "../utils/constants.js";

export default class SubwayMap {
  constructor() {
    this.stationInfo = new Set();
    this.makeDefaultMap("dist");
  }

  makeDefaultMap(type) {
    this.dijkstra = new Dijkstra();
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

  getShortestPath(depart, dest) {
    console.log(this.dijkstra.findShortestPath(depart, dest));
    return this.dijkstra.findShortestPath(depart, dest);
  }
}
