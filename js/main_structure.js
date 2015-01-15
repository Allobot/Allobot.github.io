/* 
*	2015 Allobot LLC. 
*	author: Holland Herbert
*/

function populate_content() {
	var container = document.getElementById("content");
	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent){
		var textFromFileLoaded = fileLoadedEvent.target.result;
		var subcontent = document.createElement("div");
		subcontent.className = "color1 main content-section bottom-border";
		subcontent.innerHTML = textFromFileLoaded;
		container.appendChild(subcontent);
	}
}

window.document.onload = function () { populate_content(); };