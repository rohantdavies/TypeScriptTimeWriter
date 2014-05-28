var timeApp;
(function (timeApp) {
    'use strict';

    var timeWriterSvc = (function () {
        function timeWriterSvc() {
            this.STORAGE_ID = 'time-writer-local-storage';
        }
        timeWriterSvc.prototype.get = function () {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || []);
        };

        timeWriterSvc.prototype.put = function (weekTimes) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(weekTimes));
        };
        return timeWriterSvc;
    })();
    timeApp.timeWriterSvc = timeWriterSvc;
    ;
})(timeApp || (timeApp = {}));
//# sourceMappingURL=timeWriterService.js.map
