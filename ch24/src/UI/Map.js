export class Map {
  constructor(coords) {
    // this.coordinates = coords;
    this.render(coords);
  }

  render(coordinates) {
    new kakao.maps.Map(document.getElementById("map"), { center: coordinates, level: 3 });
  }
}
