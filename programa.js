let botonS = document.getElementById("submit-s");
botonS.addEventListener("click", async (event) => {
  event.preventDefault();
  const numero_1 = parseFloat(document.getElementById("numero_1").value);
  const numero_2 = parseFloat(document.getElementById("numero_2").value);
  const respuesta = await fetch("http://localhost:3000/api/sumar", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }), 
  });

  const dato = await respuesta.json();
  const div_resultado = document.getElementById("resultado");
  div_resultado.innerHTML = dato;
});

let botonR = document.getElementById("submit-r");
botonR.addEventListener("click", async (event) => {
  event.preventDefault(); 
  const numero_1 = parseFloat(document.getElementById("numero_1").value);
  const numero_2 = parseFloat(document.getElementById("numero_2").value);
  const respuesta = await fetch("http://localhost:3000/api/restar", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }),
  });

  const dato = await respuesta.json();
  const div_resultado = document.getElementById("resultado");
  div_resultado.innerHTML = dato;
});

let botonM = document.getElementById("submit-m");
botonM.addEventListener("click", async (event) => {
  event.preventDefault();
  const numero_1 = parseFloat(document.getElementById("numero_1").value);
  const numero_2 = parseFloat(document.getElementById("numero_2").value);
  const respuesta = await fetch("http://localhost:3000/api/multiplicar", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }), 
  });

  const dato = await respuesta.json();
  const div_resultado = document.getElementById("resultado");
  div_resultado.innerHTML = dato;
});

let botonD = document.getElementById("submit-d");
botonD.addEventListener("click", async (event) => {
  event.preventDefault();
  const numero_1 = parseFloat(document.getElementById("numero_1").value);
  const numero_2 = parseFloat(document.getElementById("numero_2").value);
  const respuesta = await fetch("http://localhost:3000/api/dividir", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }), 
  });

  const dato = await respuesta.json();
  const div_resultado = document.getElementById("resultado");
  div_resultado.innerHTML = dato;
});