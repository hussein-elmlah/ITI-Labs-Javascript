var botn = document.getElementById("botn");
var sora = document.getElementById("sora");
var inpot = document.getElementById("inpot");

function checkthepass() {
  var answer = inpot.value;

  if (answer == "12345") {
    sora.classList.remove("myimg");
    sora.style.display = "block";
    sora2.style.display = "none";
  } else {
    alert("wrong password");
  }
}
