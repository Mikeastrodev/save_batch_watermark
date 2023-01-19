#target photoshop;
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;  // starts on 0
var day = today.getDate();
var dateString = year + "-" + month + "-" + day;

var saveFolder = new Folder(Folder.desktop + "/" + dateString);
var count = 0;  // counter
function saveImages() {
    var doc = app.activeDocument;
    try {
      app.doAction("watermark", "script_actions");
    } catch (error) {
    }
    // get rez
  var width = app.activeDocument.width;
  var height = app.activeDocument.height;
  
  // Get the watermark layer
  var watermarkLayer = app.activeDocument.layers["watermark"];
  
  // Save the original width and height of the watermark layer - not in use
  var originalWidth = watermarkLayer.width;
  var originalHeight = watermarkLayer.height;
  
  // Set the new width and height of the watermark layer
  watermarkLayer.resize(app.activeDocument.width * 0.01, app.activeDocument.height * 0.01, AnchorPosition.BOTTOMRIGHT);
  saveFolder.create();
    doc.flatten();  // flatten the image
    var fileName = doc.name.replace(/\.\w+$/, "") + "_" + count + ".jpg";  // remove the file extension and add numeric sequence to file name
    var saveFile = new File(saveFolder + "/" + fileName);
    var jpegOptions = new JPEGSaveOptions();
    jpegOptions.quality = 12;  // set JPEG quality to 12 (maximum quality)
    doc.saveAs(saveFile, jpegOptions);
      // create a low resolution thumbnail
      var thumbWidth = doc.width * 0.25;  // calculate thumbnail width to 25% of original size
      var thumbHeight = doc.height * 0.25;  // calculate thumbnail height to 25% of original size
      var thumbFolder = new Folder(saveFolder + "/_low");  // create a subfolder for the low resolution images
      thumbFolder.create();  // create the subfolder if it doesn't exist
      var thumbFile = new File(thumbFolder + "/" + fileName.replace(/\.jpg$/, "") + "_low.jpg");
      doc.resizeImage(thumbWidth, thumbHeight);  // resize the image to the calculated dimensions
      doc.saveAs(thumbFile, jpegOptions);
    doc.close();  // close the document after it has been saved
    count++;  // increment the counter
  }  
for (var i = 0; i < app.documents.length; i++) {
    saveImages();
    while (app.documents.length > 0) {
        saveImages();
      }
  }