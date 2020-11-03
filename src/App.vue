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
  methods: {
    inputIngredients(ingredients) {
      console.log(ingredients);
      console.log(ml5.version);
      console.log(trainingData);
    }
  }
}
</script>

<style>
 @import './styles/globals.css';
 @import './styles/App.css';
</style>
