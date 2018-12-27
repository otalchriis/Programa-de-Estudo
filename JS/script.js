const botao = document.querySelector('#botao');

botao.addEventListener('click', function(event){
    event.preventDefault();
  
        const totalDeCasos = document.querySelector('#total-de-casos');
        const bairro = document.querySelector('#bairro');
        const casos = document.querySelector('#casos');
        const total = document.querySelector('#total');
        const valorTotal = document.querySelector('#valor-total');
        const lista = [];
        const somaDoTotal = parseFloat(casos.value);

        
        totalDeCasos.innerHTML += `<div> <span> ${bairro.value} </span> <span> ${casos.value}</span> </div>`;
        lista.push(somaDoTotal);
        
        function soma (lista){
            for(item of lista){
                const somaNova = item += item;
                return somaNova;
            }
            
          
        }

        valorTotal.innerHTML = soma(lista);

        
})
