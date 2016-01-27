var app = require('../app');

angular.module('storeApp')
	.factory('repository', function() {

		var repository = {};

		repository.getAll =function () {
			return storeItem;
		};

		var storeItem = [{
			id : 1,
			title:'Тостер SENCOR STS 34RD',
			price: 748,
			img : '/img/tost.jpg',
		},{
			id : 2,
			title: 'Электропечь DEX DTO-600 C',
			price: 3264,
			img:'/img/gril.jpg',
		},{
			id : 3,
			title :'Утюг SCARLETT SC-1136',
			price: 1544,
			img : '/img/SCARLETT.jpg',
		},{
			id : 4,
			title :'Мясорубка DELFA DMG-3150',
			price: 2010,
			img : '/img/DELFA.jpg',
		},{
			id : 5,
			title :'Электрочайник SENCOR SWK 1571BL',
			price: 1410,
			img : '/img/SENCOR.jpg',
		},{
			id : 6,
			title :'Пылесос SENCOR SVC 7020BK',
			price: 2333,
			img : '/img/SVC.jpg',
		} ];

		return repository;
	});