function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  }
  function temperatureConverter1(val1Num) {
    val1Num = parseFloat(val1Num);
    document.getElementById("outputFahrenheit").innerHTML=(val1Num*1.8)+32;
  }