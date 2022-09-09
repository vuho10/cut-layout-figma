var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 6,
  // freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// ------------------- quantity add to cart
function plus() {
  var qty = document.getElementById("qty-input").value;
  document.getElementById('qty-input').value = parseInt(qty) + 1;
}

function minus() {
  var qty = document.getElementById("qty-input").value;
  if (parseInt(qty) > 1)
    document.getElementById('qty-input').value = parseInt(qty) - 1;
}  


// ----tabs
function openTab(evt, tabName) {
  var i, tab, tablinks;
  tab = document.getElementsByClassName("tab");
 
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", " ");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

 
}
document.getElementById("defaultOpen").click();




