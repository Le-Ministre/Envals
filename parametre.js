const petitePote = document.querySelector('.pote');
const goBack = document.querySelector('.goBack');
const btnVers1 = document.querySelector('.btnVers1');
const btnRed = document.querySelector('.btnRed');
const suijet1 = document.querySelector('.suijet1');
const suijet = document.querySelector('.suijet');
const letextarea = document.querySelector('#letextarea');
const but = document.querySelector('.but');
const grandPotes = document.querySelector('.potes');
const btnVers = document.querySelector('.btnVers');
const btnRed2 = document.querySelector('.btnRed2');
const tekFile = document.querySelector('.tekFile');
const divModifPassword = document.querySelector('.divModifPassword');
const ancienM = document.querySelector('#ancienM');
const nouveauM = document.querySelector('#nouveauM');
const confirmM = document.querySelector('#confirmM');
const envoiDelit = document.querySelector('.envoiDelit');
const notif = document.querySelector('.notif');
const Personnelles = document.querySelector('.Personnelles');
const effectuée = document.querySelector('.effectuée');

console.log(ancienM);

const storedImageUrl =JSON.parse(localStorage.getItem('profilImage')) ;
if (storedImageUrl) {
    grandPotes.src = storedImageUrl;
    petitePote.src = storedImageUrl;
}

btnVers.addEventListener('click', ()=>{
    tekFile.click(); 
    notif.style.display = 'block'
    Personnelles.textContent = 'Modification avatar';
    effectuée.textContent = 'Votre photo a été ajoutée avec success';

    setTimeout(() => {
        // Cache le message d'erreur
        notif.style.display = "none";
      }, 2000);
    
});
tekFile.addEventListener('change',()=>{
    const file = tekFile.files[0];
    grandPotes.src = URL.createObjectURL(file);
    petitePote.src = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.addEventListener('load',()=>{
        localStorage.setItem('profilImage',JSON.stringify(reader.result))
    })
    reader.readAsDataURL(file)
});
btnRed2.addEventListener('click', ()=>{
    grandPotes.src = 'avatar.jpg';
    petitePote.src = 'avatar.jpg';
    localStorage.removeItem('profilImage')

    notif.style.display = 'block'
    Personnelles.textContent = 'Suppression avatar';
    effectuée.textContent = 'Votre photo a été supprimée avec success';

    setTimeout(() => {
        // Cache le message d'erreur
        notif.style.display = "none";
      }, 2000);
});


let leNom = 'essai Moi';
let leMail = 'essaimoi@gmail.com';
let letextare = 'teste me';

but.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(but);
    if (suijet1.value === leNom && suijet.value === leMail) {
      notif.style.display = 'block'
      Personnelles.textContent = 'Données personnelles';
      effectuée.textContent = 'La mise à jour a été effectuée avec success';
     
        setTimeout(() => {
            // Cache le message d'erreur
            notif.style.display = "none";
          }, 2000);
    }
});

btnVers1.addEventListener('click', (e)=>{
    e.preventDefault();
    divModifPassword.style.display = 'block';
})



let ancientMot = '12345678';
let newMot = 'adamoune';
let confir = 'adamoune';

envoiDelit.addEventListener('click', (e) => {
  e.preventDefault();

  // Vérifiez si le mot de passe ancien est correct
  const ancienMotCorrect = ancienM.value === ancientMot;

  // Vérifiez si le nouveau mot de passe est correct
  const nouveauMotCorrect = nouveauM.value === newMot;

  // Vérifiez si la confirmation du mot de passe est correcte
  const confirmationMotCorrect = confirmM.value === confir;

  // Si tous les mots de passe sont corrects, modifiez le mot de passe
  if (ancienMotCorrect && nouveauMotCorrect && confirmationMotCorrect) {
    notif.style.display = 'block';
    Personnelles.textContent = 'Modification du mot de passe';
    effectuée.textContent = 'Mot de passe modifié avec succès';
   

    setTimeout(() => {
      divModifPassword.style.display = 'none';
      // Cache le message d'erreur
      notif.style.display = "none";
    }, 2000);
    
   
  } else {
    notif.style.display = 'block';
    Personnelles.textContent = 'Échec de confirmation';
    effectuée.textContent = 'Le nouveau et la confirmation du mot de passe doivent être identiques';

   
  }
  setTimeout(() => {
    // Cache le message d'erreur
    notif.style.display = "none";
  }, 2000);
});

  

btnRed.addEventListener('click', (e)=>{
    e.preventDefault();
    confirm('Voulez vous supprimez votre compte???');
});
