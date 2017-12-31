$(document).ready(function(){
  function loadingSpan(){
   // $(".loading span").each(function(){
   //  if($(this).hasClass("active")){
   //   $(this).removeClass("active");
   //   $(this).next().addClass("active");
   //  }
   // })
   let countSpan = $(".loading span").length;
   for(var i = 0; i < countSpan; i++){
    $(".loading span:eq("+i+")").html(i)
   }
  }
  setInterval(loadingSpan, 3000)
})
