$(document).ready(function(){

    $('.locate-summary').on('click',function(){
        /*---Panel Handling-----*/
        $('.view-panel-1').css('display','block');
        /*$('.view-panel-2').css('display','none');
        $('.view-panel-3').css('display','none');*/
        /*----style handling---*/
        $('.locate-summary').css('color',"#fff");
        $('.nav-main-section p').css('background-color','#2b3a49');

        /*------Reset Other---------*/
        /*$('.locate-registration').css('color',"#a3aab0");
        $('.nav-employees-section-ch1').css('background-color','#2e3e4e');
        $('.locate-attendance').css('color',"#a3aab0");*/




    });


        function changeLocation(){
            switch(window.location.hash){
                case '#summary':
                    $('.admin-side-nav').css('display','block');
                    $('.view-panel-1').css('display','block');
                    $('.locate-summary').css('color',"#fff");
                    $('.nav-main-section p').css('background-color','#2b3a49');
                    break;
                case '':
                    $('.admin-side-nav').css('display','block');
                    $('.view-panel-1').css('display','block');
                    $('.locate-summary').css('color',"#fff");
                    $('.nav-main-section p').css('background-color','#2b3a49');
                    break;

            }
        }

    changeLocation();




});