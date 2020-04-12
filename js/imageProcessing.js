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

function processStep() {
    if (countY < image.height) {
        if (countX < image.width) {
            countX++;
            return countY*image.width + countX;
        } else {
            countY++;
            countX = 0;
            return countY*image.width;
        }
        
    } else {
        return true;
    }
}

function processImage() {
    if (processingImage) {
        var amountPixelsDone = processStep();
        if (countY >= image.height) {
            processingImage = false;
        } else {
            var percentDone = Math.round((amountPixelsDone*10000)/(image.width*image.height))/100;
            console.log(percentDone + "%");
            ElementProgressBar.style.width = percentDone + "%";
            ElementProgressBar.innerHTML = percentDone + "%";
        }
    }
}

function startProcessing() {
    console.log("Starting conversion")
    processingImage = true;
    countX = 0;
    countY = 0;
    canvas.height = canvas.width*imageOriginalHeight/imageOriginalWidth;
    setInterval(processImage, 10);
}