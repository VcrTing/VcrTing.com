
const website = [ 'codecasts', 'vcrting' ];

const info = website.map(website => `${website} is cool!`);

for (const w in website) {
    console.info(w);
}