

const ScrollNav = () => {
  var x = document.getElementById('headerScroll');
  if (document.documentElement.scrollTop > 70) {
    x.classList.add("scroll");
   
  }
  else {
    x.classList.remove("scroll")
  }
}

window.addEventListener('scroll', ScrollNav);

// navbar
hamburger = document.querySelector(".header-hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".header-navbar")
  navBar.classList.toggle("header-navbar-link")
};

// slider
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 6,
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


// link mes
function linkMes() {
  const messeger = window.open("https://www.messenger.com/", "https://www.messenger.com/", "width=400,height=400");
  messeger.focus();
}

// link fb
function linkFB() {
  const facebook = window.open("https://www.facebook.com/", "https://www.facebook.com/", "width=400,height=400");
  facebook.focus();
}

// link in
function linkIn() {
  const linkin = window.open("https://www.linkedin.com/", "https://www.linkedin.com/", "width=400,height=400");
  linkin.focus();
}

// link instargram
function linkInstagram() {
  const instagram = window.open("https://www.instagram.com/", "https://www.instagram.com/", "width=400,height=400");
  instagram.focus();
}

// check quantity
const checkQty = () => {
  var x = document.getElementById("qty-input").value;
  if (x > 2) {
    document.getElementById('modal').style.display = "flex"
  }

}

const closeModal = () => {
  document.getElementById("modal").style.display = "none";
}
