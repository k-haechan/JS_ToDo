const API_KEY = "c82fd697618558fb7d005370e839b194";

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url) //url에서 json파일을 fetch하고
    .then((response) => response.json()) // json() formating을 완료한 후
    .then((data)=>{ // data객체에 접근하여 여러 속성을 참조
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name; //url을 통해 서버 db에게 반환받은 name property
        weather.innerText = `${data.main.temp} / ${data.weather[0].main}`;

    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
// navigator.geolocation을 사용하면 위치좌표를 브라우저에서 사용할 수 있다.
// js는 위치 정보를 찾아서 onGeoOk(첫번째 인자)의 인자로 값을 넣어준다. 만약 위치정보가 없다면 onGeoError실행