var weather;

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';

var input;

function setup() {

    var button = select('#submit');
    button.mousePressed(weatherAsk);

    input = select('#city');
}

function weatherAsk() {
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;
}

function draw() {
    if (weather) {
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;


        if(temp>25){
            document.getElementById("print").innerHTML = ("Based on your weather, I'd recommend you watch 47 meters down, on Netflix");
        }

        if(temp<5){
            document.getElementById("print").innerHTML = ("Based on your weather, I'd recommend you watch Alive, on Netflix");
        }

        else{
            document.getElementById("print").innerHTML = ("Based on your weather, I recommend you watch The Hateful 8 on Netflix ")
        }
    }
}