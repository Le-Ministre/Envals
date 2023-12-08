const pote = document.querySelector('.pote');



const storedImageUrl =JSON.parse(localStorage.getItem('profilImage')) ;
if (storedImageUrl) {
    pote.src = storedImageUrl;
}