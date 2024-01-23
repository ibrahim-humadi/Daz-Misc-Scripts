(function(){

    function exportSelected(path, morphName)
	{
		var exportMgr = App.getExportMgr();
		var exporter = exportMgr.findExporterByClassName("DzObjExporter");
		if( exporter ){
			var settings = new DzFileIOSettings();
			settings.setFloatValue( "Scale", 1 );
			settings.setStringValue( "LatAxis", "X" );
			settings.setStringValue( "VertAxis", "Y" );
			settings.setStringValue( "DepthAxis", "Z" );
			settings.setBoolValue( "InvertLat", false );
			settings.setBoolValue( "InvertVert", false );
			settings.setBoolValue( "InvertDepth", false );
			settings.setBoolValue( "IgnoreInvisible", true );
			settings.setBoolValue( "RemoveUnusedVerts", false );
			settings.setBoolValue( "WriteVT", true );
			settings.setBoolValue( "WriteVN", true );
			settings.setBoolValue( "SelectedOnly", true );
			settings.setBoolValue( "", false );
			settings.setBoolValue( "SelectedRootsOnly", true );
			settings.setIntValue( "RunSilent", 1 );
			exporter.writeFile( path + "/" + morphName +".obj", settings );
		}
	};

    var figure = Scene.getPrimarySelection();
    var propCount = figure.getNumProperties();
    print(propCount);

    var path = FileDialog.doDirectoryDialog( qsTr("Please select a Directory to output .obj files") );

    for (i = 0; i < propCount; i++) {
        prop = figure.getProperty(i);

        if(prop.isFavorite())
        { 
            if(prop.currentValueIsDefaultValue())
            {
                print(prop.getLabel());
                prop.setValue(prop.getMax());
                exportSelected(path,prop.getLabel());
                prop.reset(DzProperty.ResetDefault);
            }
            else
            {
                MessageBox.information( qsTr("You Have morphs favorited that are not set to their default values!"), qsTr("ExportFavs"), qsTr("&OK") );
                break;
            }        
        }
    };
    
	var object = figure.getObject();
	var noMods = object.getNumModifiers();
	for( i = 0; i < noMods; i += 1 ){
		mod = object.getModifier(i);
		if (mod.className() == "DzMorph")
		{
			prop = mod.getValueControl();
			if(prop.isFavorite())
	        {
	        	if(prop.currentValueIsDefaultValue())
                {
                    print(prop.getLabel());
                    prop.setValue(prop.getMax());
                    exportSelected(path,prop.getLabel());
                    prop.reset(DzProperty.ResetDefault);
                }
            else
                {
                MessageBox.information( qsTr("You Have morphs favorited that are not set to their default values!"), qsTr("ExportFavs"), qsTr("&OK") );
                break;
                }
	        }
		}
	}    
    
})();