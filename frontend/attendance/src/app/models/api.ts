export class API{
   public static DomainUrl : string = 'http://192.168.0.107:8081'

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
      
    public static get logteacher(): string {
        return API.DomainUrl + '/logteacher';
    }

    public static get teacherdetails(): string {
        return API.DomainUrl + '/teacherdetails';
    }

    public static get addsub(): string {
        return API.DomainUrl + '/addsub';
    }
    public static get set(): string {
        return API.DomainUrl + '/set';
    }
}