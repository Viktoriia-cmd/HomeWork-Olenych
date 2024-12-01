const recipesDiv = document.getElementById('recipes');
const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

fetch(url)
    .then(response => response.json())
    .then(data => {
        const { recipes } = data;
        console.log(recipes);


        recipes.forEach(recipe => {
            const recipeContainer = document.createElement('div');
            recipeContainer.classList.add('recipe-container');


            const title = document.createElement('h3');
            title.innerText = recipe.name;

            const image = document.createElement('img');
            image.src = recipe.image;
            image.alt = recipe.name;
            image.style.width = '300px';

            const description = document.createElement('p');
            description.innerText = `Cuisine: ${recipe.cuisine}, Difficulty: ${recipe.difficulty}`;

            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ingredientsList.appendChild(li);
            });

            recipeContainer.appendChild(title);
            recipeContainer.appendChild(image);
            recipeContainer.appendChild(description);
            recipeContainer.appendChild(ingredientsList);
            recipesDiv.appendChild(recipeContainer);
        });
    })
