const generateBtn = document.querySelector("#btn");

const displayColors = [
    "#FF6F61",  // Coral
    "#6B5B95",  // Royal Purple
    "#88B04B",  // Moss Green
    "#F7CAC9",  // Rose Quartz
    "#92A8D1",  // Serenity Blue
    "#955251",  // Marsala
    "#B565A7",  // Orchid
    "#009B77",  // Teal
    "#DD4124",  // Flame
    "#45B8AC"   // Turquoise
];

const displayColorsName = [
    "Coral",
    "Royal Purple",
    "Moss Green",
    "Rose Quartz",
    "Serenity Blue",
    "Marsala",
    "Orchid",
    "Teal",
    "Flame",
    "Turquoise"
];

function getRandomIndex(colors) {
    return Math.floor(Math.random() * colors.length);
}

function updateSpanText(value, name) {
    const updateColorValue = document.querySelector("#updateColorValue");
    const updateColorName = document.querySelector("#updateColorName");
    updateColorValue.innerText = value;
    updateColorName.innerText = name;
}

function updateBackgroundColor() {
    const randomIndex = getRandomIndex(displayColors);
    const colorValue = displayColors[randomIndex];
    const colorName = displayColorsName[randomIndex];
    updateSpanText(colorValue, colorName);
    const body = document.querySelector("body");
    body.style.background = colorValue;
}

generateBtn.onclick = updateBackgroundColor;