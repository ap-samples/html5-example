

function borderRadChange(modifier){
    var rad = $("#border-rad").val();
    if(modifier === 'dec'){
        if(rad < 1)
            return;
        else
            rad--;
        $("#border-rad").val(rad);
        rad += "px";
        $("#box-div").css('border-radius', rad);
    }
    else if(modifier === 'inc'){
        rad++;
        $("#border-rad").val(rad);
        rad += "px";
        $("#box-div").css('border-radius', rad);     
    }
    else throw new Error('Unknown modifier type');    
}

function boxShadowChange(hs_delta, vs_delta, blur_rad_delta){
    $("#h-shadow").val(parseInt($("#h-shadow").val()) + hs_delta);
    $("#v-shadow").val(parseInt($("#v-shadow").val()) + vs_delta);
    $("#blur-spread").val(parseInt($("#blur-spread").val()) + blur_rad_delta);
    
    var hs = $("#h-shadow").val() + "px";
    var vs = $("#v-shadow").val() + "px";
    var bs = $("#blur-spread").val() + "px";
    $("#box-shadow-div").css('box-shadow', hs+" "+vs+" "+bs+" "+"#71919e");
}