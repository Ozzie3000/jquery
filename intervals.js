/*
setInterval(function(){
	console.log(new Date());
}, 2000);
*/

//in order to stop it you give it a function_name
var myinterVal = setInterval(function(){
	console.log(new Date());
}, 2000);


// stops setInterval
//clearInterval(function_name);
clearInterval(myinterVal);
