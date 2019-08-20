import classes from "*.module.scss";

export interface TableProps { data: Array<User>; userModalInitiate: Function }
export interface UserModalProps { data: User; userTodosData: Array<Todo>; isModalActive: boolean; handleClose: any; }

export interface User {
    id?: number, 
    name?: string;
    username?: string;
    email?: string;   
    address: Address
    phone?: string;
    website?: string;
    company: Company
}

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;

}

export interface Geo {
    lat?: string;
    lng?: string;
}

export interface Address {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo: Geo
}

export interface Company {
    name?: string;
    catchPhrase?: string;
    bs?: string;
}