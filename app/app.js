function cambiarNumeros() {
   // Recorrer cada iframe
   for (let i = 1; i <= 4; i++) {

      var number = document.querySelector(".number.n" + i);

      // Obtener el iframe por su ID
      var iframe = document.getElementById("land" + i);
      // Generar un número aleatorio entre 1 y 5000
      var randomNumber = generarNumeroAleatorio(1, 5000);
      // Construir la nueva URL con el número aleatorio
      var newUrl = "https://play.pixels.xyz/pixels/share/" + randomNumber;
      // Actualizar la URL del iframe
      iframe.src = newUrl;

      // coloco el numero de la land
      number.textContent = randomNumber;
   }
}

function generarNumeroAleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}