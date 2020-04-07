// ID's
    // Upload
    var IDInputUpload           = "inputUpload";
    var IDPreviewPictureUpload  = "previewPictureUpload";

// Elements
    // Upload
    var ElementInputUpload      = document.getElementById(IDInputUpload);
    var ElementPreviewPictureUpload = document.getElementById(IDPreviewPictureUpload);

// Image
    var fileImage               = null;
    var nameImage               = "Choose Image";
    var imageFileReader         = new FileReader();
    var imageSRC                ="";
    var image                   = new Image();