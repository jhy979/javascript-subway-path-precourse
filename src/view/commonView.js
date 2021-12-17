const commonView = `
<h1>지하철 길찾기</h1>
출발역 <input type="text" id="departure-station-name-input"/> <br>
도착역 <input type="text" id="departure-station-name-input"/> <br>
<input type="radio" name="search-type" value="dist" checked> 최단거리
<input type="radio" name="search-type" value="time" > 최소시간 <br>
<button id="search-button">길 찾기</button>

`;

export default commonView;
