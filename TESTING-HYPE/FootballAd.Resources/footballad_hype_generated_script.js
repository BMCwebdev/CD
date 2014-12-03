//	HYPE.documents["FootballAd"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "FootballAd.Resources";
	var documentName = "FootballAd";
	var documentLoaderFilename = "footballad_hype_generated_script.js";
	var mainContainerID = "footballad_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_127 == "undefined") {
		if(typeof window.HYPE_127_DocumentsToLoad == "undefined") {
			window.HYPE_127_DocumentsToLoad = new Array();
			window.HYPE_127_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=127';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_127_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_127();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",T:"i",aX:"i",aJ:"i",l:"d",bI:"f",m:"c",n:"c",aK:"i",bJ:"f",X:"i",aZ:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"1",t:0,d:0.40000001,i:"f",e:"-25deg",r:1,s:"20deg",o:"17"},{f:"3",t:0,d:0.40000001,i:"a",e:-3,r:1,s:-145,o:"17"},{f:"3",t:0,d:0.40000001,i:"b",e:-44,r:1,s:-84,o:"17"},{f:"1",t:0.33333334,d:0.49999997,i:"a",e:396,r:1,s:86,o:"13"},{f:"4",t:0.33333334,d:0.49999997,i:"b",e:-147,r:1,s:58,o:"13"},{f:"1",t:0.33333334,d:0.49999997,i:"a",e:408,r:1,s:98,o:"16"},{f:"1",t:0.33333334,d:0.49999997,i:"e",e:"0.500000",r:1,s:"1.000000",o:"16"},{f:"1",t:0.33333334,d:0.49999997,i:"f",e:"90deg",r:1,s:"0deg",o:"13"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0.83333331}},sceneIndex:0,onSceneTimelineCompleteActions:[{type:1,transition:1,sceneOid:"A5202F29-8D37-42FC-A660-5ACE6E616CA9-755-000006D372C066B4"}],perspective:"600px",initialValues:{"17":{o:"content-box",h:"leg.png",p:"no-repeat",x:"visible",a:-145,q:"100% 100%",b:-84,j:"absolute",r:"inline",c:188,k:"div",z:"4",d:279,aY:"0",f:"20deg"},"13":{o:"content-box",h:"soccerball-1.png",p:"no-repeat",x:"visible",a:86,q:"100% 100%",b:58,j:"absolute",r:"inline",c:128,k:"div",z:"3",d:118,aY:"0",f:"0deg"},"16":{o:"content-box",h:"shadow-1.png",p:"no-repeat",x:"visible",a:98,q:"100% 100%",b:147,j:"absolute",r:"inline",c:103,k:"div",z:"2",d:45,e:"1.000000"},"15":{o:"content-box",h:"grass-intro.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:300,k:"div",z:"1",d:250}},oid:"302C47A6-9B9F-436C-A54E-C74CE03F2187-1519-00000BBF751DFAF8",backgroundColor:"#FFFFFF",name:"Kickoff"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"1",t:0,d:5,i:"a",e:-700,r:1,s:0,o:"1"},{f:"1",t:0,d:5,i:"a",e:-350,r:1,s:0,o:"2"},{f:"1",t:0,d:5,i:"a",e:-200,r:1,s:0,o:"3"},{f:"1",t:0,d:5,i:"a",e:-55,r:1,s:-35,o:"4"},{f:"4",t:0,d:5,i:"b",e:-5,r:1,s:118,o:"5"},{f:"1",t:0,d:5,i:"f",e:"500deg",r:1,s:"0deg",o:"5"},{f:"1",t:0,d:5,i:"a",e:385,r:1,s:-184,o:"5"},{f:"1",t:0,d:5,i:"a",e:12,r:1,s:45,o:"20"},{f:"2",t:0,d:5,i:"b",e:-11,r:1,s:-15,o:"20"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:5}},sceneIndex:1,onSceneTimelineCompleteActions:[{type:1,transition:1,sceneOid:"999F090F-2EB2-4A0C-881F-3D74C82F8D2C-1519-00000A1453BFAA42"}],perspective:"600px",initialValues:{"3":{o:"content-box",h:"grass3.png",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1000,k:"div",z:"3",d:250},"1":{o:"content-box",h:"grass1.png",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1000,k:"div",z:"5",d:250},"4":{o:"content-box",h:"sky-1.png",p:"no-repeat",x:"visible",a:-35,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1000,k:"div",z:"1",d:250},"20":{o:"content-box",h:"cloud1.png",x:"visible",a:45,q:"100% 100%",b:-15,j:"absolute",r:"inline",c:205,k:"div",z:"2",d:73},"2":{o:"content-box",h:"grass2.png",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1000,k:"div",z:"4",d:250},"5":{o:"content-box",h:"soccerball-1.png",p:"no-repeat",x:"visible",a:-184,q:"100% 100%",b:118,j:"absolute",r:"inline",c:90,k:"div",z:"6",d:83,aY:"0",f:"0deg"}},oid:"A5202F29-8D37-42FC-A660-5ACE6E616CA9-755-000006D372C066B4",backgroundColor:"#FFFFFF",name:"Flying"},{initialValues:{"11":{o:"content-box",h:"shadow-1.png",p:"no-repeat",x:"visible",a:-29,q:"100% 100%",b:204,j:"absolute",r:"inline",c:59,k:"div",z:"2",d:26,e:"0.296930"},"8":{o:"content-box",h:"soccerball-1.png",p:"no-repeat",x:"visible",a:-63,q:"100% 100%",b:-134,j:"absolute",r:"inline",c:128,k:"div",z:"3",d:118,aY:"0",f:"0deg"},"9":{aV:8,w:"SADIDA SOCCER",a:8,x:"visible",Z:"break-word",y:"preserve",j:"absolute",b:20,z:"5",k:"div",s:"Impact,'Arial Narrow Bold',Sans-Serif",aS:8,aT:8,t:42,e:"0.000000",r:"inline",G:"#FFFFFF",aU:8},"18":{aV:8,w:"Unleash your<div>superman!</div>",a:6,x:"visible",Z:"break-word",y:"preserve",j:"absolute",b:153,z:"6",k:"div",s:"Impact,'Arial Narrow Bold',Sans-Serif",aS:8,aT:8,t:24,e:"0.000000",r:"inline",G:"#FFFFFF",aU:8},"7":{o:"content-box",h:"grass-intro.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:300,k:"div",z:"1",d:250}},sceneIndex:2,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"1",t:0.33333334,d:1.6666666,i:"a",e:165,r:1,s:-63,o:"8"},{f:"5",t:0.33333334,d:1.6666666,i:"b",e:115,r:1,s:-134,o:"8"},{f:"1",t:0.33333334,d:1.6666666,i:"a",e:177,r:1,s:-29,o:"11"},{f:"5",t:0.33333334,d:1.6666666,i:"e",e:"1.000000",r:1,s:"0.296930",o:"11"},{f:"5",t:0.33333334,d:1.6666666,i:"d",e:45,r:1,s:26,o:"11"},{f:"5",t:0.33333334,d:1.6666666,i:"c",e:103,r:1,s:59,o:"11"},{f:"1",t:0.33333334,d:1.6666666,i:"f",e:"130deg",r:1,s:"0deg",o:"8"},{f:"2",t:2.3,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"9"},{f:"2",t:3.3,d:0.63333344,i:"e",e:"1.000000",r:1,s:"0.000000",o:"18"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:3.9333334}},perspective:"600px",oid:"999F090F-2EB2-4A0C-881F-3D74C82F8D2C-1519-00000A1453BFAA42",backgroundColor:"#FFFFFF",name:"Landing"}];


	
	var javascripts = [];


	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

