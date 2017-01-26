(function() {
  'use strict';

  angular
    .module('learnSpring')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;
    vm.pokemonTiles = [
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 1},
      {x: 2, y: 1},
      {x: 0, y: 2},
      {x: 1, y: 2},
      {x: 2, y: 2}
    ];
    vm.tileClick = function(tile) {
      $http.get('http://localhost:8080/tng/pokemon/secure/jas/pokemon-location/get?x=' + tile.x + '&y=' + tile.y)
      .then(
        function(response) {
          console.log(response.data);
        }
      );
    };
    vm.createPokemon = function() {
      var request = {
        hp: parseInt(vm.new.hp),
        attack: parseInt(vm.new.attack)
      };
      $http.post('http://localhost:8080/tng/pokemon/secure/jas/pokemon/create', request)
      .then(
        function(response) {
          console.log(response.data);
          vm.new.hp = null;
          vm.new.attack = null;
        }
      );
    };
    vm.updatePokemon = function() {
      var request = {
        id: parseInt(vm.update.id),
        hp: parseInt(vm.update.hp),
        attack: parseInt(vm.update.attack)
      };
      $http.post('http://localhost:8080/tng/pokemon/secure/jas/pokemon/update', request)
      .then(
        function(response) {
          console.log(response.data);
          vm.update.id = null;
          vm.update.hp = null;
          vm.update.attack = null;
        }
      );
    };
    vm.deletePokemon = function() {
      $http.post('http://localhost:8080/tng/pokemon/secure/jas/pokemon/delete/' + vm.delete.id, {})
      .then(
        function(response) {
          console.log(response.data);
          vm.delete.id = null;
        }
      );
    };
    vm.addPokemonLocation = function() {
      var request = {
        pokemonId: parseInt(vm.add.id),
        x: parseInt(vm.add.x),
        y: parseInt(vm.add.y)
      };
      $http.post('http://localhost:8080/tng/pokemon/secure/jas/pokemon-location/create', request)
      .then(
        function(response) {
          console.log(response.data);
          vm.add.id = null;
          vm.add.x = null;
          vm.add.y = null;
        }
      );
    };
  }
})();
