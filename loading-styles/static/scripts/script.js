$(document).ready(function(){
 let spanCount = $(".loading").attr("ld-items");
 let spanDimension = $(".loading").attr("ld-width");
 let spanMargin = $(".loading").attr("ld-margin");
 let spanDelay = $(".loading").attr("ld-delay-in-seconds");
 let loadingStyle = $(".loading").attr("ld-loading-style");
 let borderWidth = $(".loading").attr("ld-border-width");

 let displayTime = spanDelay * 1000;
 var _html="";
 if($(".loading").empty()){
  for(var s=0; s < spanCount; s++){
   let _opacity = s+1;
   _opacity = _opacity/spanCount;
   _opacity =  1.25 - _opacity;
   if(loadingStyle === "dashed"){
    if(!borderWidth){
      borderWidth = "5px";
    }
_html += "<span class='dashed' style='width:"+spanDimension+"px; height:"+borderWidth+"px; margin-right:"+spanMargin+"px; opacity:"+_opacity+"; border-radius:0%'></span>";
   }else{
    borderWidth = "50";
   _html += "<span style='width:"+spanDimension+"px; height:"+spanDimension+"px; margin-right:"+spanMargin+"px; opacity:"+_opacity+"; border-radius:"+borderWidth+"%'></span>";
  }
}
  $(".loading").css("height",spanDimension+"px").html(_html);
 $(".loading").width($(".loading span").outerWidth(true) * spanCount)
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
