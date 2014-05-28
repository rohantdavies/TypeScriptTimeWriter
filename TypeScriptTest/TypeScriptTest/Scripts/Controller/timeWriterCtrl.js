/// <reference path="../_all.ts" />
var timeApp;
(function (timeApp) {
    var timeWriterCtrl = (function () {
        function timeWriterCtrl($scope, $location, service) {
            this.$scope = $scope;
            this.$location = $location;
            this.service = service;
        }
        timeWriterCtrl.$inject = [
            '$scope',
            '$location',
            'timeWriterSvc'
        ];
        return timeWriterCtrl;
    })();
    timeApp.timeWriterCtrl = timeWriterCtrl;
})(timeApp || (timeApp = {}));
//# sourceMappingURL=timeWriterCtrl.js.map
