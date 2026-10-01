// Materiales: edita este arreglo para agregar tus prácticas y tareas
const materiales = [
  {t:"Práctica 1: Sistemas numéricos", u:"Unidad 1"},
  {t:"Tarea: Evolución de las computadoras", u:"Unidad 1"},
  {t:"Práctica 2: Registros y ALU", u:"Unidad 2"},
  {t:"Tarea: Jerarquía de memoria", u:"Unidad 3"}
];
document.getElementById("lista").innerHTML =
  materiales.map(m => `<div class="item">${m.t}<span>${m.u}</span></div>`).join("");

// Registro del chip: cambia el valor binario cada segundo
const bits = document.getElementById("bits");
let n = 0x41;
setInterval(() => {
  n = (n + 1) & 0xFF;
  const b = n.toString(2).padStart(8, "0");
  bits.textContent = b.slice(0,4) + " " + b.slice(4);
}, 1000);

// Menú: marca la sección visible
const links = [...document.querySelectorAll("#menu a")];
links.forEach(a => a.addEventListener("click", () => {
  links.forEach(l => l.classList.remove("active"));
  a.classList.add("active");
}));