var myApp = angular.module('modulo-1', []);

myApp.controller('controlador_1', controlador_1);

function controlador_1($scope) {


    $scope.scan = function scan() {

        var aux = $scope.input_model.split(',');
        var cilindro = [40];

        for (var i = 0; i < 40; i++) {
            cilindro[i] = 0;
        }

        for (var k = 0; k < 40; k++) {
            for (var l = 0; l < aux.length; l++) {
                if (k == aux[l]) {
                    cilindro[k] = 1;
                }
            }
        }

        window.console.log('Posição inicial do braço: ' + $scope.posicao_inicial_braco);
        $scope.esperar(1000);

        if(!$scope.direcao_inicial) {
            window.console.log('Posicao inicial: SUBINDO');
            $scope.esperar(1000);

            for (var j = $scope.posicao_inicial_braco; j < 40; j++) {
                if (cilindro[j] === 1) {
                    cilindro[j] = 0;
                    window.console.log('Lendo cilindro: ' + j);
                    $scope.esperar(1000);
    
                }
            }
    
            window.console.log('Braço sobre o cilindro ' + j);
            $scope.esperar(1000);
            window.console.log('Mudando de direção para DESCER.');
            $scope.esperar(1000);
            $scope.posicao_inicial = true;
    
            //volta a partir da posição da última requisição
            for (var k = j - 1; k > -1; k--) {
                if (cilindro[k] === 1) {
                    cilindro[k] = 0;
                    window.console.log('Lendo cilindro ' + k);
                    $scope.esperar(1000);
                }
            }
            window.console.log('Braço sobre o cilindro ' + (k + 1));
        } else {

        }

        

    }

    $scope.cscan = function cscan() {
        
        var aux = $scope.input_model.split(',');
        var cilindro = [40];

        for (var i = 0; i < 40; i++) {
            cilindro[i] = 0;
        }

        for (var k = 0; k < 40; k++) {
            for (var l = 0; l < aux.length; l++) {
                if (k == aux[l]) {
                    cilindro[k] = 1;
                }
            }
        }

        window.console.log('Posição inicial do braço: ' + $scope.posicao_inicial_braco);
        $scope.esperar(1000);
        
        if (!$scope.direcao_inicial) {

            for (var j = $scope.posicao_inicial_braco; j < 40; j++) {
                if (cilindro[j] === 1) {
                    cilindro[j] = 0;
                    window.console.log('Lendo cilindro: ' + j);
                    $scope.esperar(1000);

                }
            }

            window.console.log('Braço sobre o cilindro ' + j);
            $scope.esperar(1000);
            window.console.log('Mudando de direção para DESCER.');
            $scope.posicao_inicial = true;
            $scope.esperar(1000);

            j = 0;

            window.console.log('Braço sobre o cilindro ' + j);
            $scope.esperar(1000);

            window.console.log('Mudando de direção para SUBIR.');
            $scope.posicao_inicial = false;
            $scope.esperar(1000);

            for (j; j < 40; j++) {
                if (cilindro[j] === 1) {
                    cilindro[j] = 0;
                    window.console.log('Lendo cilindro: ' + j);
                    $scope.esperar(1000);

                }
            }

            window.console.log('Braço sobre o cilindro ' + j);

        }
    };

    //esta função gera um delay 
    $scope.esperar = function esperar(ms) {
        var hora_inicio = new Date().getTime();
        var hora_fim = hora_inicio;
        while (hora_fim < hora_inicio + ms) {
            hora_fim = new Date().getTime();
        }
    }

}

