let valor = $('.entrada');
let aviso = $('.aviso');
let resultado = 0
let result = $('.result');
let porcent = $('.porcent');
let control = 0

function calcular(x, clicou){
  if (valor.val() == "" || valor.val() == 0) {
    aviso.html('Digite algum valor acima')
  }else{
    $('.botoes').css('background-color', 'hsl(183, 100%, 15%)')
    $(clicou).css('background-color', 'hsl(172, 67%, 45%)')
    resultado = (valor.val() * x) / 100
    result.html(resultado)
    porcent.html(x + " %")
    aviso.html("")
  }
}

function resetar(){
  result.html("R$ 0.00")
  porcent.html("R$ 0.00")
  valor.val(0)
  $('.value').val(0)
  $('.botoes').css('background-color', 'hsl(183, 100%, 15%)')
  aviso.html("")
}

function meuGithub(){
	window.open("https://github.com/LuizEduardodeLima", "_blank");
}

$('.value').on("change keyup paste", function(){
  if (valor.val() == "" || valor.val() == 0) {
    aviso.html('Digite algum valor acima')
  }else{
    resultado = (valor.val() * $('.value').val()) / 100
    result.html(resultado)
    porcent.html($('.value').val() + " %")
  }
})

