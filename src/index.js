import View from "./view/view.js";
import SubwayMap from "./model/subwayMap.js";

new View();
const subwayMap = new SubwayMap();
subwayMap.getShortestPath("매봉", "양재");
