let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

 // aos
 AOS.init();


 // langganan email
// ---------- Langganan Email ----------
const form = document.getElementById("my-form");
var loaderSubEmail = document.querySelector('.loader');
loaderSubEmail.style.display = 'none';

async function handleSubmit(event){
  event.preventDefault();  
  loaderSubEmail.style.display = 'block';
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Sukses! Tunggu email balasan dari kami!');
      loaderSubEmail.style.display = 'none';
      form.reset();
    }
  })
  .catch(error => {
    alert('Gagal! Pastikan data yang Anda masukkan sudah benar!');
    loaderSubEmail.style.display = 'none';
    form.reset();
  });
}
form.addEventListener("submit", handleSubmit);
 
