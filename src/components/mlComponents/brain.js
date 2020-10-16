const brain = require('brain.js');
const axios = require('axios');

/*
const getData = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => {
        //console.log(res.data)
        return Promise.resolve(res.data)

    })
    .catch(err => console.err(error))
}

let data = getData();
console.log(data);

//console.log(data[0]);
*/

let data = null;

let promise = axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
promise.then(res => {
    //console.log(res.data);
    data = res.data;
})

console.log(data);