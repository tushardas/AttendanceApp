import { domain } from "./domain";

export class API{
   public static DomainUrl : string = 'http://localhost:8081'

    public static get subjecttaken(): string {
        return API.DomainUrl + '/subjecttaken';
    }

    public static get attendancetaken(): string {
        return API.DomainUrl + '/attendancetaken';
    }

    public static get submit(): string {
        return API.DomainUrl + '/submit';
    }

    public static get signup(): string {
        return API.DomainUrl + '/signup';
    }

    public static get login(): string {
        return API.DomainUrl + '/login';
    }

    public static get studentperc(): string {
        return API.DomainUrl + '/studentperc';
    }

    public static get teachersignup(): string {
        return API.DomainUrl + '/teachersignup';
    }
}