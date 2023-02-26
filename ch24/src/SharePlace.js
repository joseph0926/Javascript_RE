import { Modal } from "./UI/Modal";
// import { Map } from "./UI/Map";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  /* selectPlace(coordinates) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  } */

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("위치 찾기 기능은 현재 환경에서 사용할 수 없습니다. - 최신 브라우저를 이용해주세요");
      return;
    }
    const modal = new Modal("loading-modal-content", "로딩중...");
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        // this.selectPlace(coordinates);
        console.log(coordinates);
      },
      (error) => {
        modal.hide();
        alert("위치를 파악할 수 없습니다. 직접 주소를 입력해주세요");
      }
    );
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
