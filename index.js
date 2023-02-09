'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

     //em quantidadeMinutos foi feita uma operação para multiplicar os segundos e os minutos e depois essa quantidade foi dividida por 60 para converter os segundos em minutos. O objeto "Math.floor" foi utilizado para usar somente números inteiros. Já em quantidadeHoras a operação é para retirar os dias (por isso é multiplicado por 24, que é a quantidade de horas de um dia). Assim, o programa retira os dias do tempo dado e resta somente as horas( em segundos, por isso é multiplicado novamente os minutos por segundos). Para finalizar, em quantidadeDias, o tempo é dividido pela quantidade de dias que tem um segundo. //

    const quantidadeSegundos = tempo % 60;
    const quantidadeMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const quantidadeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const quantidadeDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(quantidadeSegundos);
    minutos.textContent = formatarDigito(quantidadeMinutos);
    horas.textContent = formatarDigito(quantidadeHoras);
    dias.textContent = formatarDigito(quantidadeDias);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0 ){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () =>{
    const dataMandalorian = new Date('2023-03-01 04:00:00');
    const hoje = Date.now();
  return Math.floor((dataMandalorian - hoje) / 1000);

}
contagemRegressiva(tempoRestante());
