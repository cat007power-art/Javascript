const recipesDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject => {
        const { recipes } = recipesObject;

        for (const recipe of recipes) {
            const div = document.createElement('div');
            div.classList.add('recipe-container');

            // Загальна інформація про рецепт
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
        "id": ${recipe.id},
        "name": ${recipe.name},
        "prepTimeMinutes": ${recipe.prepTimeMinutes},
        "cookTimeMinutes": ${recipe.cookTimeMinutes},
        "servings": ${recipe.servings},
        "difficulty": ${recipe.difficulty},
        "cuisine": ${recipe.cuisine},
        "caloriesPerServing": ${recipe.caloriesPerServing},
        "rating": ${recipe.rating},
        "reviewCount": ${recipe.reviewCount}
      `;


            const ulIngredients = document.createElement('ul');
            ulIngredients.innerText = "Ingredients:";
            for (const ingredient of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ulIngredients.appendChild(li);
            }

            const olInstructions = document.createElement('ol');
            olInstructions.innerText = "Instructions:";
            for (const step of recipe.instructions) {
                const li = document.createElement('li');
                li.innerText = step;
                olInstructions.appendChild(li);
            }

            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.name;

            div.appendChild(divWithInfo);
            div.appendChild(ulIngredients);
            div.appendChild(olInstructions);
            div.appendChild(img);

            recipesDiv.appendChild(div);
        }
    })
