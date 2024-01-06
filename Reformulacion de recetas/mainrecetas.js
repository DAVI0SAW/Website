displayy = document.getElementById("contenido")
display2 = document.getElementById("salida2")
horizontal = document.getElementsByClassName("horizontal")
vertical = document.getElementsByClassName("vertical")
tab = document.getElementById("tab")
nuevaTabla = document.getElementById("tab2")

url = `formulas.json`

let nuevoDato = document.getElementById("nuevoDato")

function traer() {
     fetch(url)
          .then(Response => Response.json())
          .then(data => {
               globaldata = data
               datovalor = Object.values(data)
               dat = Object.keys(data)

               for (i = 0; i < dat.length; i++) {
                    datos = dat[i];
                    //console.log(datos);
                    let salida = `<option class="opt" value="${i}"> ${datos}</option>`
                    displayy.innerHTML += salida
               }
          })
}
function cambio() {
     
     let Gdata = Object.values(globaldata)
     let valueoption = document.querySelectorAll(".opt")
     // itera todo los los value de los option generados en la fun. traer()
     for (let i = 0; i < valueoption.length; i++) {
          let valu = valueoption[i]
          let prueba = valu.selected;
          let formulaSeleccionada = Gdata[i]
          
          let array = Object.entries(formulaSeleccionada) // Variable global usada en funcion calcular nuevo dato
          if (prueba == true) {
               display2.innerHTML = ""
               display2.innerHTML += `<h1 class="horizontal">La formula seleccionada es : ${valu.innerText} </h1>`
               tab.innerHTML = ""
               nuevaTabla.innerHTML = ""
               array.forEach(([key, value]) => {
                    tab.innerHTML += `
                    <tr> 
                    <td class ="nombretabla" >${key}</td>
                    <td class="valortabla" >${value}</td>
                    </tr>`
               });
          }
     }
}

function calcularNuevoDato() {
     
     let Gdata = Object.values(globaldata)
     let valortabla = document.querySelectorAll(".valortabla")
     let nombretabla = document.querySelectorAll(".nombretabla")
     let mayor = valortabla[0].innerHTML
     let Ndato = nuevoDato.value
     let Nform = document.getElementById("contenidoNuevaform")
     nuevaTabla.innerHTML=""
     for (let i = 0; i < valortabla.length; i++) {
          let cantidades = valortabla[i].innerHTML;
          let mp = nombretabla[i].innerHTML
          let nuevaform = (Ndato * cantidades) / mayor
          
          nuevaTabla.innerHTML += `
          <tr> 
          <td class ="nombretabla" >${mp}</td>
          <td class="valortabla" >${nuevaform}</td>
          </tr>`
          
     
     }


}


