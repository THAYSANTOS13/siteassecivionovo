document.addEventListener('DOMContentLoaded', function (){
 let tamanhoAtualFonte= 1;
 const aumentaFonteBotao= document.getElementById('aumentar-fonte');
 
 aumentaFonteBotao.addEventListener ('click', function (){
    tamanhoAtualFonte += 0.1;
    document.DOCUMENT_TYPE_NODE.style.fontSize= '${tamanhoAtualFonte}rem';
 })
 const diminuirFonteBotao= document.getElementById('diminuir-fonte');
 tamanhoAtualFonte-= 0.1;
 document.body.style.fontSize= '${tamanhoAtualFonte}rem';
})
})