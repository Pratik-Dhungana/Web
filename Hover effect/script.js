alert('Move mouse according to number sequence')
var items = document.querySelectorAll(".item");



var hoverColors = ["#2bebebff", "#2b8be6ff", "#132dbdff", "#009439ff"];


var innerTexts = [
    "Knock Knock!",
    "Who's There",
    "Baa<br>Baaa Whoo?",
    "BAHUBALIII!"
];



items.forEach(function (item, num) {

    item.style.backgroundColor = "#ffffffff";
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "center";
    item.style.position = "relative";
    item.style.transition = "background-color 0.4s ease";

    var coverText = document.createElement("p");
    coverText.textContent = num + 1;
    coverText.style.position = "absolute";
    coverText.style.fontSize = "40px";
    coverText.style.pointerEvents = "none";

    var innerText = document.createElement("p");
    innerText.innerHTML = innerTexts[num];
    innerText.style.opacity = "0";
    innerText.style.fontSize = "32px";
    innerText.style.transform = "scale(0.8)";
    innerText.style.transition = "all 0.4s ease";
    innerText.style.pointerEvents = "none";

    item.appendChild(coverText);
    item.appendChild(innerText);

    item.addEventListener("mouseenter", function () {
        item.style.backgroundColor = hoverColors[num];
        coverText.style.display = "none";   
        innerText.style.opacity = "1";
        innerText.style.transform = "scale(1)";
    });

    item.addEventListener("mouseleave", function () {
        item.style.backgroundColor = "#ffffff";
        coverText.style.display = "block"; 
        innerText.style.opacity = "0";
        innerText.style.transform = "scale(0.8)";
    });

});
