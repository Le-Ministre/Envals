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

