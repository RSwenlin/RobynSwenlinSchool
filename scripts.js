const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');
const ingredientsbutton = document.querySelector('#ingredientsbtn');

ingredientsbutton.addEventListener('click', (e) => {
  e.preventDefault();
  searchRecipes();

})

async function searchRecipes() {
    const searchValue = searchInput.value.trim();
  const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=7b1a83fc&app_key=
  c9d3abbf0c31fd12a8fabc64177fbc5a`);
  const data = await response.json();
  displayRecipes(data.hits);
  
}

function displayRecipes(recipes) {
  let html = '';
  recipes.forEach((recipe) => {
    html += `
     <div>
        <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
        <h3>${recipe.recipe.label}</h3>
        <ul>
            ${recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        </div>
    `;
  })
    results.innerHTML = html;
}