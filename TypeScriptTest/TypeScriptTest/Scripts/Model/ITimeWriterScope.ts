/// <reference path="../_all.ts" />
module timeApp {
    export interface ITimeWriterScope extends ng.IScope {
        weekTimes : IWeekTime[];
        location : ng.ILocationService;
        vm : timeWriterCtrl;
        totalTime: number;
        selectedDate?: Date;
    }
}
