import data from "./data.json" assert { type: "json" };

let serialNum = document.querySelectorAll(".num"),
    techTitle = document.querySelector(".tech-title"),
    techAbout = document.querySelector(".tech-about"),
    techImg = document.querySelector(".tech-tit-img");


window.onload = techOnLoad;


serialNum.item(0).addEventListener("click", function(){
    serialNum.item(0).classList.add('serial-num-props');
    serialNum.item(1).classList.remove('serial-num-props');
    serialNum.item(2).classList.remove('serial-num-props');
    techTitle.textContent = data.technology[0].name;
    techAbout.textContent = data.technology[0].description;
    setAttributes(techImg, {"src": data.technology[0].images.portrait, "alt": "vehicle"});
});

serialNum.item(1).addEventListener("click", function(){
    serialNum.item(0).classList.remove('serial-num-props');
    serialNum.item(1).classList.add('serial-num-props');
    serialNum.item(2).classList.remove('serial-num-props');
    techTitle.textContent = data.technology[1].name;
    techAbout.textContent = data.technology[1].description;
    setAttributes(techImg, {"src": data.technology[1].images.portrait, "alt": "spaceport"});
});

serialNum.item(2).addEventListener("click", function(){
    serialNum.item(0).classList.remove('serial-num-props');
    serialNum.item(1).classList.remove('serial-num-props');
    serialNum.item(2).classList.add('serial-num-props');
    techTitle.textContent = data.technology[2].name;
    techAbout.textContent = data.technology[2].description;
    setAttributes(techImg, {"src": data.technology[2].images.portrait, "alt": "capsule"});
});

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function techOnLoad(){
    serialNum.item(0).classList.add('serial-num-props');
    techTitle.textContent = data.technology[0].name;
    techAbout.textContent = data.technology[0].description;
    setAttributes(techImg, {"src": data.technology[0].images.portrait, "alt": "vehicle"});
}