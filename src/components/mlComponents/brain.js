const brain = require('brain.js');
const trainingData = require('./trainingSet.js')

const params = {
    hiddenlayers: [10, 7, 4],
    activation: brain.Relu,
}

const net = new brain.NeuralNetwork();

net.train(trainingData, {
    iterations: 10000,
    errorThresh: 0.01,
    log: stats => console.log(stats)
})