var codigo = 0;
class Persona{

    constructor(id,documento,nombre,apellido,usuario,ciudad,estado,zip){
        this.id = id;
        this.nombre = nombre;
        this.documento = documento;
        this.apellido = apellido;
        this.usuario = usuario;
        this.ciudad = ciudad;
        this.estado = estado;
        this.zip = zip;
    }
    creaObjeto(){
        //input H...
        const docu =  document.getElementById("validationCustom00").value;
        const idH = codigo;
        const name = document.getElementById("validationCustom01").value;
        const ape = document.getElementById("validationCustom02").value;
        const user = document.getElementById("validationCustomUsername").value;
        const city = document.getElementById("validationCustom03").value;
        const estate = document.getElementById("validationCustom04").value;
        const zip = document.getElementById("validationCustom05").value;

        persona.id = idH;
        persona.documento = docu;
        persona.nombre = name;
        persona.apellido = ape;
        persona.usuario = user;
        persona.ciudad = city;
        persona.estado = estate;
        persona.zip = zip;

        persona.leaObjeto();
        codigo++;
    }
    leaObjeto(){

        document.getElementById("tableID").innerHTML +=  `<tr>
        <th scope="row">${persona.id}</th>
        <td>${persona.documento}</td>
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.usuario}</td>
        <td>${persona.ciudad}</td>
        <td>${persona.estado}</td>
        <td>${persona.zip}</td>
        </tr>`    
    }
}
