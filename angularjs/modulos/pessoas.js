var app = angular.module('pessoas',[]);

app.controller('controlador1-pessoas', function($scope){
    $scope.nome = 'merciof';

    $scope.pessoas = [
        {nome:'João',cidade:'Manaus'},
        {nome:'Maria',cidade:'Belém'},
        {nome:'Joaquim',cidade:'Aracaju'},
        {nome:'José',cidade:'Feira de Santana'},

    ];
});