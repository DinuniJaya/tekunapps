import { setUserSession, getToken } from '../Utils/Common';
import axios from "axios";

export const host = () => {
    let debug = false;
    if (debug) {
        return `https://tekunfin.tekun.gov.my/staging/api/`
    } else {
        // return `https://tekunfin.tekun.gov.my/staging/api`
        return `https://tekun.nakmenangtender.com/api/`
    } 
    
}
export const checkOnline = () => {
    if (window.navigator.onLine) {
        console.log('online', window.navigator.onLine);
    } else {
        console.log('offline');
    }
}

export async function getUserProfile(): Promise<any> {
    return await axios.get(host() + `user-profile`, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    });
}
const headers = {
    headers: {
        Authorization: 'Bearer ' + getToken()
    }
}
export async function login(username: any, password: any): Promise<any> {
    return await axios.post(host() + `login`, {
        username: username,
        password: password,
    })
}
export async function register(data: any): Promise<any> {
    return await axios.post(host() + `register`, {
        name: data.name,
        username: data.username,
        phone: data.phone,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
        citizen: data.citizen,
        identity_fiction_type: data.identity_fiction_type,
        no_ic: data.no_ic,
        no_passport: data.no_passport,
        country: data.country
    })
}
export async function userProfile(): Promise<any> {
    return await axios.post(host() + `details`, {
    }, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        },
    })
}