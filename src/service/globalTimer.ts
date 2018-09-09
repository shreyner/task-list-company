import {Subject} from "@reactivex/rxjs";

export class GlobalTimer {
    private subject: Subject;
    private counter: number = 0;

    constructor() {
        this.subject = new Subject();

        setInterval(this.myTimer, 1000);
    }

    private myTimer() {
        this.subject.onNext(this.incrementCounter());
    }

    private incrementCounter() {
        return this.counter++;
    }

    private subscribe(callback: (a?: any) => any) {
        return this.subject.subscribe(callback);
    }
}
