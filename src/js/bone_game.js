const bono_game = {
    tabuleiro: ['','','','','','','','',''],
    simbolos:{
        opcao: ['X','O'],
        indice_turno: 0,
        change: function() {
            this.indice_turno = (this.indice_turno === 0 ? 1 : 0);
        }
    }, 

    elemento_container: null, 
    gameover: false,
    seqVencedora: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
],

    init: function(container){
        this.elemento_container = container;
    },

    jogue: function(posicao){
        if(this.gameover) return false;
        if(this.tabuleiro[posicao] === ''){
            this.tabuleiro[posicao] = this.simbolos.opcao[this.simbolos.indice_turno];
            this.escrever_tela();

            this.simbolos.change();
        }
        
    },

    
    verifica_seqVencedora: function(simbolo){

        

    },

    escrever_tela: function () {
        let conteudo = '';

        for (i in this.tabuleiro){
            conteudo += '<div onclick= "bono_game.jogue(' + i + ')">' + this.tabuleiro[i] + '</div>';  
        }
        this.elemento_container.innerHTML = conteudo;

    }


};