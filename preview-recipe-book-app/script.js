const API_KEY = "6716bbd7e07b44498e4287907d91a5ca";
const recipeCardsElem = document.getElementById("cards");

async function getRecipes() {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.recipes;
}

function DisplayRecipes(recipes) {
  recipeCardsElem.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("card");

    const imageBox = document.createElement("div");
    imageBox.classList.add("image-box");
    const image = document.createElement("img");
    image.src = recipe.image || "default.jpg";
    image.alt = recipe.title;
    image.width = 200;
    image.height = 150;
    imageBox.appendChild(image);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("h3");
    title.classList.add("img-title");
    title.textContent = recipe.title;

    const ingredients = document.createElement("p");
    ingredients.classList.add("ingredients");
    ingredients.textContent = `Ingredients: ${recipe.extendedIngredients
      .map((ing) => ing.name)
      .join(", ")}`;


    const viewButton = document.createElement("button");
    viewButton.id = "btn-viewrecipe";
    viewButton.textContent = "View Recipe";
    viewButton.onclick = () => {
      window.open(recipe.sourceUrl, "_blank");
    };

    
    cardContent.appendChild(title);
    cardContent.appendChild(ingredients);
    cardContent.appendChild(viewButton);
    recipeCard.appendChild(imageBox);
    recipeCard.appendChild(cardContent);

    recipeCardsElem.appendChild(recipeCard);
  });
}

async function init() {
  const recipes = await getRecipes();
  DisplayRecipes(recipes);
}

init();


// scrollToTop
document.addEventListener("DOMContentLoaded", function () {
  let scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  });

  scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
