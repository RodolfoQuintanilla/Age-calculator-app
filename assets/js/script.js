function inicio() {
  const diaNacimiento = document.querySelector("#day").value;
  const mesNacimiento = document.querySelector("#mouth").value;
  const anoNacimiento = document.querySelector("#year").value;
  console.log(anoNacimiento);
  if (
    anoNacimiento <= 1900 ||
    anoNacimiento >= new Date().getFullYear() ||
    mesNacimiento > 12 ||
    mesNacimiento <= 0 ||
    diaNacimiento < 1 ||
    diaNacimiento > 31
  ) {
    console.log("Funcion de error");
    return;
  } else {
    calculo(diaNacimiento, mesNacimiento, anoNacimiento);
  }
}

function calculo(diaNacimiento, mesNacimiento, anoNacimiento) {
  let anosCumplidos = new Date().getFullYear() - anoNacimiento;
  let meses = mesNacimiento - new Date().getMonth() + 1;
  let dias = new Date().getDate() - diaNacimiento;
  document.querySelector(".ano").textContent = anosCumplidos;
  document.querySelector(".mes").textContent = meses;
  document.querySelector(".dia").textContent = dias;
}
