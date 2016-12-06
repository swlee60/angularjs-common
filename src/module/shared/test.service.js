'use strict'

function AcTestService ($log, AcEnv) {
  let test = {}
  test.foo = () => {
    $log.debug('foo! foo!')
    $log.debug('api url : ', AcEnv.url.api)
    return 'foo'
  }

  return test
}

angular.module('angularjsCommon')
  .service('AcTestService', AcTestService)
