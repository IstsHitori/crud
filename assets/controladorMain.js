const persona = new Persona();
const documento = document.getElementById("validationCustom00");
function crearObjeto(){
    if(!persona.isDuplicate(documento)){
        persona.creaObjeto();
    }else{
        alert("el documento está repetido");
    }
}