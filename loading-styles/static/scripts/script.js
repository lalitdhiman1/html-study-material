$(document).ready(function(){
  function loadingSpan(){
   $(".loading span").each(function(){
    if($(this).hasClass("active")){
     $(this).removeClass("active");
     $(this).next().addClass("active");
    }
   })
  }
  setInterval(loadingSpan, 3000)
})
