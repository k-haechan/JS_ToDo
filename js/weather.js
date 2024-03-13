/*
1. navigator를 사용해서.geoloaction.getCurrentPosition으로 위도, 경도 받아오기.
2. API를 통해서 날씨데이터 fetch하기
3. fetch한 데이터를 html태그안에 입력하기 
*/
const API_KEY = "c82fd697618558fb7d005370e839b194";

function getWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText=`${data.main.temp} / ${data.weather[0].main}`;
        city.innerText=data.name;
    })
}

function errorAlert() {
    alert("error!");
}
navigator.geolocation.getCurrentPosition(getWeather,errorAlert);