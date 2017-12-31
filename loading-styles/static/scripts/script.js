$(document).ready(function(){
 let spanCount = $(".loading").attr("ld-items");
 let spanWidth = $(".loading").attr("ld-width");
 let spanMargin = $(".loading").attr("ld-margin");
 let spanDelay = $(".loading").attr("ld-delay-in-seconds");
 let displayTime = spanDelay * 1000;
 var _html="";
 if($(".loading").empty()){
  for(var s=0; s < spanCount; s++){
   let _opacity = s+1;
   _opacity = _opacity/spanCount;
   _opacity =  1.25 - _opacity;
   console.log(_opacity);
   _html += "<span style='width:"+spanWidth+"px; height:"+spanWidth+"px; margin-right:"+spanMargin+"px; opacity:"+_opacity+"'></span>";
  }
  $(".loading").html(_html);
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
