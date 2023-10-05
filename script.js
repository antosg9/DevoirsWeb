window.onload = (event) => {
  var repPasOk = "Donnée incorrecte !";
  var repHorsBornes = "Nombre hors bornes !";
  var repPetit = "Trop petit !";
  var repGrand = "Trop grand !";
  var repOk = "Bingo ! Vous avez gagné !";

  let luckyNumber = Math.floor(Math.random() * (100 - 1)) + 1;;
  let heartNumber = 5;

  const val = document.getElementById("valider");
  val.addEventListener("click", checkValue);

  mess = document.getElementById("message");

  function checkValue() {
    if (heartNumber != 0) {
      var playerValue = document.getElementById("input").value;
      if (isNaN(playerValue) || playerValue == "") {
        mess.innerHTML = '<span style="color:grey">' + repPasOk;
      } else if (playerValue <= 0 || playerValue >= 100) {
        mess.innerHTML = '<span style="color:grey">' + repHorsBornes;
      } else if (playerValue < luckyNumber) {
        mess.innerHTML = '<span style="color:blue">' + repPetit;
      } else if (playerValue > luckyNumber) {
        mess.innerHTML = '<span style="color:blue">' + repGrand;
      } else {
        mess.innerHTML = '<span style="color:green">' + repOk;
        return 1;
      }
      heartNumber--;

      if (heartNumber == 0) {
        mess.innerHTML =
          '<span style="color:red">' +
          "Vous avez perdu ! Le nombre était " + luckyNumber+" ! "+
          "<br>" +
          "Vous avez " +
          heartNumber +
          " coeurs.";
        return 0;
      } else {
        mess.innerHTML += "<br>" + "Vous avez " + heartNumber + " coeurs.";
      }
    }
  }
};
