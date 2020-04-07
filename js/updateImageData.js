ElementInputUpload.onchange = function() {
    // Image
    console.log("User uploaded picture"); 
    fileImage                       = ElementInputUpload.files[0];
    nameImage                       = fileImage.name;
    
    imageFileReader.readAsDataURL(fileImage);
    
    // Update the input label
    changeUploadLabel();
}

imageFileReader.onloadend = function() {
    imageSRC = imageFileReader.result;
    image.src = imageSRC;
    
    // Show preview image
    showPreviewImage();
    
    // Set the values of the Width/Height/Scale input boxes
    setWidthHeightScaleValues();
}

