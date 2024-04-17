// en un array introduce todas las denominaciones de los billetes
const denominations = [50000,20000,10000,5000, 2000, 1000];

// hace un prompt para que le aparezca al usuario cuanto dinero desea retirar
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}

// la funcion calculateBilletsNeeded toma el parametro amount que representa la cantidad de dinero para la cual se debe calcular los billetes necesarios
// se utliza el .map  en el array "denominations" para iterar las denominaciones de los billetes y calcule cuantos billetes de cada deninacion son necesarios para el monto proporcionado}
//Dentro de la función de mapeo "denomination"   primero se calcula billetsNeeded, que es la cantidad de billetes necesarios para la denominación actual
//Se hace dividiendo la cantidad total (amount) por la denominación actual y redondeando hacia abajo con Math.floor(). Esto nos da el número máximo de billetes de esa denominación que pueden ser utilizados sin exceder la cantidad total.
//Luegose actualiza la variable amount restando el total de la cantidad de billetes necesarios multiplicado por la denominación actual para calcula cuanto dinero queda
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}

// la funcion isValidWithdrawalAmoun toma el parametro amount que es la cantidad de dinero que se desea retirar
// amount > 0 verifuca si la cantidad es mayor a cero ya que no se puede retirar un valor que no sea positivo 
// amount % 1 === 0 es para verificar si la cantidad es un numero entero ya que no se puede retirar decimales
// si estas dos condiciones son true entonces el retiro se puede realizar
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}

//la funcion es para obtener la cantidad que se desea retirar
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();


  // este if se utliza para verificar si la cantidad de retiro obtenida en el paso anterior es valida
  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  // calcula la cantidad de billetes necesarios para la cantidad de retiro que ya se definio anteriormente
  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  //  Esto muestra un mensaje de alerta al usuario indicando la cantidad que está tratando de retirar del cajero automático
  // Dentro del bucle forEach, se verifica si la cantidad de billetes necesarios para la denominación actual (billetsNeeded[index]) es mayor que cero. Si lo es, significa que se necesitan billetes de esa denominación para completar el retiro
  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction();