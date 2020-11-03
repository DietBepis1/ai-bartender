<template>
  <div id="app" class='app'>
    <div class="app__title">
      <h1>Ai Bartender</h1>
    </div>
    <div class='app__input'>
      <DataInput v-on:ingredients-to-net='inputIngredients($event)'/>
    </div>
    
  </div>
</template>

<script>
import DataInput from './components/DataInput.vue';
import ml5 from 'ml5';
import { trainingData } from './components/mlComponents/brain.js';

export default {
  name: 'App',
  components: {
    DataInput
  },
  data() {
    return {
      trainingData: trainingData
    }
  },
  methods: {
    inputIngredients(ingredients, trainingData) {

      let input = [];
      let output = [];

      //set trainingdata to correct format
      for(let prop of trainingData.prop) {
        input.push(prop.input);
        output.push(prop.output);
      }

      //set ml5 options
      const options = {
        task: 'classification',
        debug: true
      }

      const trainingOptions = {
        epochs: 32,
        batchSize: 12
      }

      //create neural net and feed in data
      const net = ml5.neuralNetwork(options);
      net.addData(input, output);

      //train it!
      net.train(trainingOptions, () => {
        net.classify(ingredients, (error, result) => {
          if(error) {
            console.error(error);
          } else {
            console.log(result);
          }
        }
      )});

    }
  }
}
</script>

<style>
 @import './styles/globals.css';
 @import './styles/App.css';
</style>
