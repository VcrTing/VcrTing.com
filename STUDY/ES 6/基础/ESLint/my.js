
let url = 'https://api.github.com/users'
const li = [
    { name: 'Lucy', args: [ 'aliya', 'moonth', 'reduce' ] },
    { name: 'Nina', args: [ 'aliya', 'three', 'tools' ] },
    { name: 'axios', args: [ 'bith', 'sunshine', 'ice' ] }
]
function get_li() {
    return new Promise( (reslove, reject) => {
        const ret = [...li];
        reslove(ret);
    })
}
get_li().then( response => {
    const ret = response;
    for(let re of ret) {
        const others = re.args;
        others.forEach( val => {
            const div_html = shif`
                <div class="header">${val}</div>
            `;
        });
    }
}).catch( error => {
    console.info(error);
});
function shif(stings, ...args) {
    args.forEach(val => {
        if (val === 'aliya') {
            console.log('she is aliya !!!');
        }
    });
}
axios.get(url).then( response => {
    const ret = response.data;
    console.info(ret);
}).catch( error => {
    console.info(error);
});