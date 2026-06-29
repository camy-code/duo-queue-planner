import { Service } from '@angular/core';

@Service()
export class ImportantDays {
    private importantDays: Array<[string, string]> = [
        ['1999-04-29', 'Diane Birthday'],
        ['2003-02-15', 'Cam Birthday'],
        ['2026-05-28', 'Cam & Diane Anniversary'],
        ];

    getImportantDays(): Array<[string, string]> {
        return this.importantDays;
    }

    getONEimportantDay(stringDate: string): [string, string] | undefined {
        return this.importantDays.find(([date, _]) => date === stringDate);
    }

    addImportantDay(stringDate: string, description: string): void {
        this.importantDays.push([stringDate, description]);
    }

}
