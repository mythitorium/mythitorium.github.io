var previousCatButton = "";

// le function for changing a clicked category button's class so that it appears and stays the intended 'highlighted' color
// thank you classList
function subPageSwitch2(buttonId) {
    if (!previousCatButton == "") {
        document.getElementById(previousCatButton).classList.replace('activeState','restState');
    }
    document.getElementById(buttonId).classList.replace('restState','activeState');
    previousCatButton = buttonId
}