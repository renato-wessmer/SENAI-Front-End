//efeito de esconder formulário de cadastro

//estrutura padrão para iniciar $(document).ready(function(){}); 

$(document).ready(function(){

    $('#botao-cadastrar').click(function(){

        $('#form-cadastrar').slideToggle('slow');
        $('#section-login').slideToggle('slow');
        $('#botao-cadastrar').hide();

    });

}); 

