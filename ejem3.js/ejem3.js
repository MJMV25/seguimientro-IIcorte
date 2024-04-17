// se declara las constantes 
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

// se utiliza el método map en el array sala1. Este método itera sobre cada elemento del array y devuelve un nuevo array con los resultados de la función proporcionada. En este caso, la función proporcionada toma dos parámetros: asiento, que representa el estado del asiento (si está ocupado o no), y i, que representa el índice del asiento
//El resultado de map es un array de cadenas que representan el estado de cada asiento en la Sala 1. Este array se convierte en una sola cadena usando join("\n"), que separa cada elemento del array con un salto de línea
//e repite el mismo proceso para la Sala 2, mostrando primero un mensaje de alerta indicando que se mostrará la disponibilidad de la Sala 2, luego se utiliza el método map en el array sala2 para generar una cadena de estado de asientos, y finalmente se muestra esa cadena en un mensaje de alerta
function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

// se hace un pormpt para poder elegir la sala y un paseInt para elegir el asiento
function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}

// Se verifica si hay asientos libres en la sala seleccionada (asientosLibres.length > 0). Si hay asientos libres, se muestra un mensaje de alerta indicando cuántos asientos libres hay en esa sala y otro mensaje de alerta que informa que disfruten de la película.
function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}


// const opcion = prompt("Ingresa tu opción: ...");: Esto solicita al usuario que ingrese una opción mediante un cuadro de diálogo y guarda la opción ingresada en la variable opcion
// switch (opcion) { ... }: Se utiliza una estructura de control switch para ejecutar diferentes bloques de código dependiendo del valor de opcion
// default: Si el usuario ingresa cualquier otra opción que no sea "1", "2", "3" o "4", se muestra un mensaje de alerta indicando "Opción no válida. Intenta de nuevo.".
while (true) {
  console.log("hola")
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      alert("¡Hasta luego!");
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}