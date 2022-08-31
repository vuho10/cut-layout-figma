var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 7,
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
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("city");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// ------------ tabs slide
function openSlide(evt, sl) {
  var i, tabcontent, tabslide;
  tabcontent = document.getElementsByClassName("");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tabslide = document.getElementsByClassName("tabslide");
  for (i = 0; i < tabslide.length; i++) {
    tabslide[i].className = tabslide[i].className.replace(" ac", "");
  }
  document.getElementById(sl).style.display = "block";
  evt.currentTarget.className += " ac";
}
// ------------------- quantity add to cart
function plus() {
  var qty = document.getElementById("qty-input").value;
  document.getElementById('qty-input').value =parseInt(qty)+1;
}    

function minus() {
  var qty = document.getElementById("qty-input").value;
  if(parseInt(qty)>1)
  document.getElementById('qty-input').value =parseInt(qty)-1;
}  