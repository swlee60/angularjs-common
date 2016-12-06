'use strict'
/* eslint-disable no-undef */

import angular from 'angular'

describe('Service: testService', () => {
  let service
  beforeEach(() => {
    angular.mock.module('angularjsCommon')
    angular.mock.inject((AcTestService) => {
      service = AcTestService
    })
  })

  it('should be return string foo : ', () => {
    expect(service.foo()).toEqual('foo')
  })
})
