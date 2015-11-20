'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  
   it("should verify visual strikethrough settings", function(){
      var total;

      element.all(by.repeater('t in todos')).then(function(res){
        total = res.length;

        for(var i = 0; i < res.length; i++){
          var el = element(by.repeater('t in todos').row(i));
          var isDone = element(by.repeater('t in todos').row(i).column('t.done')).getAttribute('value');
console.log(":::::::::"+isDone+":::::::::::");
          if(isDone == "true"){
            expect(el.getAttribute('class')).toMatch('strikethrough');
          } else {
            expect(el.getAttribute('class')).not.toMatch('strikethrough');
          }

        }
      });

    });

    it("should add a new item to the todos array", function(){

    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
