export default class Alumno {


constructor(pUsername, pdni, pEdad)
{
this.username = pUsername;
this.dni = pdni;
this.edad = pEdad;
}
constructor(){}

toString(){
    return `Nombre: ${this.username}, DNI: ${this.dni}, edad: ${this.edad}`;
}
}