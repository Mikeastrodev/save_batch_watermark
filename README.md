# save_batch_watermark
a save batch script for adobe photoshop that saves all open documents in jpg while inserting a watermark. Then creates a desktop folder with the current date and saves the images with a number sequence while creating a lower resolution thumbnail as well on a seperate folder inside

README

This is a script for Adobe Photoshop that performs the following actions:

Creates a new folder on the user's desktop with the current date as the name (e.g. "2022-09-12")
Runs a "watermark" action that adds a watermark to the active document.
Resizes the watermark layer to 1% of the width and height of the active document, and positions it in the bottom right corner.
Flattens the active document.
Saves the active document as a JPEG in the newly created folder, with a file name that includes the original file name and a numeric sequence (e.g. "image_1.jpg").
Creates a subfolder within the newly created folder called "_low"
Saves a low resolution version of the active document as a JPEG in the "_low" folder, with a file name that includes the original file name and "_low" (e.g. "image_1_low.jpg").
Closes the active document.
The script will run for all open documents in Photoshop.

In order to set up the script, the following steps must be taken:

Install the "script_actions" action in Photoshop included here.

Change the directory of the watermark folder - You can change the directory of the watermark folder by changing the path on the following line of code:
var saveFolder = new Folder(Folder.desktop + "/" + dateString);
You can change the directory to any folder on your computer by replacing "Folder.desktop" with the path of the desired folder.

To run the script, open Photoshop and open the documents you want to watermark and save. Then, open the script in Photoshop by going to File -> Scripts -> Browse. 
Select the script and click on Open, the script will start running.

In addition to running the script manually as described in the previous explanation, you can also create an action in Photoshop that includes this script. 
This allows you to easily run the script by simply clicking on the action or by assigning a keyboard shortcut to the action.

You can create an action that includes this script doing the following steps:

Open Photoshop and go to the "Actions" panel.
Click on the "New Action" button and enter a name for the action, such as "Watermark and Save".
Click on the "Record" button to start recording the action.
Go to File > Scripts > Browse and select the script.
Click on "Open" to run the script.
Stop recording the action by clicking on the "Stop" button in the Actions panel.
To assign a keyboard shortcut to the action, go to Edit > Keyboard Shortcuts, select the "Actions" tab, locate the action in the list and assign a shortcut of your choice.
Now, every time you press the shortcut key you can run the script, it will save the image with watermark and also will create a low resolution image in a subfolder.

This script runs on the most recent Photoshop stable release 24.1 as of December 13, 2022
