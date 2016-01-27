var app = require('../app');

angular.module('storeApp').controller('storeCtrl', storeCtrl);

storeCtrl.$inject = ['repository', '$location', 'CartService'];

function storeCtrl(repository, $location, CartService) {
	var mv = this;

	mv.storeItem  = repository.getAll();

	mv.addToCart =function (item) {
		CartService.addToCart(item);
	};

	mv.goToCart = function (argument) {
		$location.path("/cart");
	};

}

