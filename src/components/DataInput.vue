<template>
    <div>
        <div>
            Add an ingredient and click submit.
            <input v-model='ingredient'>
            <button v-on:click='addIngredient(ingredient)'>Submit</button>
        </div>
        <br>
        <div>
            Submit Ingredients to your robo-bartender:
            <button v-on:click='emitIngredients(ingredients)'>Beep Boop</button>
        </div>
        
        <hr/>
        You've added:
        {{ingredient}}
        {{ingredients}}
    </div>
</template>

<script>
export default {
    name: 'DataInput',
    data() {
        return {
            ingredient: '',
            ingredients: []
        }
    },
    methods: {
        addIngredient(ingredient) {
            let item = ingredient;
            item = item.trim().toLowerCase();
            this.ingredients.push(item);
        },
        emitIngredients(ingredients) {
            if(ingredients.length) {
                this.$emit('ingredients-to-net', ingredients);
            }
        }
    }
}
</script>

<style scoped>

</style>