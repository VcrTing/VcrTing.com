import slug from 'slug';
import md5 from 'md5';
import { url } from './config';

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