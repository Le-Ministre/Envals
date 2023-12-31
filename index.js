// Variables

let email = document.querySelector('.inp1');
let password = document.querySelector('.inp2');
let btnConnexion = document.querySelector('.btn');
let connexion = document.querySelector('.connexion');
let connect = document.querySelector('.connect');
let combine = document.querySelector('.combine');
let numberTex = 0;
let countdwn = 60;

// Données des utilisateurs

const utilisateurs = [
  {
    nom: 'abdoul',
    password: '12345678',
  },
  {
    nom: 'mohamed',
    password: '987654321',
  },
  {
    nom: 'fatoumata',
    password: 'azerty123',
  },
];

// Fonction addZero

const addZero = (x) => {
  if (x >= 0 && x <= 9) {
    return '0' + x
  } else {
    return x
  }
}

// Événement de clic btnConnexion

btnConnexion.addEventListener('click', (e) => {
  e.preventDefault();

  // Recherche de l'utilisateur

  let utilisateurTrouve = utilisateurs.find((utilisateur) => {
    return utilisateur.nom === email.value && utilisateur.password === password.value
  });

  // Connexion réussie

  if (utilisateurTrouve) {
    window.location.href = 'dashbord.html';
  } else {
    // Connexion échouée

    numberTex++;

    if (numberTex >= 3) {
      // Compte bloqué

      connexion.style.display = 'block';
      connect.textContent = 'Compte bloquer';
      combine.textContent = 'Votre compte est temporairement bloqué';
      email.disabled = true;
      password.disabled = true;
      btnConnexion.disabled = true;

      let secretQuestion = prompt('Quel est le surnom de Adam');

      if (secretQuestion === 'toula') {
        window.location.href = 'dashbord.html';
      } else {
        const timer = setInterval(() => {
          const minute = Math.floor(countdwn / 60);
          const second = countdwn % 60;
          connect.textContent = 'Temps avant deblocage';
          combine.textContent = `${addZero(minute)}:${addZero(second)}`;
          countdwn--;

          if (countdwn < 0) {
            clearInterval(timer);
            connect.textContent = 'Compte debloque';
            combine.textContent = '';
            connexion.style.display = 'none';
            email.disabled = false;
            password.disabled = false;
            btnConnexion.disabled = false;
            numberTex = 0;
          }
        }, 1000);
      }
    } else {
      // Affichage d'un message d'erreur

      connexion.style.display = 'block';
      setTimeout(() => {
        connexion.style.display = 'none'
      }, 2000);
    }
  }
});






/* 
let email = document.querySelector('.inp1');
let password = document.querySelector('.inp2');
let btnConnexion = document.querySelector('.btn');
let connexion = document.querySelector('.connexion');
let connect = document.querySelector('.connect');
let combine = document.querySelector('.combine');
let numberTex = 0;
let countdwn = 60;



let nom = 'abdoul';
let motDePass = '12345678';

 const addZero= (x)=>{
   if (x>=0 && x<=9) {
      return '0'+x
   } else{
      return x
   }
 }
btnConnexion.addEventListener('click', (e) =>{
   e.preventDefault();
   if (email.value === nom && password.value === motDePass) {
      window.location.href ='dashbord.html';
   } else{
      numberTex++
      if (numberTex >= 3) {
         connexion.style.display ='block';
         connect.textContent ='Compte bloquer';
         combine.textContent ='Votre compte est temporairement bloqué';
         email.disabled = true;
         password.disabled = true;
         btnConnexion.disabled =true;

         let secretQuestion = prompt('Quel est le surnom de Adam');

         if (secretQuestion === 'toula') {
            window.location.href = 'dashbord.html';
         } else{
            const timer = setInterval(() =>{
               const minute = Math.floor(countdwn / 60);
               const second = countdwn % 60;
               connect.textContent ='Temps avant deblocage';
               combine.textContent =`${addZero(minute)}:${addZero(second)}`;
               countdwn--

               if (countdwn < 0) {
                  clearInterval(timer);
                  connect.textContent ='Compte debloque';
                  combine.textContent ='';
                  connexion.style.display ='none';
                  email.disabled = false;
                  password.disabled =false;
                  btnConnexion.disabled =false;
                  numberTex =0;
               }
            },1000)
         };
      } else{
         connexion.style.display ='block';
         setTimeout(()=>{
            connexion.style.display ='none'
         },2000)
      }
   }
}) */