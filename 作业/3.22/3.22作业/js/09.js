/*(function(){
	var files=['099.js','0999.js'];
	files.forEach(function(file){
		var scriptTag=document.createElement("script");
		scriptTag.async=false;
		scriptTag.src=file;
		document.body.appendChild(scriptTag)
	})
}())
*/

(function(){
	var files=['099.js','0999.js'];
	files.forEach(function(file){
		var scriptTag=document.createElement("script");
		scriptTag.async=false;
		scriptTag.src=file;
		document.body.appendChild(scriptTag)
	})
}())