function setValuesWidth() {
    //ElementHeightInputEdit.value = Math.round(ElementWidthInputEdit.value*image.height/image.width);
    //ElementScaleInputEdit.value = Math.round(10000*ElementWidthInputEdit.value/imageOriginalWidth)/100
}

function showPreviewImageEdit() {
    ElementPreviewPictureEdit.src = ElementImageCanvas.toDataURL();
}