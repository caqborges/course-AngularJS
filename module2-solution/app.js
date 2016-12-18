(function () {
  'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService); //Singleton Design Pattern

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyItems = this;

  toBuyItems.getItems = ShoppingListCheckOffService.getToBuyItems();

  toBuyItems.isEmpty = function(){
    return ShoppingListCheckOffService.nothingToBuy();
  };

  toBuyItems.buyItems = function(itemIndex){
    ShoppingListCheckOffService.buyItems(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtItems = this;

  boughtItems.items = ShoppingListCheckOffService.getBoughtItems();

    boughtItems.isEmpty = function(){
      return ShoppingListCheckOffService.nothingBoughtYet();
    };
}

function ShoppingListCheckOffService(){
  var service = this;

    //List with the products to buy
      var toBuyItems = [
      {name: "Cookies", quantity: 10},
      {name: "Chips", quantity: 5},
      {name: "Soda", quantity: 3},
      {name: "Tomatoes",quantity: 4},
      {name: "Napkins", quantity: 7}
    ];


  var boughtItems = [];

  service.buyItems = function(index){
    boughtItems.push(toBuyItems[index]); //Add to the other list
    toBuyItems.splice(index,1).name; //Removes from this list

  };

  service.getBoughtItems = function(){
    return boughtItems;
  };

  service.getToBuyItems = function(){
    return toBuyItems;
  };

  service.nothingBoughtYet = function (){  // Nothing was bought
    return boughtItems.length <= 0;
  };

  service.nothingToBuy = function (){
    return toBuyItems.length <= 0;
  };

}

})();
