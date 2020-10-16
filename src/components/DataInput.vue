<template>
    <div>
        Add an ingredient and click submit.
        <input v-model='ingredient'>
        <button v-on:click='addIngredient(ingredient)'>Submit</button>
        Submit Ingredients to AI:
        <button v-on:click='emitIngredients(ingredients)'>Beep Boop</button>
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