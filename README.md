## Scene Management
* **newScene.dsa**
  - Clears the scene without showing a dialog box (good if you're ad-phobic).

## Node Selection and Manipulation
* **getEnvNode.dsa**
  - Deselects all selected nodes and selects "Environment Options" Node only. (To assign to action later)
* **selected_reset_translate.dsa**
  - Sets the currently selected node's X,Y,Z Translate values to 0.
* **MatchTransforms.dsa**
  - Takes the first selected node and changes its Transform's (XYZ Translate, rotate, and scale) to match the second selected node/figure.
* **MoveToFocalPoint.dsa**
  - Moves the currently selected node/nodes to the current viewport's focal point.
* **GetCurrentCamOrSpotNode.dsa**
  - Selects the currently viewported camera's or spotlight's node.
* **CopyCameraToPerspective.dsa**
  - In the perspective view, select a camera and run the script. The perspective view will match the camera.
* **hideAll.dsa**
  - Hides all nodes.
* **selectChildNodes.dsa**
  - Selects all currently selected child nodes recursively.
* **setOrigin0.dsa**
  - Sets the currently selected node's centrePoint to 0,0,0. (Saves doing it manually in the joint editor)

## Camera and Render Settings
* **CopyCameraDimensionsToRenderSettings.dsa**
  - Copies the currently selected Camera's Pixel Size and Aspect ratio properties to the global render settings.
* **CopyRenderSettingsDimensionsToCamera.dsa**
  - Copies the global render settings Dimensions to the currently selected camera.
* **CopyRenderSettingsDimensionsToAllCamera.dsa**
  - Copies the global render settings Dimensions to all cameras in the scene.

## Genesis 9 Bones
* **ResetTwistOnGen9twistbones.dsa**
  - Gets Genesis 9 bones with the word "twist" in their node name and sets their twist parameter to default. Fixes pose symmetry artifacts.

## Callbacks and Selection
* **clearCallbacks.dsa**
  - Clears all DzCallbacks. (For debugging scripts)
* **clearSelection.dsa**
  - Clears selection. (Deselects selected nodes)