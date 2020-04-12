var countX = 0;
var countY = 0;

ElementWidthInputEdit.onchange = function() {
    setValuesWidth();
    
    image.width = ElementWidthInputEdit.value;
    image.height = ElementHeightInputEdit.value;
    
    drawImageOnCanvas();
    
    showPreviewImageEdit();
}

ElementHeightInputEdit.onchange = function() {
    setValuesHeight();
    
    image.width = ElementWidthInputEdit.value;
    image.height = ElementHeightInputEdit.value;
    
    drawImageOnCanvas();
    
    showPreviewImageEdit();
}

ElementScaleInputEdit.onchange = function() {
    setValuesScale();
    
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

function resetCount() {
    countX = 0;
    countY = 0;
}