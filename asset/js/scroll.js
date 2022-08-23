//Scroll down
window.onscroll = function (){
    if ( document.documentElement.scrollTop > 80){
      document.getElementById('header-scroll').className = 'header';
    }else {
      document.getElementById('header-scroll').className = "";
    }
  }