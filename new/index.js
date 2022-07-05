var previousCatButton = "";
var currentDisplayedDiv = "";

// le function for changing a clicked category button's class so that it appears and stays the intended 'highlighted' color
// thank you classList
// now with showing and hiding content divs
function subPageSwitch2(buttonId,divTarget) {
    if (!previousCatButton == "") {
        document.getElementById(previousCatButton).classList.replace('activeState','restState');
    }
    document.getElementById(buttonId).classList.replace('restState','activeState');

    if (!currentDisplayedDiv == "") {
        document.getElementById(currentDisplayedDiv).style.display = 'none';
    }
    document.getElementById(divTarget).style.display = 'block';

    previousCatButton = buttonId
    currentDisplayedDiv = divTarget
}