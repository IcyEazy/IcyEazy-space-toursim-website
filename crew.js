import data from "./data.json" assert { type: "json" };

let crew = document.querySelectorAll(".cre"),
    role = document.querySelector(".role"),
    name = document.querySelector(".name"),
    bio = document.querySelector(".bio"),
    crewImg = document.querySelector(".crew-tit-img");


window.onload = crewOnLoad;

crew.item(0).addEventListener("click", function(){
    role.textContent = data.crew[0].role;
    name.textContent = data.crew[0].name;
    bio.textContent = data.crew[0].bio;
    setAttributes(crewImg, {"src": data.crew[0].images.png, "alt": "douglas"});
});

crew.item(1).addEventListener("change", function(){
    role.textContent = data.crew[1].role;
    name.textContent = data.crew[1].name;
    bio.textContent = data.crew[1].bio;
    setAttributes(crewImg, {"src": data.crew[1].images.png, "alt": "mark"});
});

crew.item(2).addEventListener("click", function(){
    role.textContent = data.crew[2].role;
    name.textContent = data.crew[2].name;
    bio.textContent = data.crew[2].bio;
    setAttributes(crewImg, {"src": data.crew[2].images.png, "alt": "victor"});
});

crew.item(3).addEventListener("click", function(){
    role.textContent = data.crew[3].role;
    name.textContent = data.crew[3].name;
    bio.textContent = data.crew[3].bio;
    setAttributes(crewImg, {"src": data.crew[3].images.png, "alt": "ansari"});
});

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function crewOnLoad(){
    role.textContent = data.crew[3].role;
    name.textContent = data.crew[3].name;
    bio.textContent = data.crew[3].bio;
    setAttributes(crewImg, {"src": data.crew[3].images.png, "alt": "ansari"});
}