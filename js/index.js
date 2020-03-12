$(function(){
  /*SyntaxHighlighter.all();*/
 });
 $(document).ready(function(){
  $('.flexslider').flexslider({
   animation: "slide",
   start: function(slider){
    $('body').removeClass('loading');
   }
  });
 });

 let scrollOff=$("#lecture").offset().top;
 $(window).scroll(function(){
   let scrollTop=$(window).scrollTop();
   if(scrollTop>600)
   {
     $(".about-grid").addClass("opa");
   }
   if(scrollTop>800)
   {
     $(".service_grid").slideDown(2000);
   }
   if(scrollTop>scrollOff)
   {
     $(".lec_img img").slideDown(2000);
   }
   if(scrollTop>scrollOff)
   {
     $(".grid_galary").slideDown(2000);
   }
 });

 let myText=$(".message").attr('maxlength');
 $(".countChar").html('<span>'+myText+'</span> Characters Remaining');
 $("textarea").keyup(function(){
   let textlenth=$(this).val().trim().length;
   let remText=myText-textlenth;
   $(".countChar").html('<span>'+remText+'</span> Characters Remaining');
 })
 


 let currentIndex =0;
 let imgArr=[];
 let imgs=document.querySelectorAll(".img-item");
 let lightbContainer=document.getElementById("lightbox-container");
 let lightbox=document.getElementById("lightbox-item");
 let close =document.getElementById("close");
 let next=document.getElementById("next");
 let prev=document.getElementById("prev");
 for(let i=0;i<imgs.length;i++)
 {
   imgArr.push(imgs[i]);
   imgs[i].addEventListener("click",function(e){
    currentIndex =imgArr.indexOf(e.target);
    let imgsrc=e.target.src;
    lightbContainer.classList.add("show");
    lightbox.style.backgroundImage="url("+imgsrc+")";
    
   })
 };
 close.onclick=function()
 {
     lightbContainer.classList.remove("show");
 }
 
 next.addEventListener("click",function(){
  currentIndex++;
  if(currentIndex==imgs.length)
      {
          currentIndex=0;
      }
      lightbox.style.backgroundImage="url("+imgs[currentIndex].src+")";
})
prev.addEventListener("click",function(){
  currentIndex--;
  console.log(currentIndex);
  if(currentIndex<0)
      {
          currentIndex=imgs.length-1;
      }
      lightbox.style.backgroundImage="url("+imgs[currentIndex].src+")";
})