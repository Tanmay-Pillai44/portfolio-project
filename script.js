let body = document.getElementsByTagName('body')[0];
let sideMenu = document.getElementById('side-menu');

function openMenu() {
    sideMenu.style.width = "90%";
    document.getElementById("side-menu-btn").style.display = "none";
    body.style.overflow = 'hidden';
}

function closeMenu() {
    sideMenu.style.width = "0";
    document.getElementById("side-menu-btn").style.display = "block";
    body.style.overflow = 'auto';
}

// rotating canvas

$(document).ready(function () {
    if(!$("#myCanvas").tagcanvas({
        textColour: "#0ABEAD",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})