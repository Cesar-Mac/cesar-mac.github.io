const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


// PRODUCTOS CARD
const productos = document.querySelectorAll('.product');
const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalImage = document.getElementById('modal-image');
const modalImage2 = document.getElementById('modal-image2');
const modalImage3 = document.getElementById('modal-image3');
const modalImage4 = document.getElementById('modal-image4');
const modalInfo = document.getElementById('modal-info');
const modalPrice = document.getElementById('modal-price');
const close = document.getElementsByClassName("close")[0];

productos.forEach(product => {
  product.addEventListener('click', () => {
    modalName.textContent = product.dataset.name;
    modalImage.src = product.dataset.image;
    modalImage2.src = product.dataset.image2;
    modalImage3.src = product.dataset.image3;
    modalImage4.src = product.dataset.image4;
    modalImage.alt = product.dataset.name;
    modalInfo.textContent = product.dataset.inform;
    modalPrice.textContent = `Tiene un costo de: $${product.dataset.price}`;
    modal.style.display = "block";
  });
});

close.addEventListener('click', () => {
  modal.style.display = "none";
});



const link = document.getElementById('link');
const cardss = document.getElementById('cardss');

link.addEventListener('click', function(e) {
  e.preventDefault();
  cardss.style.display = 'block';
});

close.addEventListener('click', function() {
  cardss.style.display = 'none';
});



// Card contacto
function showCard() {
  document.getElementById("cards").style.display = "block";
}
function hideCard() {
  document.getElementById("cards").style.display = "none";
}


