document.addEventListener('DOMContentLoaded', function(){

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
