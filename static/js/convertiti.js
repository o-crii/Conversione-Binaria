function AssNumero() {
  let Num = document.getElementById("Num").value;
  let bin = "";

  function convertiti(n) {
    if(n==0) {

      return bin;
    } else {

      bin = (n % 2) + bin;

      return convertiti((n-(n%2))/2);
    }
  }

  let NumConv = document.getElementById("NumConv");
  NumConv.innerHTML = "Il numero convertito in binario è: " + convertiti(Num);
}