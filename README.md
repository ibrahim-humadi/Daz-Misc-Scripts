## Scene Management // Node Selection and Manipulation
* **newScene.dsa**
  - Clears the scene without showing a dialog box (good if you're ad-phobic).
* **incrementSave.dsa**
  - increments the current filename and saves if it ends with a number, otherwise adds a 1 to filename and saves.
* **ToggleVisibleScene.dsa**
  - Hides visible and unhide's non-visible nodes.
* **hideAll.dsa**
  - Hides all nodes.
* **hide_selected.dsa**
  - Hides the selected nodes.
* **hide_unselected.dsa**
  - Hides currently unselected nodes.
* **unhideSelected.dsa**
  - Unhide currently selected nodes.
* **unhideAll.dsa**
  - Unhide all nodes.
* **MakeUnselectableNonSelected.dsa**
  - When run this script will make all not-currently-selected nodes unselectable.
* **MakeAllSelectable.dsa** 
  - This script will make all nodes selectable.
* **clearSelection.dsa**
  - Clears selection. (Deselects selected nodes)
* **getEnvNode.dsa**
  - Deselects all selected nodes and selects "Environment Options" Node only. (To assign to action later)
* **selected_reset_translate.dsa**
  - Sets the currently selected node's X,Y,Z Translate values to 0.
* **MatchTransforms.dsa**
  - Takes the first selected node and changes its Transform's (XYZ Translate, rotate, and scale) to match the second selected node/figure.
* **MatchTransformsAndPose.dsa**
  - Takes the first selected node and changes its Transform's (XYZ Translate, rotate, and scale) to match the second selected node/figure. Copies the First node's pose and pastes it to second Node/figure.
* **MoveToFocalPoint.dsa**
  - Moves the currently selected node/nodes to the current viewport's focal point.
* **MoveToFocalPointAndToFloor.dsa**
  - Moves the currently selected node/nodes to the current viewport's focal point and "Move to floor" them.
* **GetCurrentCamOrSpotNode.dsa**
  - Selects the currently viewported camera's or spotlight's node.
* **CopyCameraToPerspective.dsa**
  - In the perspective view, select a camera and run the script. The perspective view will match the camera.
* **selectChildNodes.dsa**
  - Selects all currently selected child nodes recursively.
* **setOrigin0.dsa**
  - Sets the currently selected node's centrePoint to 0,0,0. (Saves doing it manually in the joint editor)
* **deleteBones.dsa**
  - Deletes currently selected bones.
* **unParentInPlace.dsa**
  - Unparents the selected nodes "in place".
* **exportEachFavToObj.dsa**
  - Exports each favorited morph set to max value individually to a .obj(s). prompts for output directory.
* **exportBaseResSubD0Obj.dsa**
  - Mimics the fuctionality of daz export at base reolution script. produces .obj of same filesize.
* **lookAtNullTarget.dsa**
  - Select g9 figure and run, creates a child null and points eyes at it, if null already exsists toggles eyes point at.
* **putInHandg9.dsa**
  - Select g9 figure and then select prop. run script, moves prop to centre of g9's palm and parents prop to g9 hand anchor.

## Camera and Render Settings
* **CopyCameraDimensionsToRenderSettings.dsa**
  - Copies the currently selected Camera's Pixel Size and Aspect ratio properties to the global render settings.
* **CopyRenderSettingsDimensionsToCamera.dsa**
  - Copies the global render settings Dimensions to the currently selected camera.
* **CopyRenderSettingsDimensionsToAllCamera.dsa**
  - Copies the global render settings Dimensions to all cameras in the scene.
* **FocalPointGizmo.dsa**
  - Select camera and run script. Creates a plane that moves with focal distance. plane can be scaled for better visability.

## Genesis 9 Bones
* **ResetTwistOnGen9twistbones.dsa**
  - Gets Genesis 9 bones with the word "twist" in their node name and sets their twist parameter to default. Fixes pose symmetry artifacts.
* **removeBonesCasc.dsa**
  - Select gen9 char and run script to remove facial bones, A pose figure (Pick Zero if/when prompted) + silent fbx export for import to Cascadeur (below free tier bone limit).

## Callbacks
* **clearCallbacks.dsa**
  - Clears all DzCallbacks. (For debugging scripts)

## Geometry
* **createCube.dsa**  
  - Creates a 1m x 1m x 1m cube.
* **createCubeNative.dsa**
  - Uses built in Daz Geometry class to create a cube.
