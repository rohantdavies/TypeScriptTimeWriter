module timeApp {
    'use strict';

    export class timeWriterSvc {
        private STORAGE_ID = 'time-writer-local-storage';
        get(): IWeekTime[]{
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || []);
        }

        put(weekTimes: IWeekTime[]){
            localStorage.setItem(this.STORAGE_ID,JSON.stringify(weekTimes));
        }
    };
} 