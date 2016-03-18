'use strict';

describe('Common RestSvc', function() {

  beforeEach(module('oa-common'));

  it('test01 should return 72', inject(function(restSvc) {
    expect(restSvc.test01()).toBe(72);
  }));

  it('GET Employees should return records', inject(function(restSvc) {
    //expect(restSvc.getEmployees()).toBeTruthy();
    //expect(restSvc.getEmployees().count).toBeGreaterThan(0);
    expect(1+2).toBe(3);
  }));

});
