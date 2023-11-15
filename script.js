//cerrar menu hamburguesa
var navBtns = document.querySelectorAll(".menu li a");
var list = document.getElementById("menu-boton");
var listbtn = document.querySelector(".checkbtn");
var size = window.innerWidth;
var flag = false;
window.addEventListener("resize", () => {
  list.style.left = "100%";
  size = window.innerWidth;
  flag = false;
  console.log(flag);
});

if (window.innerWidth < 768) {
  for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener("click", () => {
      list.style.left = size + "px";
      list.style.display=block;
      flag = false;
      console.log(flag);
    });
  }

  function buttons() {
    if (flag) {
      flag = false;
 
      list.style.left = size + "px";
      list.style.display=block;
     
      console.log(flag);
    } else {
      flag = true;
    
      list.style.left = size - 380 + "px";
      list.style.display=block;

      console.log(flag);
    }
  }
}
//cerrar menu hamburguesa

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
