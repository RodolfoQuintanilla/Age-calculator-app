const diaNacimiento = 10;
const mesNacimiento = 10;
const anoNacimiento = 1988;

if (
    diaNacimiento <= 0 ||
    diaNacimiento > 31 ||
    mesNacimiento <= 0 ||
    mesNacimiento > 12
) {
    if (mesNacimiento) {
        console.error("verifica tus datos");
    }
} else {
    calculo();
    function calculo() {
        if (diaNacimiento === 0 || mesNacimiento === 0 || anoNacimiento === 0) {
            console.log("error");
            return;
        } else {
            let anosCumplidos = new Date().getFullYear() - anoNacimiento;
            let meses = new Date().getMonth() + 1 - mesNacimiento;
            let dias = new Date().getDate() - diaNacimiento;
            console.log("Tienes" + anosCumplidos);
            console.log("Tienes" + meses);
            console.log("Tienes" + dias);
        }
    }
}
