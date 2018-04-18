var scores = {} ; // Para llevar el registro de los jugadores y sus puntos.
console.log(scores);
//
function createPlayer (object, name){
  object[name.toLowerCase()] = 0; //Crea una estancia //Especificar no importan upper/lower case
console.log(object);
}

function addPoints (name, points){
  scores [name] += points; //A que esta relacionado //asignando valores a las keys ya asignadas //+= suma en vez de reemplazar
console.log(scores);
}

function printAllPoints () {
  var arrayPlayers = Object.keys(); //Obteniendo todas las keys y asisgnando al arrayPlayers
  var resultados = "";
  for (var k=0, k<arrayPlayers.lenght; k++){//Indices de arreglos comienzan en 0
    //console.log(resultados); // asignar a resultado //k esta iterando // concatenar nombres y resultados
    //esta iterando para que no se mezclen los resultados
    if (k == arrayPlayers.lenght -1 ){ //se verifica que estemos en el ultimo index
      resultados += arrayPlayers[k] + ':' + scores [arrayPlayers[k]] +'.';
    }else{
      resultados += arrayPlayers[k] + ':' + scores [arrayPlayers[k]] +',';
    }
  }
  return resultados;
  console.log(arrayPlayers); //Variable que ya contiene los keys de scores
}
//solo llamando a la funcion se agregan los argumentos
createPlayer(scores, "Ana");
addPoints("Ana",20);
addPoints("ana",40);
createPlayer(scores, "Silvana");
addPoints("Silvana",50);
printAllPoints();
console.log (printAllPoints)
