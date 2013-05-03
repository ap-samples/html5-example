/* Validate user input by using JavaScript */

/* Description: written in pure JS. Don't try this at home - use jQuery for validation purposes */

var lettersOnlyExpr = /^[a-zA-Z]+$/;
//http://stackoverflow.com/questions/2049502/what-characters-are-allowed-in-email-address
var emailExpr = /^.+@.+$/;
var websiteExpr = /^.+\..+$/;
var error_msg_elem = document.getElementById("validation-errors");
var validatedElemArr = new Array();
var errorMessagesArr = new Array();

//Fill array of validated elements like (element_name => is_invalid)
var inputs = document.getElementsByTagName('input');
for (var i=0;i<inputs.length;i++){
     validatedElemArr[inputs[i].getAttribute('name')] = false;
     errorMessagesArr[inputs[i].getAttribute('name')] = inputs[i].getAttribute('data-error-msg');
}
var textareas = document.getElementsByTagName('textarea');
for (i=0;i<textareas.length;i++){
    validatedElemArr[textareas[i].getAttribute('name')] = false;
    errorMessagesArr[textareas[i].getAttribute('name')] = textareas[i].getAttribute('data-error-msg');
    console.info('Test ' + textareas[i].getAttribute('data-error-msg'))
}

function ReportError(key){
     validatedElemArr[key] = true;
     //console.log('rep_error '+key);
     PrintErrorMessages();
}

function ReportFixed(key){
    validatedElemArr[key] = false;
    //console.log('rep_fixed '+key);
    PrintErrorMessages();
}

function PrintErrorMessages(){
    error_msg_elem.innerHTML = '';
    for(var elem_name in validatedElemArr){
        if(validatedElemArr[elem_name] == true && errorMessagesArr[elem_name] !== 'undefined'){
            console.info(errorMessagesArr[elem_name]);
            error_msg_elem.insertAdjacentHTML('beforeend',errorMessagesArr[elem_name]);                
        }
    }
}

function ValidateName(elem, error_msg_elem){
    MakeRegexValidation(elem,error_msg_elem,lettersOnlyExpr);
}

function ValidateEmail(elem, error_msg_elem){
    MakeRegexValidation(elem,error_msg_elem,emailExpr);
}

function ValidateWebsite(elem, error_msg_elem){
    MakeRegexValidation(elem,error_msg_elem,websiteExpr);        
}

function MakeRegexValidation(elem,error_msg_elem,regex_expr){
    if(elem.value === ""){
        ReportFixed(elem.getAttribute('name'));
        return;
    }
    if(!elem.value.match(regex_expr)){
        ReportError(elem.getAttribute('name'));
    }
    else ReportFixed(elem.getAttribute('name'));
}

function EnsureMaxSymbolLimit(elem,error_msg_elem,evt){
    //If key pressed is delete/backspace - return
    if(evt.keyCode == 46 || evt.keyCode == 8)
        return;
    if(elem.value.length > 200){
        ReportError(elem.getAttribute('name'));
        evt.preventDefault();
        return false;        
    }
    else ReportFixed(elem.getAttribute('name'));
}

document.getElementById('person-desc').onkeydown = function(e){
    EnsureMaxSymbolLimit(document.getElementById('person-desc'),document.getElementById('validation-errors'),e);
}