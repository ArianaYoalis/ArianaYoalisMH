// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "A little reckless around the edges", time: 9 },
  { text: "Call it young, dumb love and it's just enough", time: 9.2},
  { text: "Keep me guessing (keep me guessing)", time: 11 },
  { text: "How the story unfolds with you (you)", time: 13 },
  { text: "When I'm walking into the darkness", time: 19 },
  { text: "I know you'll be right there, lighting up the flares", time: 21 },
  { text: "When it's starless, I will follow you to the moon (moon, ayy)", time: 23 },
  { text: "No, we'll never fall apart (never fall apart)", time: 30 },
  { text: "Even million miles apart (million miles apart)", time: 33 },
  { text: "We were lightning from the start (lightning from the start)", time: 36 },
  { text: "And it keeps me going to know that", time: 38 },
  { text: "Ooh, no matter what, you got me", time: 40 },
  { text: "I got you and I wouldn't want it any other way", time: 42 },
  { text: "Ooh, no drop of doubt, I know deep down tha", time: 53 },
  { text: "We'll make it through (it through)", time: 55 },
  { text: "Just like we always do", time: 58 },
  { text: "Ayy, every second, every minute", time: 68 },
  { text: "Want you close to me like you're supposed to be", time: 70 },
  { text: "Ain't no limit (ain't no limit)", time: 74 },
  { text: "To what I would do for you, oh, oh", time: 77 },
  { text: "And you know, you turn my whole world upside down", time: 80 },
  { text: "Catch me before I ever hit the ground", time: 84 },
  { text: "And I'd do the same for you, oh, whoa", time: 87 },
  { text: "No, we'll never fall apart (never fall apart)", time: 91 },
  { text: "Even million miles apart (million miles apart)", time: 93 },
  { text: "We were lightning from the start (lightning from the start)", time: 96 },
  { text: "And it keeps me going to know that", time: 99 },
  { text: "Ooh, no matter what, you got me", time: 103 },
  { text: "I got you and I wouldn't want it any other way", time: 105 },
  { text: "Ooh, no drop of doubt, I know deep down that", time: 112 },
  { text: "We'll make it through (make it through)", time: 116 },
  { text: "Just like we always do", time: 119 },
  { text: "Do-do-do, do-do, do-do, do, do", time: 124 },
  { text: "Do-do-do, do-do, do-do, do, do", time: 127 },
  { text: "Do-do-do, do-do, do-do, do, do, oh-oh", time: 130 },
  { text: "Ooh, no matter what, you got me", time: 134.5 },
  { text: "I got you and I wouldn't want it any other way", time: 137 },
  { text: "Ooh, no drop of doubt, I know deep down that", time: 145 },
  { text: "We'll make it through (through)", time: 148 },
  { text: "Just like we always do", time: 151 },
  { text: "Do-do-do, do-do, do-do, do, do (that we do)", time: 155 },
  { text: "Do-do-do, do-do, do-do, do, do (we do)", time: 158 },
  { text: "Do-do-do, do-do, do-do, do, do", time: 161 },
  { text: "Just like we always do", time: 164 },
  { text: "TE AMO MUCHO AMOR. ", time: 170 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 190 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 190 segundos (190,000 milisegundos)
setTimeout(ocultarTitulo, 190000);