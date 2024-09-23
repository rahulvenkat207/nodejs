var x = 0, y = 0, z = 0;

function displayValues() {
  console.log("X=%d; Y=%d; Z=%d", x, y, z);
}

function updateX() {
  x += 1;
}

function updateY() {
  y += 1;
}

function updateZ() {
  z += 1;
  displayValues();
}

setInterval(updateX, 500);  // Updates x every 500ms
setInterval(updateY, 1000); // Updates y every 1000ms
setInterval(updateZ, 2000); // Updates z every 2000ms and displays values
