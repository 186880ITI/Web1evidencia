function calcularPropina() {
    // 1. Para introducir las variables
    const totalCuentaInput = document.getElementById("totalCuenta");
    const porcentajePropinaInput = document.getElementById("porcentajePropina");

    const totalCuenta = parseFloat(totalCuentaInput.value);
    const porcentaje = parseFloat(porcentajePropinaInput.value);

    // 2. Validar las entradas
    if (isNaN(totalCuenta) || totalCuenta <= 0) {
        alert("Por favor, introduce un total de cuenta válido y positivo.");
        totalCuentaInput.focus();
        return;
    }
    if (isNaN(porcentaje) || porcentaje < 0) { // Permitimos 0% de propina
        alert("Por favor, introduce un porcentaje de propina válido.");
        porcentajePropinaInput.focus();
        return; 
    }
    // 3. Se realizan los calculos de la propina y la suma
    const propina = totalCuenta * (porcentaje / 100);
    const totalAPagar = totalCuenta + propina;
    
    document.getElementById("propinaCalculada").textContent = `$${propina.toFixed(2)}`;
    document.getElementById("totalPagar").textContent = `$${totalAPagar.toFixed(2)}`;
}