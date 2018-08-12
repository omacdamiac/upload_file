	//cuando haya cargado la página llamamos a init
	window.addEventListener("load", init);
	//
	function init()
	{
	//obtenemos el formulario con querySelector
	var formulario = document.querySelector("#formulario");
	//le añadimos el evento submit y asociamos la función submitForm
	formulario.addEventListener("submit", submitForm, false);
}

	//función que envia el formulario con ajax
	function submitForm(event)
	{
	//prevenimos la acción por defecto del navegador
	event.preventDefault();
	//creamos un objeto FormData de HTML5 y le pasamos el formulario
	var data = new FormData(this);
	cargad();
	//hacemos una petición ajax pasando el formulario contra postform.php
	var xhrObject = new XMLHttpRequest();  

	//Barra
	xhrObject.upload.addEventListener("progress", function(event){
		let porcentaje = Math.round((event.loaded / event.total)* 100);
		console.log(porcentaje);

		var barra = document.getElementById('barra');
		var span = document.getElementById('span');
		barra.style.width = porcentaje + '%';
		span.innerHTML = porcentaje+'%';
	});

	xhrObject.addEventListener('load',function(){

	});

	xhrObject.open("POST","upload.php");  
	cargad();
	xhrObject.send(data);
	var datos = [];
	var dato = {};

	for(var pair of data.entries()) {
	//console.log(pair[0]+ ', '+ pair[1]); 
	var file = pair[1];
	var fileName = (!file.name) ? file : file.name;
	var obj = pair[0]+ ': '+ fileName;
	datos.push(obj);

}
dato.datos = datos;

console.log(pair[1].name); 
console.log(JSON.stringify(dato)); 

formulario.reset();

document.getElementById("data").innerHTML= JSON.stringify(dato);
	//console.log(e);document.getElementById("demo").style.display = 'none';
}
function cargad(){
	document.getElementById("demo").innerHTML="Cargando..";
}
