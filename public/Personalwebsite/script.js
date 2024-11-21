window.addEventListener('load', () => {
  const textOverlay = document.querySelector('.text-overlay');
  textOverlay.classList.add('fade-in');
});

function showTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('clock').textContent = timeString;

  requestAnimationFrame(showTime);
}

showTime();