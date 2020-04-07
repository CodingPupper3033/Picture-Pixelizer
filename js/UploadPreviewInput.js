 function changeUploadLabel() {   
    // Set the label to the upload input
    ElementInputUpload.nextElementSibling.innerHTML = nameImage;
}

function showPreviewImage() {
    ElementPreviewPictureUpload.src = imageSRC;
}

function setWidthHeightScaleValues() {
    ElementWidthInputUpload.value = image.width;
    ElementHeightInputUpload.value = image.height;
    ElementScaleInputUpload.value = 100;
}