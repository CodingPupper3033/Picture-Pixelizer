ElementWidthInputEdit.onchange = function() {
    setValuesWidth();
    
    image.width = ElementWidthInputEdit.value;
    image.height = ElementHeightInputEdit.value;
    
    drawImageOnCanvas();
    
    showPreviewImageEdit();
}


function drawImageOnCanvas() {
    ElementImageCanvas.width    = image.width;
    ElementImageCanvas.height   = image.height;
    ContextResizedImageCanvas.drawImage(image,0,0,image.width,image.height);
}