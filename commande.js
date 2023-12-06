const commandes = [
    {
        commande:'000001',
        laboratoire:'Enval',
        date:'10/03/2023',
        Status:'En cours',
    },
    {
        commande:'000002',
        laboratoire:'Codeloccol',
        date:'12/03/2023',
        Status:'En cours',
    },
    {
        commande:'000003',
        laboratoire:'ANSI',
        date:'12/03/2023',
        Status:'Terminée',
    },
    {
        commande:'000004',
        laboratoire:'CIPMEN',
        date:'12/03/2023',
        Status:'En cours',
    },
    {
        commande:'000005',
        laboratoire:'ADU',
        date:'13/03/2023',
        Status:'Terminée',
    },
    {
        commande:'000006',
        laboratoire:'Codeloccol',
        date:'14/03/2023',
        Status:'En cours',
    },
    {
        commande:'000007',
        laboratoire:'Enval',
        date:'14/03/2023',
        Status:'En cours',
    },
    {
        commande:'000008',
        laboratoire:'ANSI',
        date:'16/03/2023',
        Status:'En cours',
    },
    {
        commande:'000009',
        laboratoire:'ADU',
        date:'17/03/2023',
        Status:'Terminée',
    },
    {
        commande:'000010',
        laboratoire:'Abdoul',
        date:'18/03/2023',
        Status:'En cours',
    },
];
const teblau = document.querySelector('.teblau');

commandes.forEach(elmt =>{
    teblau.innerHTML+=` <tr class="tableBas">
    <td>${elmt.commande}</td>
    <td>${elmt.laboratoire}</td>
    <td>${elmt.date}</td>
    <td class="red">${elmt.Status}</td>
    <td class="td" style="width:20%;text-align: center;"><button>Voir</button></td>
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
 