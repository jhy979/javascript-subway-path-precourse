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
    const result = this.dijkstra.findShortestPath(depart, dest);
    let dist = 0;
    let time = 0;
    for (let i = 0; i < result.length - 1; i += 1) {
      for (let j = 0; j < defaultMap.length; j += 1) {
        if (
          defaultMap[j].v1 === result[i] &&
          defaultMap[j].v2 === result[i + 1]
        ) {
          dist += defaultMap[j].dist;
          time += defaultMap[j].time;
          break;
        }
      }
    }
    result.push(dist);
    result.push(time);

    return result;
  }
}
