import data from "./data.json" assert { type: "json" };

let titles = document.querySelectorAll(".titles"),
    titleImg = document.querySelector(".tit-img"),
    Indtitle = document.querySelector(".title"),
    about = document.querySelector(".about"),
    avgValue = document.querySelector(".avg-value"),
    estTimeValue = document.querySelector(".est-time-value");


window.onload = destOnLoad;   

titles.item(0).addEventListener("click", function(){
    titles.item(0).classList.add("underline");
    titles.item(1).classList.remove("underline");
    titles.item(2).classList.remove("underline");
    titles.item(3).classList.remove("underline");
    setAttributes(titleImg, {"src": data.destinations[0].images.png, "alt": "moon"});
    Indtitle.textContent = data.destinations[0].name;
    about.textContent = data.destinations[0].description;
    avgValue.textContent = data.destinations[0].distance;
    estTimeValue.textContent = data.destinations[0].travel
});

titles.item(1).addEventListener("click", function(){
    titles.item(0).classList.remove("underline");
    titles.item(1).classList.add("underline");
    titles.item(2).classList.remove("underline");
    titles.item(3).classList.remove("underline");
    setAttributes(titleImg, {"src": data.destinations[1].images.png, "alt": "mars"});
    Indtitle.textContent = data.destinations[1].name;
    about.textContent = data.destinations[1].description;
    avgValue.textContent = data.destinations[1].distance;
    estTimeValue.textContent = data.destinations[1].travel
});

titles.item(2).addEventListener("click", function(){
    titles.item(0).classList.remove("underline");
    titles.item(1).classList.remove("underline");
    titles.item(2).classList.add("underline");
    titles.item(3).classList.remove("underline");
    setAttributes(titleImg, {"src": data.destinations[2].images.png, "alt": "europa"});
    Indtitle.textContent = data.destinations[2].name;
    about.textContent = data.destinations[2].description;
    avgValue.textContent = data.destinations[2].distance;
    estTimeValue.textContent = data.destinations[2].travel
});

titles.item(3).addEventListener("click", function(){
    titles.item(0).classList.remove("underline");
    titles.item(1).classList.remove("underline");
    titles.item(2).classList.remove("underline");
    titles.item(3).classList.add("underline");
    setAttributes(titleImg, {"src": data.destinations[3].images.png, "alt": "titan"});
    Indtitle.textContent = data.destinations[3].name;
    about.textContent = data.destinations[3].description;
    avgValue.textContent = data.destinations[3].distance;
    estTimeValue.textContent = data.destinations[3].travel
});

function destOnLoad(){
    titles.item(0).classList.add("underline");
    setAttributes(titleImg, {"src": data.destinations[0].images.png, "alt": "moon"});
    Indtitle.textContent = data.destinations[0].name;
    about.textContent = data.destinations[0].description;
    avgValue.textContent = data.destinations[0].distance;
    estTimeValue.textContent = data.destinations[0].travel
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}