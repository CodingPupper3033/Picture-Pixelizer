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
            
            // Get color
            var imageDataCurrent = ContextResizedImageCanvas.getImageData(countX,countY,1,1);
            var currentColor = [imageDataCurrent.data[0],imageDataCurrent.data[1],imageDataCurrent.data[2]];
            
            // Get closest color
            var closestColor = [[0,0,0],"null"];
            if (selectedRadio == "minecraft") {
                closestColor = minecraft[getClosestColor(minecraft, currentColor)]
            }
            
            // Put into output
            output[countY][countX] = closestColor;
            ElementOutputCanvas.getContext('2d').fillStyle = 'rgb(' + closestColor[0][0] + ',' + closestColor[0][1] + ',' + closestColor[0][2] +')';
            ElementOutputCanvas.getContext('2d').fillRect(countX,countY,1,1);
            
            if (debug) {
                console.log(closestColor);
            }
            
            countX++;
            return countY*image.width + countX;
        } else {
            countY++;
            countX = 0;
            output[countY] = [];
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
            draw();
            
            var testOutput = ""
            
            for (outputCol of output) {
                for (outputRow of outputCol) {
                    testOutput += (outputRow[2]-2) + " "
                }
            }
            
            console.log(testOutput);
            
        } else {
            var percentDone = Math.round((amountPixelsDone*10000)/(image.width*image.height))/100;
            if (debug) {
                console.log(percentDone + "%");
            }
            ElementProgressBar.style.width = Math.round(10*percentDone)/10 + "%";
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
    output = [[]];
    outputImage = new Image();
    ElementOutputCanvas.width = ElementImageCanvas.width;
    ElementOutputCanvas.height = ElementImageCanvas.height;
    setInterval(processImage, 1);
}

function getClosestColor(arrayColors, color) {
    var minColorDistance = (Math.abs(arrayColors[0][0][0]-color[0])+Math.abs(arrayColors[0][0][1]-color[1])+Math.abs(arrayColors[0][0][2]-color[2]))/3;
    var minColorPOS = 0;
    for (colorSectionNumb in arrayColors) {
        var colorDistance = (Math.abs(arrayColors[colorSectionNumb][0][0]-color[0])+Math.abs(arrayColors[colorSectionNumb][0][1]-color[1])+Math.abs(arrayColors[colorSectionNumb][0][2]-color[2]))/3;
        if (colorDistance < minColorDistance) {
            minColorPOS = colorSectionNumb;
            minColorDistance = colorDistance;
        }
    }
    return minColorPOS;
}