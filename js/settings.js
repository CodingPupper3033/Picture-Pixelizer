// ID's
    // Upload
    var IDInputUpload           = "inputUpload";
    var IDPreviewPictureUpload  = "previewPictureUpload";
    
    // Edit
    var IDWidthInputUpload      = "widthInputUpload";

// Elements
    // Upload
    var ElementInputUpload      = document.getElementById(IDInputUpload);
    var ElementPreviewPictureUpload = document.getElementById(IDPreviewPictureUpload);

    // Edit
    var ElementWidthInputUpload = document.getElementById(IDWidthInputUpload);

// Image
    var fileImage               = null;
    var nameImage               = "Choose Image";
    var imageFileReader         = new FileReader();
    var imageSRC                ="";
    var image                   = new Image();