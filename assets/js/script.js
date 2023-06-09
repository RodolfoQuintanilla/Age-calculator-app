function inicio() {
  const diaNacimiento = document.querySelector("#day").value;
  const mesNacimiento = document.querySelector("#mouth").value;
  const anoNacimiento = document.querySelector("#year").value;

  if (
    anoNacimiento <= 1900 ||
    anoNacimiento >= new Date().getFullYear() ||
    mesNacimiento > 12 ||
    mesNacimiento <= 0 ||
    diaNacimiento < 1 ||
    diaNacimiento > 31
  ) {
    document.querySelector("#day").classList.add("errorors");
    document.querySelector("#mouth").classList.add("errorors");
    document.querySelector("#year").classList.add("errorors");
    setTimeout(() => {
      document.querySelector("#year").classList.remove("errorors");
      document.querySelector("#day").classList.remove("errorors");
      document.querySelector("#mouth").classList.remove("errorors");
    }, 3000);

    return;
  } else {
    calculo(diaNacimiento, mesNacimiento, anoNacimiento);
  }
}

function calculo(diaNacimiento, mesNacimiento, anoNacimiento) {
  let anosCumplidos = new Date().getFullYear() - anoNacimiento;
  let meses = mesNacimiento - new Date().getMonth();
  let dias = new Date().getDate() - diaNacimiento;
  document.querySelector(".ano").textContent = anosCumplidos;
  document.querySelector(".mes").textContent = meses;
  document.querySelector(".dia").textContent = dias;
}

function errors(x) {}
