document.addEventListener("DOMContentLoaded", function() {
    var num;  //chiffre aléatoire entre 1 et 100
    var nbtest; //nombre d'essais
    var q; //div

    var rep = "";
    var repOK = "Gagné";
    var repPetit = "Trop Petit ";
    var repGrand = "Trop Grand ";

    window.onload = function(){
        init();
    }
    
    function init(){
        //definit q
        q = document.getElementById('message');
        lancer();
    }

    function lancer(){
        q.innerHTML = rep;
        document.getElementById("valider").disabled = false; 
        document.getElementById("rejouer").disable = true;
        nbtest = 0;
        num = Math.floor(Math.random() * (100 - 1)) + 1;
    }

    function test()  {
        var rep = document.getElementById("input").value;
        if (nbtest < 6) { // Limite de 6
            if (isNaN(rep) || rep === "") {
                q.innerHTML = '<span style="color:grey">'+"rentrez un chiffre et non du texte ou autre..."+'</span>';
            }
            else {
                nbtest++;
                if (rep == num){
                    //win
                    q.innerHTML = '<span style="color:green">'+repOK+'</span>';
                    findepartie();
                }
                else if (rep < num){
                    q.innerHTML = '<span style="color:blue">'+repPetit+'</span>';
                }
                else {
                    q.innerHTML = '<span style="color:blue">'+repGrand+'</span>';
                }
                q.innerHTML += "[" + nbtest.toString() + "]";
            }
        }
        else {
            //lose
            q.innerHTML = '<span style="color:red">'+"Vous avez utilisé toutes vos tentatives. Le nombre à deviner était " + num + "."+'</span>';;
            findepartie();
        }
    }

    function findepartie(){
        document.getElementById("valider").disabled = true; 
        document.getElementById("rejouer").disable = false;
    }

    const val = document.getElementById("valider");
    val.addEventListener('click', test);

    const rej = document.getElementById("rejouer");
    rej.addEventListener('click', lancer);
});
