window.onload = (event) => {
  let luckyNumber = 27;
  let heartNumber = 5;

  const val = document.getElementById("valider");
  val.addEventListener("click", checkValue);

  function checkValue() {
    if (heartNumber != 0) {
      var playerValue = document.getElementById("input").value;
      if (isNaN(playerValue) || playerValue == "") {
        console.log("Donnée incorrecte !");
      } else if (playerValue <= 0 || playerValue >= 100) {
        console.log("Nombre hors bornes !");
      } else if (playerValue < luckyNumber) {
        console.log("Trop petit !");
      } else if (playerValue > luckyNumber) {
        console.log("Trop grand !");
      } else {
        console.log("Bingo ! Vous avez gagné !");
        return 1;
      }
      heartNumber--;
      if (heartNumber == 0) {
        console.log("Vous n'avez plus de coeur !\nVous avez perdu !");
        return 0;
      }
      else
      {
        console.log("Vous avez ", heartNumber, " coeurs.");
      }
    }
  }
};
