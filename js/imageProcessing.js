function drawImageOnCanvas() {
    ElementImageCanvas.width    = image.width;
    ElementImageCanvas.height   = image.height;
    ContextResizedImageCanvas.drawImage(image,0,0);
}