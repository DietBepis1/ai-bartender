const { data } = require('./trainingSet.js');

let trainingData = [];

for(const prop of data.drinks) {
    let trainingSample = {
        input: {},
        output: {}
    };

    let newKey = `${prop.strDrink}`;
    let newVal = 1;

    trainingSample.output[newKey] = newVal;
    console.log(trainingSample);
    
    for(let i=1; i<=15; i++) {
        if(prop[`strIngredient${i}`]) {
            let value = prop[`strIngredient${i}`];
            trainingSample.input[value] = 1;
        }
    }
    
    trainingData.push(trainingSample);
    
}

export default trainingData;