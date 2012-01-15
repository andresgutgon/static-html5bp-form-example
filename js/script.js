/* Author: @andresgutgon */
$(function(){ 
    $(".draggable-out, .draggable-in").draggable();
    $("#dragzone").droppable({
        out: function(event,ui){
            ui.draggable.find("div").addClass("happy");
        },
        drop: function(event,ui){  
            ui.draggable.find("div").removeClass("happy");
        }
    });          
    $(".innergallery").jCarouselLite({
        auto: 4000,
        visible: 1.5,
        vertical: true
    });  
    $("#client_validations_form").validate({  
        rules: { 
            name: "required", 
            lastname: "required", 
            lastname:{ 
                required: true, 
                minlength: 2 
            },
            phone: { 
                required: true, 
                minlength: 9, 
                number: true
            }, 
            email: { 
                required: true, 
                email: true 
            }, 
            comments: "required" 
        },  
        messages: { 
            name: "Especifica tu nombre", 
            lastname: "Especifica tus apellidos", 
            email: { 
                required: "No dejes vacio este campo.", 
                minlength: "Un poquito mas largo de 2 letras", 
                email: "Por favor, escribe un email con formato valido."
            }, 
            phone: { 
                required: "Deja tu numero.", 
                minlength: "Por lo menos 9 cifras.", 
                number: "Por lo menos escribe numeros!!!"
            }, 
            comments: "Dime algo, no seas soso :)" 
        }, 
        errorPlacement: function(error, element){ 
            element.parent().addClass("error");
            error.appendTo(element.parent()); 
        },
        submitHandler: function(form){    
            $(form).addClass("allok").html("<h2>Bien! Formulario validado.</h2>"); 
            return false
        }, 
        success: function(label) { 
            label.parent().removeClass("error");
            label.html(" ").addClass("checked"); 
        } 
    });              
});