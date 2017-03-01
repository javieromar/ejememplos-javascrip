//var caja=document.getElementsByClassName('div')
//caja[0].textContent='hola java'
//caja[1].innerHTML='<b>Hola mundo'
var caja=document.getElementById('primera')
caja.textContent='primera caja';
document.write("<div> nuevo elemento </div>")
/**
    no se recomienda agregar cosas con write
 */
 /**
    5 pasos pa agregar un nuevo elemento con el dom
    1.crear nuevo elemento (createElement())
    
    2.crear el contenido (createTextNode())
    3.añadir contenido al elemento (appenChild())
    4.agregar atributos al elemento (setAttribute())
    5.agregar el elemento al documento (appenChild())
  */
  var elementoNuevo=document.createElement('div')
  var nodoContenido=document.createTextNode('nuevo elemento')
  elementoNuevo.appendChild(nodoContenido)
  elementoNuevo.setAttribute('class','caja colorcoral')
  var contenedor=document.getElementById("contenedor")
  document.appendChild(elementoNuevo)

  //agregar al inicio
  var primera=document.getElementById('primera')
  primera.incertBefore(elementoNuevo,primera)

//eliminar caja contenedora
var tercera=document.getElementById('tercera')
contenedor.removeChild(tercera)