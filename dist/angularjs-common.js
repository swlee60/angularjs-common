!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="/",__webpack_require__(0)}([function(module,exports,__webpack_require__){__webpack_require__(1),module.exports=__webpack_require__(6)},function(module,exports,__webpack_require__){"use strict";var requireAll=function(requireContext){requireContext.keys().map(requireContext)};requireAll(__webpack_require__(2))},function(module,exports,__webpack_require__){function webpackContext(req){return __webpack_require__(webpackContextResolve(req))}function webpackContextResolve(req){return map[req]||function(){throw new Error("Cannot find module '"+req+"'.")}()}var map={"./module.js":3,"./shared/test.directive.js":4,"./shared/test.service.js":5};webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2},function(module,exports){"use strict";angular.module("angularjsCommon",["ngResource"])},function(module,exports){"use strict";function AcTestDirective($log){return{restrict:"A",scope:{},link:function(scope,element,attrs){$log.debug("AcTestDirective link func called")},controller:function($scope,$http){},controllerAs:"vm",bindToController:!0}}angular.module("angularjsCommon").directive("acTestDirective",AcTestDirective)},function(module,exports){"use strict";function AcTestService($log,AcEnv){var test={};return test.foo=function(){return $log.debug("foo! foo!"),$log.debug("api url : ",AcEnv.url.api),"foo"},test}angular.module("angularjsCommon").service("AcTestService",AcTestService)},function(module,exports){"use strict";var AcEnv={url:{api:"https://jsonplaceholder.typicode.com/posts/1"}};angular.module("angularjsCommon").constant("AcEnv",AcEnv)}]);
//# sourceMappingURL=angularjs-common.js.map