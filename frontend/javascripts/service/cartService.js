var app = require('../app');

angular.module('storeApp')
	.service('CartService', function() {

		this.cartItem =[];

		this.addToCart =function (item) {
			this.cartItem.push(item);	
		};

		this.totalCost = function () {
			var cost =0;
			angular.forEach(this.cartItem, function (item) {
				cost += item.price;
			});
			return cost;
		};

		this.delFromCart = function (itemId) {
			var self = this;
			angular.forEach(self.cartItem, function (item, i) {
				if(itemId == item.id){
					self.cartItem.splice(i, 1);
				}
			});
		};
	});