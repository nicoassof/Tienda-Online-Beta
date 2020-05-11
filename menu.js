$ (function(){
    var boton = $('#btn-menu');
    var fondo_enlace = $('#fondo-enlace');

    boton.on('click', function(e){
        fondo_enlace.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });
    fondo_enlace.on('click', function(e){
        fondo_enlace.toggleClass('active');
        $('#barra-lateral-izquierda').toggleClass('active');
        e.preventDefault();
    });
}())
//----------- Relleno Corazon-----------------------------------
$(document).ready(function(){
    $('#relleno-corazon-1').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-2').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-3').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-4').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-5').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-6').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-7').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
    $('#relleno-corazon-8').on('click', function(){
        $(this).toggleClass('icon-heart');
    });
});
