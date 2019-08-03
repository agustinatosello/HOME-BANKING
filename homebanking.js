//Declaración de variables
var nombreUsuario = "Agustina Tosello";
var saldoCuenta = 10000;
var limiteExtraccion = 5000;
var agua = 350;
var luz = 210;
var telefono = 425;
var internet = 570;
var cuentaAmigaUno = 1234567;
var cuentaAmigaDos = 7654321;
var codigo = 2019;

iniciarSesion();
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(num1, num2) {
    saldoCuenta = num1 + num2;
    return saldoCuenta;
    //return num1 + num2;
}

function restarDinero(num2, num3) {
    saldoCuenta = num2 - num3;
    return saldoCuenta;
}

function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese el nuevo límite de extracción"));
    limiteExtraccion = nuevoLimite;
    alert("Tu nuevo límite de extracción es" + " " + nuevoLimite);
    actualizarLimiteEnPantalla();
}

function extraerDinero() {
    var dineroExtraer = parseInt(prompt("Ingrese el monto a extraer"));
    var saldoAnterior = saldoCuenta;
    if (saldoCuenta >= dineroExtraer && dineroExtraer <= limiteExtraccion && dineroExtraer % 100 == 0) {
        restarDinero(saldoCuenta, dineroExtraer);
        alert("Has retirado" + " " + dineroExtraer + "\nSaldo Anterior:" + " " + saldoAnterior + "\nSaldo Actual:" + " " + saldoCuenta);
        actualizarSaldoEnPantalla();
    } else if (dineroExtraer > limiteExtraccion) {
        alert("La cant de dinero que intentas extraer es mayor a tu límite de extracción");
    } else if (dineroExtraer % 100 != 0) {
        alert("Sólo puedes extraer billetes de 100");
    } else
        alert("No hay saldo disponible en tu cuenta para extraer esa cant de dinero");

}

function depositarDinero() {
    var dineroIngresado = parseInt(prompt("Ingrese el monto a depositar"));
    var saldoCuentaAnterior = 10000;
    sumarDinero(dineroIngresado, saldoCuenta);
    //console.log(sumarDinero(dineroIngresado, saldoCuenta));
    alert("Has depositado:" + " " + dineroIngresado + "\nSaldo Anterior:" + " " + saldoCuentaAnterior + "\nSaldo Actual:" + " " + saldoCuenta);
    actualizarSaldoEnPantalla();

}

function validarSaldo(pago) {
    if (saldoCuenta >= pago) {
        saldoCuenta = saldoCuenta - pago;
    } else {
        alert("No hay suficiente saldo para pagar este servicio");
    }
}

function pagarServicio() {
    var numeroServicio = parseInt(prompt("Ingrese el numero que corresponda con los servicios que queres pagar:" + "\n1-Agua" + "\n2-Luz" + "\n3-Internet" + "\n4-Teléfono"));
    switch (numeroServicio) {
        case 1:
            validarSaldo(agua);
            alert("Has pagado el servicio Agua" + "\nSaldo Anterior:" + " " + (saldoCuenta + agua) + "\nDineroDescontado:" + " " + agua + "\nSaldo Actual:" + " " + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        case 2:
            validarSaldo(luz);
            alert("Has pagado el servicio Luz" + "\nSaldo Anterior:" + " " + (saldoCuenta + luz) + "\nDineroDescontado:" + " " + luz + "\nSaldo Actual:" + " " + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        case 3:
            validarSaldo(internet);
            alert("Has pagado el servicio Internet" + "\nSaldo Anterior:" + " " + (saldoCuenta + internet) + "\nDineroDescontado:" + " " + internet + "\nSaldo Actual:" + " " + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        case 4:
            validarSaldo(telefono);
            alert("Has pagado el servicio Telefono" + "\nSaldo Anterior:" + " " + (saldoCuenta + telefono) + "\nDineroDescontado:" + " " + telefono + "\nSaldo Actual:" + " " + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        default:
            alert("No existe el servicio que se ha seleccionado");
    }
}


function transferirDinero() {
    var dineroTransferir = parseInt(prompt("Ingrese el monto a trasferir"));
    if (dineroTransferir <= saldoCuenta) {
        var cuentaTransferir = parseInt(prompt("Ingrese el numero de cuenta a la que desea transferir"));
        if (cuentaTransferir === cuentaAmigaUno || cuentaTransferir === cuentaAmigaDos) {
            saldoCuenta = saldoCuenta - dineroTransferir;
            alert("Se han Transferido:" + " " + dineroTransferir + " " + "Cuenta Destino:" + " " + cuentaTransferir);
            actualizarSaldoEnPantalla();
        } else {
            alert("Sólo puede transferirse dinero a una cuenta amiga");
        }
    } else {
        alert("No se puede trasferir esa cantidad de dinero");
    }
}

function iniciarSesion() {
    var contraseña = parseInt(prompt("Ingrese su contraseña"))
    if (contraseña === codigo) {
        alert("Bienvenido/a" + " " + nombreUsuario + " " + "ya puedes comenzar a realizar operaciones");
    } else {
        saldoCuenta = 0;
        alert("Código Incorrecto. Tu dinero fue retenido por cuestiones de seguridad");
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
