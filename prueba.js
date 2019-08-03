function extraerDinero() {
    var dineroExtraer = parseInt(prompt("Ingrese el monto a extraer"));
    var saldoAnterior = saldoCuenta;
        if (saldoCuenta > dineroExtraer) {
        restarDinero (saldoCuenta, dineroExtraer && dineroExtraer <= limiteExtraccion && dineroExtraer%100==0);
        alert ("Has retirado" + " " + dineroExtraer + "\nSaldo Anterior:" + " " + saldoAnterior + "\nSaldo Actual:"+ " " + saldoCuenta);
        } else if (dineroExtraer > limiteExtraccion) {
            alert ("La cant de dinero que intentas extraer es mayor a tu límite de extracción");
        } else if (dineroExtraer%100!=0){
            alert ("Sólo puedes extraer billetes de 100");
        } else 
        alert ("No hay saldo disponible en tu cuenta para extraer esa cant de dinero");
    }

function retirar (dineroExtraer, limiteExtraccion) {
    if (dineroExtraer <= limiteExtraccion) {
        return true
    }
    
}