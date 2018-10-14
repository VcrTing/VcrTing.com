import slug from 'slug';
import md5 from 'md5';
import { url } from './config';
import Axios from 'axios';

export default function User(name, email) {
    return {
        name,
        email
    };
}

export function createUrl(name) {
    return `${url}/user/${slug(name)}`;
}

export function gravatar(email) {
    return `https://www.gravatar.com/avatar/${md5(email)}`;
}

export function getgategory() {
    Axios.get(
        'http://39.107.96.126/v1/gategory'
    ).then( response => {
        console.info(response.data)
    }).catch( error => {
        console.info(error)
    })
}