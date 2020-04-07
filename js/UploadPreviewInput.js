 function changeUploadLabel() {   
    // Set the label to the upload input
    ElementInputUpload.nextElementSibling.innerHTML = nameImage;
}

function showPreviewImage() {
    ElementPreviewPictureUpload.src = imageSRC;
}