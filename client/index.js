(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie petZ';
    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };
    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };
    $scope.weapon = {};
    $scope.weapons = [];
    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };
    $scope.pet  = {health:100};
    $scope.pets = [];
    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};
      $('#petName').focus();
    };
    $scope.player1 = null;
    $scope.player2 = null;
    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };
    $scope.fight = function(){
      var turn = Math.floor((Math.random()*2) + 1),
          a    = $scope.player1,
          b    = $scope.player2;
      switch(turn){
        case 1:
          $scope.attack(a, b);
          $scope.attack(b, a);
          break;
        case 2:
          $scope.attack(b, a);
          $scope.attack(a, b);
      }
    };
    $scope.attack = function(player1, player2){
      if(player1.health > 0){
        player2.health -= Math.floor((Math.random()*player1.weapon.damage) + 1);
      }else{
        player2.health -= Math.floor((Math.random()*3) + 1);
      }
    };
  }]);
})();

