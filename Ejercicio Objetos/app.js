alert ("Hola");
//Objeto literal

/*var marcadorNegro = {
  "color" : "negro",
  "size" : "medium",
  "material" :"plastico",
  //Metodos.
  "escribir": function (){
    Cconsole.log("escribiendo...")
  }
}*/

var Robot = {
  "nombre":"",
  "lenguaje": "",
  "hablar" : function (){ // hablar se convierte en metodo al agregar una funcion
    console.log("hola muchachas:"+mensaje)
  }
}
var macetin = Object.create(Robot);
var RobotConstructora = function(){
  this.nombre = nombre;
}
= new RobotConstructora("macetin"),


var lyla = new RobotConstructora()
