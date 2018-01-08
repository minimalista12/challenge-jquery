$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	

	//ocultamos la clase js-back con hide 
	$(".js-back").hide();


    //llmamamos a la funcion desde DOM 
	printNews();


});

//creamos la funcion "nuevas recetas" 
function printNews (){
	$("#noticias").append("Nuevas Recetas");

};


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	//creamos una funcion que recorra todo el data recipesArray 
	for (var i in recipesArray){
		//mientras cumpla el parametro higlighted 
		if (recipesArray[i]["highlighted"] === true) {
			renderRecipe();

		}
	}



}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


