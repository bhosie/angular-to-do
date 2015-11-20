'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

  	//set up a "beforeEach" which injects the controller dependency into each test.
  	var $controller;
  	beforeEach(inject(function(_$controller_){
  		// The injector unwraps the underscores (_) from around the parameter names when matching
  		$controller = _$controller_;

  	}));


    it('should ....', function() {
      //spec body
      var scope = {};
      var view1Ctrl = $controller('View1Ctrl', {$scope: scope});
      expect(view1Ctrl).toBeDefined();

    });

    it("should verify we have a todos object", function(){
    	var scope = {};
      	var view1Ctrl = $controller('View1Ctrl', {$scope: scope});
      	expect(scope.todos).toBeDefined();
    });

     it("should verify we have a title for every todo", function(){
    	var scope = {};
      	var view1Ctrl = $controller('View1Ctrl', {$scope: scope});

      	for(var i = 0; i < scope.todos.length; i++){
      		expect(typeof(scope.todos[i]["title"])).not.toBe("undefined");
      	}
    });

     it("should verify boolean status", function(){
    	var scope = {};
      	var view1Ctrl = $controller('View1Ctrl', {$scope: scope});
      	
      	for(var i = 0; i < scope.todos.length; i++){
      		expect(typeof(scope.todos[i]["done"])).toBe("boolean");
      	}
    });

     describe('test input...', function(){

        var scope, view1Ctrl, total;

        beforeEach(function(){
          scope = {};
          view1Ctrl = $controller('View1Ctrl', {$scope: scope});

          total = scope.todos.length;
        });

        it("should not allow items with empty text", function(){
          
          scope.itemText = "";
          scope.addItem(); 
          var newTotal = scope.todos.length;
          expect(total).toEqual(newTotal);
        });

        it("should not allow items with undefined text", function() {
          total = scope.todos.length;
          scope.itemText = undefined;
          scope.addItem();
          var newTotal = scope.todos.length;
          expect(total).toEqual(newTotal);
        });

        it("should accept an item when text is set", function(){

          total = scope.todos.length;
          scope.itemText = "A new item";
          scope.addItem();
          var newTotal = scope.todos.length;
          expect(newTotal).toEqual(total + 1);

       });
      

    });
     



  });
});