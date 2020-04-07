// ID's
    // Upload
    var IDInputUpload               = "inputUpload";
    var IDPreviewPictureUpload      = "previewPictureUpload";
    
    // Edit
    var IDWidthInputUpload          = "widthInputUpload";
    var IDHeightInputUpload         = "heightInputUpload";
    var IDScaleInputUpload          = "scaleInputUpload";

    // Resize Canvas
    var IDImageCanvas        = "imageCanvas";

// Elements
    // Upload
    var ElementInputUpload          = document.getElementById(IDInputUpload);
    var ElementPreviewPictureUpload = document.getElementById(IDPreviewPictureUpload);

    // Edit
    var ElementWidthInputUpload     = document.getElementById(IDWidthInputUpload);
    var ElementHeightInputUpload    = document.getElementById(IDHeightInputUpload);
    var ElementScaleInputUpload     = document.getElementById(IDScaleInputUpload);

    // Resize Canvas
    var ElementImageCanvas   = document.getElementById(IDImageCanvas);

// Canvas Contexts
    // Resize Canvas
    var ContextResizedImageCanvas   = ElementImageCanvas.getContext('2d');

// Image
    var fileImage               = null;
    var nameImage               = "Choose Image";
    var imageFileReader         = new FileReader();
    var imageSRC                ="";
    var image                   = new Image();