/// <reference path="_all.ts" />
var timeApp;
(function (timeApp) {
    'use strict';

    var timeWriterMVC = angular.module('timeWriter', []).controller('timeWriterController', timeApp.timeWriterCtrl).service('timeWriterService', timeApp.timeWriterSvc);
})(timeApp || (timeApp = {}));
;
//# sourceMappingURL=TimeApp.js.map
