const factures = [
   {
    facture:'000001',
    laboratoire:'Enval',
    date:'10/03/2023',
   },
   {
    facture:'000002',
    laboratoire:'Biochimie',
    date:'10/03/2023',
   },
   {
    facture:'000003',
    laboratoire:'Biochimie',
    date:'11/03/2023',
   },
   {
    facture:'000004',
    laboratoire:'Biologie',
    date:'12/03/2023',
   },
   {
    facture:'000005',
    laboratoire:'Enval',
    date:'12/03/2023',
   },
   {
    facture:'000006',
    laboratoire:'Biochimie',
    date:'12/03/2023',
   },
   {
    facture:'000007',
    laboratoire:'Enval',
    date:'13/03/2023',
   },
   {
    facture:'000008',
    laboratoire:'Géologie',
    date:'13/03/2023',
   },
   {
    facture:'000009',
    laboratoire:'Enval',
    date:'13/03/2023',
   },
];

const voirTable = document.querySelector('.voirTable');


factures.forEach(elet => {
   voirTable.innerHTML+=`
      <tr class="tableBas">
      <td >${elet.facture}</td>
      <td>${elet.laboratoire}</td>
      <td>${elet.date}</td>
      <td class="td"   style="width:20%;text-align: center;"><button >Voir</button></td>
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
   voirTable.innerHTML=''
   factures.forEach((element) =>{
      if (element.laboratoire.toLowerCase().includes(nom)) {
         voirTable.innerHTML+=`
         <tr class="tableBas">
         <td >${element.facture}</td>
         <td>${element.laboratoire}</td>
         <td>${element.date}</td>
         <td class="td"   style="width:20%;text-align: center;"><button >Voir</button></td>
        </tr>
      `
      } if (voirTable.innerHTML==='') {
         voirTable.innerHTML+=`
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

 /* input de recherche  code */
 // Variables

/* let inputRecherche = document.querySelector('.inputRecherche');
let tableau = document.querySelector('.tableau');
let trs = tableau.querySelectorAll('tr');

// Événement de saisie de l'input de recherche

inputRecherche.addEventListener('input', (e) => {
  // On récupère la valeur saisie dans l'input

  let valeurRecherche = e.target.value;

  // On parcourt le tableau

  factures.forEach((tr) => {
    // On récupère le nom de l'utilisateur dans la ligne courante

    let nom = tr.querySelector('td:first-child').textContent;

    // On compare le nom saisi avec le nom de l'utilisateur

    if (nom.toLowerCase().includes(valeurRecherche.toLowerCase())) {
      // On affiche la ligne courante

      tr.style.display = 'table-row';
    } else {
      // On cache la ligne courante

      tr.style.display = 'none';
    }
  });
});
 */

