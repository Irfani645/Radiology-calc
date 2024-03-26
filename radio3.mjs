function calculateVolume() {
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
      var volume = length * width * height;
      document.getElementById('result').innerHTML = "Volume: " + volume.toFixed(2) + " cm³";
    } else {
      document.getElementById('result').innerHTML = "Please enter valid dimensions.";
    }
  }
  