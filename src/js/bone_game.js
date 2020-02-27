const bono_game = {
    tabuleiro: ['', '', '', '', '', '', '', '', ''],
    simbolos: {
        opcao: ['X', 'O'],
        indice_turno: 0,
        change: function () {
            this.indice_turno = (this.indice_turno === 0 ? 1 : 0);
        }
    },
    win_x: 0,
    win_0: 0,
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
        console.log('Game over');
        this.pontua_jogo();
        
    },

    start: function () {
        this.tabuleiro.fill('');
        this.escrever_tela();
        this.gameover = false;

    },



    jogo_continuo: function () {
        
        

    },


    reset: function (){
        document.getElementById(btn-reset).innerHTML = start();
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
            alert('Velha, favor tentar novamente.');

        }

    },

    pontua_jogo: function (){
        //let value1;
        //win_0 = x;
        //win_x = y;
        //let value2;
        if(this.simbolos.indice_turno === 0){
            this.win_0 = this.win_0 + 1;
            //console.log('BonoGuy: ' + this.win_0);
            document.getElementById("interator-x").innerHTML = this.win_0;
            //value1.innerHTML = this.win_0;
            //return thwin_0,win_x;
        } else{
            this.win_x = this.win_x + 1;
            document.getElementById("interator-y").innerHTML = this.win_x;
            //return win_0,win_x;
            //console.log('Others: ' +this.win_x );
            //value2.innerHTML = this.win_x;
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