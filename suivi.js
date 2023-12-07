const suivis = [
    {
        Lot:'TE2023001',
        Etat:'Reçu',
        datePrevue:'12/03/2023',
        Rapport:'Disponible',
    },
    {
        Lot:'E202302023',
        Etat:'Non Reçu',
        datePrevue:'12/03/2023',
        Rapport:'Non Disponible',
    },
    {
        Lot:'TE20230190',
        Etat:'Reçu',
        datePrevue:'14/03/2023',
        Rapport:'Non Disponible',
    },
    {
        Lot:'Carbonate',
        Etat:'Reçu',
        datePrevue:'14/03/2023',
        Rapport:'Disponible',
    },
    {
        Lot:'Chlorure',
        Etat:'Non Reçu',
        datePrevue:'15/03/2023',
        Rapport:'Non Disponible',
    },
    {
        Lot:'CO2 libre',
        Etat:'Reçu',
        datePrevue:'15/03/2023',
        Rapport:'Disponible',
    },
    {
        Lot:'Conductivité electrique',
        Etat:'Non Reçu',
        datePrevue:'15/03/2023',
        Rapport:'Non Disponible',
    },
    {
        Lot:'PH/Temperature',
        Etat:'Reçu',
        datePrevue:'16/03/2023',
        Rapport:'Disponible',
    },
    {
        Lot:'Couleur Brute',
        Etat:'Reçu',
        datePrevue:'17/03/2023',
        Rapport:'Non Disponible',
    },
    {
        Lot:'Cyanure libre',
        Etat:'Reçu',
        datePrevue:'20/03/2023',
        Rapport:'Disponible',
    },
];
const suitable = document.querySelector('.suitable');

suivis.forEach(elemte =>{
    suitable.innerHTML+=` <tr class="tableBas">
    <td>${elemte.Lot}</td>
    <td>${elemte.Etat}</td>
    <td >${elemte.datePrevue}</td>
    <td>${elemte.Rapport}</td>
    <td class="td"><a href="suividetail.html"><button>Voir</button></a></td>
    </tr>
    `
});


const compare = (ids, asc) => (row1, row2) => {
    const tdValue = (row, ids) => row.children[ids].textContent;
    const tri = (v1, v2) => v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
    return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
  };
  
  const tbody = document.querySelector('tbody');
  const thx = document.querySelectorAll('.voir');
  const trxb = tbody.querySelectorAll('.tableBas');
  thx.forEach(voir => voir.addEventListener('click', () => {
    console.log(this.asc);
    let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(voir), !this.asc));
    this.asc = !this.asc
    classe.forEach(tr => tbody.appendChild(tr));
  }));





  const inputRecherche = document.querySelector('#search');

  const recherche = (nom) =>{
    suitable.innerHTML=''
    suivis.forEach((element) =>{
       if (element.Lot.toLowerCase().includes(nom)) {
        suitable.innerHTML+=` <tr class="tableBas">
        <td>${element.Lot}</td>
        <td>${element.Etat}</td>
        <td >${element.datePrevue}</td>
        <td>${element.Rapport}</td>
        <td class="td"><a href="suividetail.html"><button>Voir</button></a></td>
        </tr>
        `
       } if (suitable.innerHTML==='') {
        suitable.innerHTML+=`
          <tr class="tableBas">
          <td class="aucun" colspan="5">Aucun Resulta trouvé </td>
         </tr>
       `
       }
      
    })
  }
  
  inputRecherche.addEventListener('input', ()=>{
    let toRecherche = inputRecherche.value.toLowerCase()
    recherche(toRecherche);
  });
 