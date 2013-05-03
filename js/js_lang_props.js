//JavaScript Native Objects
console.info(Object.getOwnPropertyNames(Object));
console.info(Object.getOwnPropertyNames(Math));

//Inheritance
function LogString(value) { }

LogString.inherits(String);
LogString.method('toString',function(){
	return 'Log'+this.toString();
});

//Extending object
String.prototype.LogValue = function(){
	if(typeof console !== "undefined")
		console.log(this);
}

//Loosing property - shadowing (Descendants of Object.prototype loose access to
//extended property, if they define property with the same name
Object.prototype.log_object = function(){
	if(typeof console !== "undefined")
		console.log(this.toString());
}

var test = {
	name : "test",
	log_object : "~/my_log"
}

//Will throw error
"basil".log_object();

//Don't extend Object object!!!

"vasja".LogValue();