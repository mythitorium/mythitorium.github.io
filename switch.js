var previousCatButton = "";
var currentDisplayedDiv = "";

// le function for changing a clicked category button's class so that it appears and stays the intended 'highlighted' color
// thank you classList
// now with showing and hiding content divs
function subPageSwitch(buttonId,divTarget) {
    if (!previousCatButton == "") {
        document.getElementById(previousCatButton).classList.replace('isSelected','dummy');
    }
    document.getElementById(buttonId).classList.replace('dummy','isSelected');

    if (!currentDisplayedDiv == "") {
        document.getElementById(currentDisplayedDiv).style.opacity = 0;
        document.getElementById(currentDisplayedDiv).style.display = "inline";
        document.getElementById(currentDisplayedDiv).style.zIndex = 1;
    }
    document.getElementById(divTarget).style.opacity = 1;
    document.getElementById(divTarget).style.display = "block";
    document.getElementById(divTarget).style.zIndex = 10;

    previousCatButton = buttonId;
    currentDisplayedDiv = divTarget;
}
