'use strict';

describe('Common RestSvc', function() {
  var mockRestSvc;
  var blah;
  var $httpBackend;
  var restSvc;
  var scope; //For testing controllers - not this service.
  var $rootScope;
  var restSvcSpy;
  var rtn = [{emp: 'one'}, {emp: 'two'}];

  //beforeEach(module('oa-common'));
  beforeEach(module('oa-common', function($provide){
    // restSvcSpy = jasmine.createSpyObj("RestSvc", ["getEmployees"]);
    restSvcSpy = jasmine.createSpy("RestSvc", "getEmployees");
    //restSvcSpy.getEmployees.andReturn(rtn);
//    restSvcSpy.getEmployees.and.returnValue(rtn);
    // $provide.value("RestSvc", restSvcSpy);
  }));


  //Next Try:
  //  http://www.bradoncode.com/blog/2015/07/13/unit-test-promises-angualrjs-q/



  beforeEach(inject(function(_$httpBackend_, _restSvc_, _$rootScope_){
    $httpBackend = _$httpBackend_;
    restSvc = _restSvc_;
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
  }));

  beforeEach(function(){
    //Sinon is wierd = http://stackoverflow.com/questions/20570301/typeerror-undefined-is-not-a-function-evaluating-sinon-spy
    //blah = sinon.stub();

    // mockRestSvc = sinon.stub({ getEmployees: function(){} });
    // module(function($provide){
    //   $provide.value('restSvc', mockRestSvc);  //$provide allows you to substitute.
    // });
  });

  // beforeEach(inject(function($provide){
  //     //$provide.value('restSvc', mockRestSvc);  //$provide allows you to substitute.
  // }));



  it('test01 should return 72', inject(function(restSvc) {
    expect(restSvc.test01()).toBe(72);
  }));

  it('One plus two equals three', inject(function(restSvc) {
    //expect(restSvc.getEmployees()).toBeTruthy();
    //expect(restSvc.getEmployees().count).toBeGreaterThan(0);
    expect(1+2).toEqual(3);
  }));


  // it('GET Employees should return records', inject(function(restSvc) {
  //   restSvc.getEmployees();
  //   // expect(mockRestSvc.getEmployees).toHaveBeenCalled();
  //   // expect(restSvc.getEmployees).toHaveBeenCalled();
  // }));
  it('GET Employees should return records', inject(function() {
    // expect(mockRestSvc.getEmployees).toHaveBeenCalled();
    // expect(restSvc.getEmployees).toHaveBeenCalled();

    // restSvc.getEmployees();
    //expect(restSvc.getEmployees().count).toBeGreaterThan(0);

    // restSvc.getEmployees().then(function(data){
    //   console.log('data=', data);
    //   expect(data.count).toBeGreaterThan(0);  //Integration test since its actually calling mongo.
    // });

/*
    var getEmp = restSvc.getEmployees();
    $rootScope.$digest();
    getEmp.then(function(data){
        console.log('data=', data);
        expect(data.count).toBeGreaterThan(0);  //Integration test since its actually calling mongo.
      });
*/

  }));




});
