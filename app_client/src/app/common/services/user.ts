export class User {
    _id: string;
    surname: string;
    email: string;
    name: string;
    token: string;
    password: string;
    profileImage: String;
    qualification: String = '';
    address: any = {
        street: '',
        number: '',
        city: '',
        postalCode: '',
        country: '',
        full: ''
    };
    phone: String = '';
};