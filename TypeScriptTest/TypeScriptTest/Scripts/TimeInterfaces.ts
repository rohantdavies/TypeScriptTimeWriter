

enum DayOfWeek{
    Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}

interface ITimeEntry {
    entryDay: DayOfWeek;
    hoursWorked: number;
    project: IProject;
    user: User;
}

interface IProject {
    name: string;
    costCode: string;
    startDate?: Date;
    endDate?: Date;
    initiative: string;

}

interface User {
    name: string;
    userId: string;
    pin: number;
}

interface IWeekTime {
    endDate: Date;
    timeEntries: ITimeEntry[];
    locked: boolean;
    addTime(entry: ITimeEntry): void;
}

