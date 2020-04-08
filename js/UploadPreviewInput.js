 function changeUploadLabel() {   
    // Set the label to the upload input
    ElementInputUpload.nextElementSibling.innerHTML = nameImage;
}

function showPreviewImageUpload() {
    ElementPreviewPictureUpload.src = imageSRC;
}

function setWidthHeightScaleValues() {
    ElementWidthInputEdit.value = image.width;
    ElementHeightInputEdit.value = image.height;
    ElementScaleInputEdit.value = 100;
}