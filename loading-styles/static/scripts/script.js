$(document).ready(function(){
 let spanCount = $(".loading").attr("ld-items");
 let spanWidth = $(".loading").attr("ld-width");
 let spanMargin = $(".loading").attr("ld-margin");
 let spanDelay = $(".loading").attr("ld-delay-in-seconds");
 let displayTime = spanDelay * 1000;
 var _html="";
 if($(".loading").empty()){
  for(var s=0; s < spanCount; s++){
   _html += "<span style='width:"+spanWidth+"px; height:"+spanWidth+"px; margin-right:"+spanMargin+"px;'></span>";
  }
  $(".loading").html(_html);
  console.log($(".loading").innerWidth());
 }
  function loadingSpan(){
   let spanItem = $(".loading span.active");
   spanItem.removeClass("active");
   spanItem.next().addClass('active');
   if(spanItem.next().length == 0){
   $('.loading span').first().addClass('active');
 }

  }
  setInterval(loadingSpan, displayTime)
})
