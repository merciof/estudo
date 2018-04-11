var app = angular.module('pessoas',[]);

app.controller('controlador-pessoas', function($scope){
    $scope.nome = 'merciof';

    $scope.pessoas = [
        {nome:'João',cidade:'Manaus'},
        {nome:'Maria',cidade:'Belém'},
        {nome:'Joaquim',cidade:'Aracaju'},
        {nome:'José',cidade:'Feira de Santana'},

    ];
});

app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'views/listagem-pessoas.html'})
        .when('/pessoa/adicionar', {templateUrl: 'views/adicionar-pessoa.html', 
                                   controller: 'controlador-adicionar'});
});

app.controller('controlador-adicionar', function($scope){
    $scope.adicionar = function(){
        $scope.pessoas.push({
            nome: $scope.pessoa.nome,
            cidade: $scope.pessoa.cidade
        });
    }
});