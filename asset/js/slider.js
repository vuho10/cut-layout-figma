var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 14,
  slidesPerView: 6,
  freeMode: true,
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

// ----tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// hover btn cart
function hoverBtn(evt, tabCart) {
  var i, tabHover, tabbtn;
  tabHover = document.getElementsByClassName("hoverB");
  for (i = 0; i < tabHover.length; i++) {
    tabHover[i].style.display = "none";
  }
  tabbtn = document.getElementsByClassName("tabbtn");
  for (i = 0; i < tablinks.length; i++) {
    tabbtn[i].className = tabbtn[i].className.replace(" backgr", "");
  }
  document.getElementById(tabCart).style.display = "block";
  evt.currentTarget.className += " active";
}


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