// se declara las constantes: habitaciones, reservacion
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];
const roomStatus = Array(10).fill(false);
const roomReservations = {};

// se crea una funcion flecha que contienen los parametros roomNumbrer y name
// const index = rooms.indexOf(roomNumber);: Esta línea busca el índice de la habitación roomNumber dentro del array rooms. Supongo que rooms es un array que contiene los números de todas las habitaciones disponibles en el hotel.
// if (index !== -1 && roomStatus[index] === false): Esta condición verifica si la habitación roomNumber existe en el array rooms (es decir, si index no es igual a -1) y si su estado (roomStatus[index]) es false, lo que significa que la habitación está disponible para reservar.
const reserveRoom = (roomNumber, name) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === false) {
    roomStatus[index] = true;
    roomReservations[roomNumber] = name;
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`);
  }
};


// se crea una funcion la cual su parametro es roomNumber
// if (index !== -1 && roomStatus[index] === false) : Esta condición verifica si la habitación roomNumber existe en el array rooms (es decir, si index no es igual a -1) y si su estado (roomStatus[index]) es false, lo que significa que la habitación está disponible para reservar.
const freeRoom = (roomNumber) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === true) {
    roomStatus[index] = false;
    delete roomReservations[roomNumber];
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
};

// el filter hace un recorrido en el array para ver cuales son las habitaciones disponibles
const showAvailableRooms = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  // en el if dice que si las habitaciones disponibles son mayores a cero si sí, se imprime la habitacion disponible si no, no hay habitaciones disponibles
  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');
  }
};

// const availableRooms = rooms.filter((room, index) => { ... });: Utiliza el método filter() para crear un nuevo arreglo llamado availableRooms. Este arreglo contiene las habitaciones disponibles. Se filtran las habitaciones basadas en el estado almacenado en roomStatus
// const reservedRooms = rooms.filter((room, index) => { ... });: Similar al paso anterior, esto crea un nuevo arreglo llamado reservedRooms, que contiene las habitaciones reservadas
//
const showOccupancy = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true;
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};


// se hace un prompt para mostar el menu en el que estan las opciones de reservar, liberar y consultar ocupacion
const handleUserInput = () => {
  let userInput;
  do {
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

  // se hace un swicheo para ingresar los datos
    switch (userInput) {
      case '1':
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;

        //se hace un swicheo para liberar la habitacion
      case '2':
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '3':
        showOccupancy();
        break;
      case '4':
        alert('Saliendo...');
        break;
      default:
        alert('Opción inválida. Intente de nuevo.');
        break;
    }
  } while (userInput !== '4');
};

// Ejecutar la función para manejar la interacción con el usuario
handleUserInput();