ElementInputUpload.onchange = function() {
    if (ElementInputUpload.files[0]) {
        // Image
        console.log("User uploaded picture"); 
        fileImage                       = ElementInputUpload.files[0];
        nameImage                       = fileImage.name;
        
        imageFileReader.readAsDataURL(fileImage);
    
        // Update the input label
        changeUploadLabel();
    } else {
        console.log("Input changed but no file"); 
    }
}

imageFileReader.onloadend = function() {
    imageSRC = imageFileReader.result;
    var imageTemp = new Image();
    imageTemp.src = imageSRC;
    
    imageTemp.onload = function() {
        image.src = imageSRC;
        image.width = imageTemp.width;
        image.height = imageTemp.height;
        imageOriginalHeight = image.height;
        imageOriginalWidth = image.width;
    }
}

image.onload = function() {
    // Show preview image
    showPreviewImageUpload();
    
    // Set the values of the Width/Height/Scale input boxes
    setWidthHeightScaleValues();
    
    // Draw on canvas
    drawImageOnCanvas();
    
    // Draw preview for Edit
    showPreviewImageEdit();
    
    // Update the count for Conversion
    resetCount();
}

