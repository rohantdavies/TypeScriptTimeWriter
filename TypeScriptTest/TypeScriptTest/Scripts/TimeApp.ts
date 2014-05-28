/// <reference path="_all.ts" />
module timeApp {
    'use strict';

    var timeWriterMVC = angular.module('timeWriter',[])

    .controller('timeWriterController',timeWriterCtrl)
    .service('timeWriterService', timeWriterSvc);

};
