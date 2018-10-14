import User, { createUrl, gravatar, getgategory } from './user.js';

const codecasts = new User('codecasts', 'i@codecasts.com');
const profile = createUrl(codecasts.name);
const image = gravatar(codecasts.email);

console.log(codecasts);
console.log(profile);
console.log(image);

getgategory()