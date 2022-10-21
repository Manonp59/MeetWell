let user1={
    identifiant:"manon-platteau@orange.fr",
    mdp:"Milo-59"
}

const myForm = document.querySelector("#myForm");
const identifiantInput = document.querySelector("#identifiant");
const mdpInput = document.querySelector("#mdp");
const msg = document.querySelector("#msg");
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) { 
    console.log(e);
    e.preventDefault(); 
    if (identifiantInput.value === "" || mdpInput.value === "") { 
        msg.classList.add("error");
        msg.innerHTML = "Merci de compléter tous les champs"; 
        setTimeout(() => { 
        msg.classList.remove("error");
        msg.innerHTML = ""; 
        }, 5000);
    }else if (identifiantInput.value==user1.identifiant && mdpInput.value==user1.mdp){
        window.location.href="./accueilprofil.html"
    }

    else{
        msg.classList.add("error");
        msg.innerHTML="Identifiant ou mot de passe erroné"
    }}
