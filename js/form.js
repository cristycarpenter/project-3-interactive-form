//Focus on first text field upon page load.
$('#name').focus(); 

//Reveal text area if "Other" is selected from "Job Role" menu
$("#title").change(function(){

    var userTitle = $('#title').val();
    console.log(userTitle); //visbility
    
    if (userTitle === "other"){
        var textFieldOther = document.createElement('input');
        $(textFieldOther).attr("type", "text");
        $(textFieldOther).attr("id", "other-title");
        $(textFieldOther).attr("placeholder", "Your Job Role");
        $(textFieldOther).insertAfter("#title");
        console.log(textFieldOther);
    }
    else{
        $("#other-title").remove();
    }
    
});


 


