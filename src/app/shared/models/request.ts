export class Request {
    constructor(
        public id:number,
        public firstName: string,
        public lastName: string,
        public regNo: string,
        public mobileNum: number,
        public address: string,
        public pickUpDate: Date,
        public returnDate: Date
    ) { }
}