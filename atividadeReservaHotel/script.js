// Classe Quarto:
// Representa um quarto de hotel com atributos como número, tipo, preço da diária e estado de reserva.

class Quarto {
    constructor (numero, tipo, preco, reserva) {
    this.numero= numero;
    this.tipo= tipo;
    this.preco= preco;
    this.reserva= false; 

}

//função para verificar se o quarto está disponível com base no estado da reserva

estaDisponivel() {
    
    return this.reserva ? `O quarto ${this.numero} não esta disponível` : `Quarto disponível.`;
}
}

class Hospede {
    
   constructor(nome, email) {
       this.nome = nome;
       this.email = email;
   }

}

class Reserva {
    
   constructor(quarto, hospede, dataInicio, dataFim) {
       this.quarto = quarto;
       this.hospede = hospede;
       this.dataInicio = dataInicio;
       this.dataFim = dataFim;
   }

   calcularCustoTotal(precoDiaria) {
    //solução apresentada pelo professor colocando o console log no final e incluindo o valor pra retornar no final da função 

    const diferencaEmMilissegundos = this.dataFim - this.dataInicio;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    const custoTotal = diferencaEmDias * precoDiaria;
    console.log(`Valor total: ${custoTotal}`);
    return custoTotal;
}
}

   class Hotel {
    
   constructor(quartos, reservas) {
       this.quartos = [];
       this.reservas = [];
   }

   adicionarQuarto(quarto) {
       //Esta incluindo a lista de quartos dentro do array através do push
       this.quartos.push(quarto);
   }

}

