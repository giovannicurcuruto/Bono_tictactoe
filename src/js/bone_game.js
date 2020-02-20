const bono_game = {
    tabuleiro: ['', '', '', '', '', '', '', '', ''],
    simbolos: {
        opcao: ['X', 'O'],
        indice_turno: 0,
        change: function () {
            this.indice_turno = (this.indice_turno === 0 ? 1 : 0);
        }
    },

    elemento_container: null,
    gameover: false,
    seqVencedora: [
        [0, 1, 2], //0
        [3, 4, 5], //1
        [6, 7, 8], //2
        [0, 3, 6], //3
        [1, 4, 7], //4
        [2, 5, 8], //5
        [0, 4, 8], //6
        [2, 4, 6]  //7
    ],

    init: function (container) {
        this.elemento_container = container;
    },

    jogue: function (posicao) {
        if (this.gameover) return false;

        if (this.tabuleiro[posicao] === '') {
            this.tabuleiro[posicao] = this.simbolos.opcao[this.simbolos.indice_turno];
            this.escrever_tela();
            let index_seqVencedora = this.verifica_seqVencedora(this.simbolos.opcao[this.simbolos.indice_turno]);
            if (index_seqVencedora >= 0) {
                //ganhador
                this.game_is_over();
            } else {
                //continua jogando
                
                this.simbolos.change();
            }
            
            return true;
        } else {
            return false;
            
        }

    },

    game_is_over: function () {
        this.gameover = true;
        console.log('Game over bitch - You Win');
    },

    start: function () {
        this.tabuleiro.fill('');
        this.escrever_tela();
        this.gameover = false;

    },

    verifica_seqVencedora: function (simbolo) {
        for (i in this.seqVencedora) {

            if (this.tabuleiro[this.seqVencedora[i][0]] == simbolo &&
                this.tabuleiro[this.seqVencedora[i][1]] == simbolo &&
                this.tabuleiro[this.seqVencedora[i][2]] == simbolo) 
                {
                console.log('Sequencia vencedora: ' + i);
                return i;             
            }
        }
        if(!this.tabuleiro.includes('')){
            console.log('Você perdeu');
        }

    },

    escrever_tela: function () {
        let conteudo = '';

        for (i in this.tabuleiro) {
            conteudo += '<div onclick= "bono_game.jogue(' + i + ')">' + this.tabuleiro[i] + '</div>';
        }
        this.elemento_container.innerHTML = conteudo;

    }


};