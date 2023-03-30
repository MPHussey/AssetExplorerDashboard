$(document).ready(function(){
   $(window).resize(function() {
      if ($(window).width() > 900) {
         $('#overlay').css('display','none');
         $('#collapse-navigation').css('display','none');
      }
   });

   $('.menu-section').on('click',function(){
      if($('#overlay').css('display')=='block'){
         $('#overlay').css('display','none');
      }else{
         $('#overlay').css('display','block');
      }

      if($('#collapse-navigation').css('display')=='block'){
         $('#collapse-navigation').css('display','none');
      }else{
         $('#collapse-navigation').css('display','block');
      }

   });


   $('#overlay').on('click',function(){
         $('#overlay').css('display','none');
      $('#collapse-navigation').css('display','none');

   });

});