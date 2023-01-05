let mobileMenuBtn = document.querySelectorAll(".menu-btn"),
    openMenuBtn = document.querySelectorAll(".open"),
    closeMenuBtn = document.querySelectorAll(".close"),
    menuWidget = document.querySelectorAll(".mob");


mobileMenuBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        openMenuBtn.forEach(open => open.classList.toggle("hide"));
        closeMenuBtn.forEach(close => close.classList.toggle("show"));
        menuWidget.forEach(widget => widget.classList.toggle("show"));
    });
});