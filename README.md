# ai-bartender

This is a fun little machine learning project I am making with Vue and Brain.js.

## Version 1.0.1 (currently in development)

This version of the app will get recipe data from thecocktaildb.com's public api and use it to train a neural network. On the browser side, a user can type in a list of ingredients and brain.js will give them a prediction for a drink. An external link will take the user to that drink's page on 
thecocktaildb.com.

If you want to clone this repo, you can run the dev server and build commands like a vanilla Vue project. At this time, there is no special webpack config or anything to muck up things.


## Change log
Update 1.0.1
Changed from Brain.js to Ml5.js and moved implementation of Ml5.js to App.vue.
This should solve an issue I had with creating an ml5 instance.

Update 1.0.11
Started rewriting the code for importing the training data into the DOM and the code for
training the network.