window.onresize = fixSubpixelTextOffsets;

fixSubpixelTextOffsets();

function fixSubpixelTextOffsets() {
    let elements = document.querySelectorAll(".pixelText");
    console.log(elements);
    for (const element of elements) {
        let rect = element.getBoundingClientRect();
        let decimalX = rect.left - Math.floor(rect.left);
        let decimalY = rect.top - Math.floor(rect.top);
        console.log(element.innerHTML + ": xD=" + decimalX + ", yD=" + decimalY);
        //element.style.paddingLeft = 1 - decimalX + "px";
        //element.style.paddingLeft = "0.1px";
        //element.style.paddingTop = 1.2 - decimalY + "px";
    }
}