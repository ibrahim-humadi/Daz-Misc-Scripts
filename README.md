## Scene Management
* **newScene.dsa**
  - Clears the scene without showing a dialog box (good if you're ad-phobic).
* **ToggleVisibleScene.dsa**
  - Hides visible and unhide's non-visible.
* **hide_selected.dsa**
  - Hides the selected nodes.
* **hide_unselected.dsa**
  - Hides currently unselected nodes.
* **unhideSelected.dsa**
  - unhide currently selected nodes.
* **unhideAll.dsa**
  - Unhide all nodes.

## Node Selection and Manipulation
* **getEnvNode.dsa**
  - Deselects all selected nodes and selects "Environment Options" Node only. (To assign to action later)
* **selected_reset_translate.dsa**
  - Sets the currently selected node's X,Y,Z Translate values to 0.
* **MatchTransforms.dsa**
  - Takes the first selected node and changes its Transform's (XYZ Translate, rotate, and scale) to match the second selected node/figure.
* **MoveToFocalPoint.dsa**
  - Moves the currently selected node/nodes to the current viewport's focal point.
* **MoveToFocalPointAndToFloor.dsa**
  - Moves the currently selected node/nodes to the current viewport's focal point and "Move to floor" them.
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
* **deleteBones.dsa**
  - Deletes currently selected bones.
* **unParentInPlace.dsa**
  - Unparents the selected nodes "in place"

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

## Callbacks and Selection
* **clearCallbacks.dsa**
  - Clears all DzCallbacks. (For debugging scripts)
* **clearSelection.dsa**
  - Clears selection. (Deselects selected nodes)