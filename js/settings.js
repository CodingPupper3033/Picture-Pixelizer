// ID's
    // Upload
    var IDInputUpload               = "inputUpload";
    var IDPreviewPictureUpload      = "previewPictureUpload";
    
    // Edit
    var IDWidthInputEdit            = "widthInputEdit";
    var IDHeightInputEdit           = "heightInputEdit";
    var IDScaleInputEdit            = "scaleInputEdit";
    var IDPreviewPictureEdit        = "previewPictureEdit";

    // Resize Canvas
    var IDImageCanvas        = "imageCanvas";

// Elements
    // Upload
    var ElementInputUpload          = document.getElementById(IDInputUpload);
    var ElementPreviewPictureUpload = document.getElementById(IDPreviewPictureUpload);

    // Edit
    var ElementWidthInputEdit       = document.getElementById(IDWidthInputEdit);
    var ElementHeightInputEdit      = document.getElementById(IDHeightInputEdit);
    var ElementScaleInputEdit       = document.getElementById(IDScaleInputEdit);
    var ElementPreviewPictureEdit   = document.getElementById(IDPreviewPictureEdit);

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
    var imageOriginalWidth      = 0;
    var imageOriginalHeight     = 0;