var countdownInterval;
var secondsRemaining;

function startCountdown() {
  secondsRemaining = parseInt(document.getElementById('secondsInput').value, 10) || 0;

  if (secondsRemaining > 0) {
    countdownInterval = setInterval(function () {
      document.getElementById('output').innerHTML = secondsRemaining + ' secondi rimanenti';
      secondsRemaining--;

      if (secondsRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('output').innerHTML = 'Countdown completato!';
      }
    }, 1000);
  }
}

function pauseCountdown() {
     {
        clearInterval(countdownInterval);
        document.getElementById('output').innerHTML = 'Countdown in pausa!';
      }
}

function resetCountdown() {
    {
        clearInterval(countdownInterval);
        document.getElementById('output').innerHTML = 'Reset CountDown!';
      }
}


