function calcular() {
    let dias = parseFloat(document.getElementById("dias").value);
    let mao = parseFloat(document.getElementById("mao_de_obra").value);
    let orcamento_adc = document.getElementById('orcamento-adc')
    let dias_adc = document.getElementById('dias-adc')
    let mao_adc = document.getElementById('mao-adc')
    let valor_adc = document.getElementById('valor-adc')


    let resultado = document.getElementById("resultado");

    let calc = dias * mao

    resultado.innerHTML = `R$ ${calc.toFixed(2)}`;

    let divAdc = document.querySelector('.adc');

            // Cria um novo grupo de informações
            let novoGrupo = document.createElement('div');

            let dataAtual = new Date().toLocaleDateString();

            // Define o conteúdo do novo grupo de informações
            novoGrupo.innerHTML = `
                <p>${dataAtual}</p>
                <p>${dias}</p>
                <p>R$ ${mao.toFixed(2)}</p>
                <p>R$ ${calc.toFixed(2)}</p>
            `;

            // Adiciona o novo grupo de informações à div
            divAdc.appendChild(novoGrupo);

}
