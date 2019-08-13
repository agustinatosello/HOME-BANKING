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
    
}

function restarDinero(num2, num3) {
    saldoCuenta = num2 - num3;
    return saldoCuenta;
}

function cambiarLimiteDeExtraccion() {
    var cambioLimite = prompt("Ingrese el nuevo límite de extracción");
    var nuevoLimite = parseInt(cambioLimite);
    limiteExtraccion = nuevoLimite;
    if (!isNaN(nuevoLimite) && (/^([0-9])*$/.test(nuevoLimite))) {
    alert("Tu nuevo límite de extracción es" + " " + nuevoLimite);
    actualizarLimiteEnPantalla();
}else{
    alert("Datos incorrectos");
}
}

function extraerDinero() {
    var quiereExtraer= prompt("Ingrese el monto a extraer");
    var dineroExtraer = parseInt(quiereExtraer);
    var saldoAnterior = saldoCuenta;
    if (!isNaN(dineroExtraer) && (/^([0-9])*$/.test(dineroExtraer))) {
    if (saldoCuenta >= dineroExtraer && dineroExtraer <= limiteExtraccion && dineroExtraer % 100 == 0) {
        restarDinero(saldoCuenta, dineroExtraer);
        alert("Has retirado" + " " + dineroExtraer + "\nSaldo Anterior:" + " " + saldoAnterior + "\nSaldo Actual:" + " " + saldoCuenta);
        actualizarSaldoEnPantalla();
    } else if (dineroExtraer > limiteExtraccion) {
        alert("La cant de dinero que intentas extraer es mayor a tu límite de extracción");
    } else if (dineroExtraer % 100 != 0) {
        alert("Sólo puedes extraer billetes de 100");
    } else{
        alert("No hay saldo disponible en tu cuenta para extraer esa cant de dinero");
  
    } 
  }else{
    alert("Debe ingresar numeros postivos");
  }
}

function depositarDinero() {
    var dineroDepositar = prompt("Ingrese el monto a depositar");
    var dineroIngresado = parseInt(dineroDepositar)
    if (!isNaN(dineroIngresado) && (/^([0-9])*$/.test(dineroIngresado))) {
    var saldoCuentaAnterior = saldoCuenta;
        saldoCuenta = saldoCuenta + dineroIngresado;
    alert("Has depositado:" + " " + dineroIngresado + "\nSaldo Anterior:" + " " + saldoCuentaAnterior + "\nSaldo Actual:" + " " + saldoCuenta);
    actualizarSaldoEnPantalla();

}else {
    alert("Número ingresado no válido");
}
}

function validarSaldo(pago) {
    if (saldoCuenta >= pago) {
        saldoCuenta = saldoCuenta - pago;
    } else {
        alert("No hay suficiente saldo para pagar este servicio");
    }
}

function pagarServicio() {
    var numeroServ = prompt("Ingrese el numero que corresponda con los servicios que queres pagar:" + "\n1-Agua" + "\n2-Luz" + "\n3-Internet" + "\n4-Teléfono");
    var numeroServicio = parseInt(numeroServ);
    if (!isNaN(numeroServicio)) {
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
}else{
    alert("Datos incorrectos. Intentá nuevamente.");
}
}


function transferirDinero() {
    var dineroTrans = prompt("Ingrese el monto a transferir");
    var dineroTransferir = parseInt(dineroTrans);
    if (!isNaN(dineroTransferir) && (/^([0-9])*$/.test(dineroTransferir))) {
    if (dineroTransferir <= saldoCuenta) {
        var cuentaTransferir = parseInt(prompt("Ingrese el numero de cuenta a la que desea transferir"));}
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
    var codigoInicio = prompt("Ingrese su contraseña");
    var contraseña = parseInt(codigoInicio);
    if ((!isNaN(contraseña)) && (contraseña === codigo)) {
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

/*
//funcion q valida que lo ingresado sea un numero mayor a 0 Y DE 4 CIFRAS
function validarSiEsNumero(numero){
  if ((/^\d{4}$/.test(numero)) && (/^([0-9])*$/.test(numero)))
  alert('numero correcto');
}
validarSiEsNumero();

//FUNCION QUE VALIDA QUE LO INGRESADO SEA >= 0
function validarSiEsNumero(numero){
  if (/^([0-9])*$/.test(numero))
  alert('numero correcto');
}
validarSiEsNumero();

// funcion que valida que el numero ingresado se de 4 digitos
function validarSiEsNumero(numero){
  if (/^\d{4}$/.test(numero)) 
  alert('numero correcto');
}
validarSiEsNumero();

//funcion que valida que sea un numero
function validar(numero) {
  !isNaN(numero)
  alert('es un numero')
}

//chequea que no haya espacios en blanco/chequear
function espacioBlanco(numero)
if(/^\s+$/.test(numero)) {
  alert('no puede haber un espacio en blanco')
}

//validar claves

function validar_clave(claveIngreso) {
      contrasena.length === 4;
}

function contraseña(contraseña)
var codigoInicio = parseInt(contraseña); 
*/