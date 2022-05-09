const navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
};

const cartItem = document.querySelector('.wadah-kontak');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

// ---------- PopUp Modal ----------
const bukaPopUp = document.querySelectorAll('#bukaPopUp');
for (let i=0; i<bukaPopUp.length; i++) {
    bukaPopUp[i].addEventListener('click', function (argmnt) {
        argmnt.target.nextElementSibling.style.display = 'block';
    });
};

const tutupPopUp = document.querySelectorAll('.close-btn, #tutupX');
for (let i=0; i<tutupPopUp.length; i++) {
    tutupPopUp[i].addEventListener('click', function (argmnt) {
        argmnt.target.parentElement.style.display = 'none';
    });
};

// ---------- animasi scroll ----------
window.addEventListener("scroll", function () {
  let itemAnimasi = document.querySelectorAll(".itemAnimasi");
  for (let i = 0; i < itemAnimasi.length; i++) {
    let tinggiLayar = window.innerHeight;
    let jarakAtasElemen = itemAnimasi[i].getBoundingClientRect().top;
    let ukuranScroll = 0;
    if (jarakAtasElemen < tinggiLayar - ukuranScroll){
        itemAnimasi[i].classList.add("tampil");
    }
    // else{
    //     itemAnimasi[i].classList.remove("tampil");
    // }
  }
});

// ---------- Langganan Email ----------
const form = document.getElementById("my-form");
async function handleSubmit(event){
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Sukses terkirim!');
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Terjadi kesalahan!"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "waduh!"
  });
}
form.addEventListener("submit", handleSubmit);