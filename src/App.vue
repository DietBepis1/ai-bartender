<template>
  <div id="app" class='app'>
    <div class="app__title">
      <h1>Ai Bartender</h1>
    </div>
    <div class='app__input'>
      <DataInput v-on:ingredients-to-net='inputIngredients($event)'/>
    </div>

    <div class='app_train'>
      Click to train net
      <button v-on:click='trainNetwork(trainingInput, trainingOutput, ingredients)'>TRAIN</button>
    </div>
    
  </div>
</template>

<script>
import DataInput from './components/DataInput.vue';
import ml5 from 'ml5';
import { data } from './components/mlComponents/trainingSet.js';

export default {
  name: 'App',
  components: {
    DataInput
  },
  data() {
    return {
      data: data,
      trainingInput: [],
      trainingOutput: [],
      ingredients: null
    }
  },
  methods: {
    prepData(data) {
      //preps api data for ml5
      for(const prop of data.drinks) {
        let input = {};
        let output = {};

        output[prop.strDrink] = 1;
        
        for(let i=1; i<=15; i++) {
          if(prop[`strIngredient${i}`]) {
            let value = prop[`strIngredient${i}`];
            input[value] = 1;
          }
        }
        
        this.trainingInput.push(input);
        this.trainingOutput.push(output);       
      }
    },
    inputIngredients(ingredients) {
      
      this.prepData(this.data);
      this.ingredients = ingredients;
      console.log('process completed!')

    },
    trainNetwork(input, output, ingredients) {
      //this method will train the network after data is prepped

      //first, set options and training options
      const options = {
        task: 'classification',
        debug: 'true',
      };
      const trainingOptions = {
        epochs: 32,
        batchSize: 12
      };

      //next, initialize network and add data
      const net = ml5.neuralNetwork(options);
      net.addData(input, output);

      //third, train that net and make predictions!
      net.train(trainingOptions, ()=> {
        net.classify(ingredients, (err, res) => {
        if(err) {
          console.log(err);
        } else {
          console.log(`Result is ${res}`);
          return res;
        }
        });
      }
    )
    }
  }
}
</script>

<style>
 @import './styles/globals.css';
 @import './styles/App.css';
</style>
