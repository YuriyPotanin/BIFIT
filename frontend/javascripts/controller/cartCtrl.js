var app = require('../app');

angular.module('storeApp').controller('cartCtrl', cartCtrl);

cartCtrl.$inject = ['CartService', '$location', '$timeout'];

function cartCtrl(CartService, $location, $timeout) {
	var mv = this;
	mv.name = "";
	mv.phone = "";
	mv.email = "";
	mv.comment = "";
	mv.error = [];
	mv.hideModalClass = false;

	mv.cartItem = CartService.cartItem;

	mv.goToStore = function(argument) {
		$location.path("/store");
	};

	mv.totalCost = function() {
		return CartService.totalCost();
	};

	mv.deleteFromCart = function(id) {
		CartService.delFromCart(id);
	};

	mv.submit = function() {
		if (mv.name.length === 0) {
			mv.error.push("Enter you name");
		}
		if (mv.phone.length < 10) {
			mv.error.push("Enter correct phone number");
		}
		if (mv.email.length < 5 ||
			mv.email.indexOf('@') == -1 ||
			mv.email.indexOf('.') == -1) {
			mv.error.push("Enter correct email");
		}
		if (mv.cartItem.length === 0) {
			mv.error.push("you cart is empty");
		}
		if (mv.error.length === 0) {

			mv.name = "";
			mv.phone = "";
			mv.email = "";
			mv.comment = "";
			$timeout(function() {
				mv.hideModalClass = true;
			}, 500);
			mv.successText = "Checkout success";
			mv.hideModal();
		} else {
			$timeout(function() {
				mv.hideModalClass = true;
			}, 500);
			mv.hideModal();
		}

	};

	mv.hideModal = function() {

		$timeout(function() {
			mv.error = [];
			mv.hideModalClass = false;
			mv.successText = undefined;
		}, 3000);
	};


}