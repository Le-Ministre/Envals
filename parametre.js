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
const ancianM = document.querySelector('.ancianM');
const nouveauM = document.querySelector('.nouveauM');
const confirmM = document.querySelector('.confirmM');
const envoiDelit = document.querySelector('.envoiDelit');
const notif = document.querySelector('.notif');
const Personnelles = document.querySelector('.Personnelles');
const effectuée = document.querySelector('.effectuée');


const storedImageUrl =JSON.parse(localStorage.getItem('profilImage')) ;
if (storedImageUrl) {
    grandPotes.src = storedImageUrl;
    petitePote.src = storedImageUrl;
}

btnVers.addEventListener('click', ()=>{
    tekFile.click()
    notif.style.display = 'block'
    Personnelles.textContent = 'Modification avatar';
    effectuée.textContent = 'Votre photo a été ajoutée avec success';
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
});


let leNom = 'essai Moi';
let leMail = 'essaimoi@gmail.com';

but.addEventListener('click', (e)=>{
    e.preventDefault();
    if (suijet1.value === leNom && suijet.value === leMail) {
        notif.style.display = 'block'
        Personnelles.textContent = 'Données personnelles';
        effectuée.textContent = 'La mise à jour a été effectuée avec success';
    }
})





let ancientMot = '12345678';
let newMot = 'adamoune';
let confir = 'adamoune';

envoiDelit.addEventListener('click', (e)=>{
    e.preventDefault();
    if (ancianM.value === ancientMot && nouveauM.value === newMot && confirmM.value === confir) {
        notif.style.display = 'block'
        Personnelles.textContent = 'Modification du mot de passe';
        effectuée.textContent = 'Mot de passe modifié avec success';
        
    } else{
        notif.style.display = 'block'
        Personnelles.textContent = 'Echec de confirmation';
        effectuée.textContent = 'le new et la confir mot de passe doivent etre identique';
    }
});
btnRed.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Voulez vous supprimez votre compte???');
});