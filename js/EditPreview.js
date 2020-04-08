function setValuesWidth() {
    ElementHeightInputEdit.value = Math.round(ElementWidthInputEdit.value*imageOriginalHeight/imageOriginalWidth);
    ElementScaleInputEdit.value = Math.round(10000*ElementWidthInputEdit.value/imageOriginalWidth)/100;
}

function setValuesHeight() {
    ElementWidthInputEdit.value = Math.round(ElementHeightInputEdit.value*imageOriginalWidth/imageOriginalHeight);
    ElementScaleInputEdit.value = Math.round(10000*ElementWidthInputEdit.value/imageOriginalWidth)/100;
}

function setValuesScale() {
    ElementWidthInputEdit.value = Math.round(ElementScaleInputEdit.value*imageOriginalWidth/100);
    ElementHeightInputEdit.value = Math.round(ElementScaleInputEdit.value*imageOriginalHeight/100);
}

function showPreviewImageEdit() {
    ElementPreviewPictureEdit.src = ElementImageCanvas.toDataURL();
}