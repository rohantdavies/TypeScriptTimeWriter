/// <reference path="../_all.ts" />
module timeApp {
    export class timeWriterCtrl{
        private weekTimes : IWeekTime[];

        public static $inject = [
            '$scope',
            '$location',
            'timeWriterSvc'
        ];

        constructor(
            private $scope : ITimeWriterScope, 
            private $location : ng.ILocationService,
            private service : timeWriterSvc
        ){
            
        }
            
    }
} 