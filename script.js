// Sample recipe database (in a real application, this would be stored in a backend database)
const recipeDatabase = [
    {
        name: "Leftover Rice Stir Fry",
        ingredients: ["rice", "vegetables", "soy sauce", "eggs"],
        instructions: "Stir fry leftover rice with vegetables and eggs. Season with soy sauce.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Vegetable Soup",
        ingredients: ["carrots", "celery", "onions", "vegetable broth"],
        instructions: "Simmer vegetables in broth until tender. Season to taste.",
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Pasta Primavera",
        ingredients: ["pasta", "bell peppers", "zucchini", "parmesan"],
        instructions: "Cook pasta and toss with sautéed vegetables. Top with parmesan.",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0723c6b?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Potato Hash",
        ingredients: ["potatoes", "onions", "bell peppers", "eggs"],
        instructions: "Dice and fry potatoes until crispy. Add vegetables and top with eggs.",
        image: "https://images.unsplash.com/photo-1504674900247-ec6b0b1b798e?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Chicken Stir Fry",
        ingredients: ["chicken", "broccoli", "carrots", "soy sauce"],
        instructions: "Stir fry chicken and vegetables. Season with soy sauce and serve over rice.",
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Vegetable Frittata",
        ingredients: ["eggs", "spinach", "tomatoes", "cheese"],
        instructions: "Mix eggs with vegetables and cheese. Bake until set.",
        image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Bean and Rice Bowl",
        ingredients: ["rice", "black beans", "corn", "avocado"],
        instructions: "Combine cooked rice with beans and vegetables. Top with avocado.",
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Pasta with Tomato Sauce",
        ingredients: ["pasta", "tomatoes", "garlic", "basil"],
        instructions: "Cook pasta and toss with homemade tomato sauce. Garnish with fresh basil.",
        image: "https://images.unsplash.com/photo-1504674900247-ec6b0b1b798e?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Yam and Plantain Breakfast Hash",
        ingredients: ["yam", "plantain", "eggs", "onion", "bell pepper", "garlic", "thyme"],
        instructions: `1. Preparation (20 minutes):
   a) Yam and Plantain Prep:
      - Peel and dice yam into 1/2 inch cubes
      - Peel and slice plantain into 1/4 inch rounds
      - Dice onion and bell pepper
      - Mince garlic
      - Chop fresh thyme

2. Cooking Process (25-30 minutes):
   a) Initial Cooking:
      - Heat 2 tablespoons oil in a large pan
      - Add yam cubes and cook for 10-12 minutes until slightly crispy
      - Add plantain slices and cook for 5-7 minutes until golden
      - Remove yam and plantain, set aside

   b) Vegetable Sauté:
      - In the same pan, add onion and bell pepper
      - Sauté for 3-4 minutes until softened
      - Add garlic and thyme, cook for 1 minute

   c) Final Assembly:
      - Return yam and plantain to the pan
      - Create wells in the mixture
      - Crack eggs into the wells
      - Cover and cook for 3-4 minutes until eggs are set

3. Serving:
   - Season with salt and pepper
   - Serve hot with fresh herbs
   - Optional: Add hot sauce or ketchup`,
        image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Plantain and Yam Frittata",
        ingredients: ["plantain", "yam", "eggs", "cheese", "onion", "garlic", "paprika"],
        instructions: `1. Preparation (25 minutes):
   a) Ingredient Prep:
      - Peel and slice plantain into thin rounds
      - Peel and dice yam into small cubes
      - Dice onion
      - Mince garlic
      - Grate cheese
      - Beat eggs with salt and pepper

2. Cooking Process (35-40 minutes):
   a) Initial Cooking:
      - Preheat oven to 375°F (190°C)
      - Heat oil in an oven-safe pan
      - Cook yam cubes until tender (10-12 minutes)
      - Add plantain slices and cook until golden (5-7 minutes)
      - Remove and set aside

   b) Frittata Assembly:
      - Sauté onion and garlic
      - Return yam and plantain to pan
      - Pour beaten eggs over mixture
      - Sprinkle with cheese and paprika
      - Cook on stovetop for 2-3 minutes

   c) Baking:
      - Transfer to oven
      - Bake for 15-20 minutes until set
      - Let rest for 5 minutes

3. Serving:
   - Cut into wedges
   - Serve warm or at room temperature
   - Garnish with fresh herbs`,
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Yam and Plantain Soup",
        ingredients: ["yam", "plantain", "eggs", "onion", "tomatoes", "garlic", "ginger", "vegetable broth"],
        instructions: `1. Preparation (20 minutes):
   a) Ingredient Prep:
      - Peel and cube yam
      - Peel and slice plantain
      - Dice onion and tomatoes
      - Mince garlic and ginger
      - Prepare vegetable broth

2. Cooking Process (45-50 minutes):
   a) Initial Cooking:
      - Heat oil in a large pot
      - Sauté onion until translucent
      - Add garlic and ginger, cook for 1 minute
      - Add tomatoes, cook until softened

   b) Main Cooking:
      - Add yam cubes and plantain slices
      - Pour in vegetable broth
      - Bring to a boil
      - Reduce heat and simmer for 20-25 minutes
      - Add seasonings to taste

   c) Egg Addition:
      - Create small wells in the soup
      - Crack eggs into the wells
      - Cover and cook for 3-4 minutes
      - Let eggs set in the hot soup

3. Serving:
   - Ladle into bowls
   - Garnish with fresh herbs
   - Serve hot with crusty bread`,
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80"
    }
];

// Choose a representative image based on ingredients and optional style
function getImageForIngredients(ingredients, styleHint) {
    const keywords = (ingredients || []).map(i => i.toLowerCase());
    const has = (word) => keywords.some(k => k.includes(word));

    // Style-specific hints
    if (styleHint) {
        const style = styleHint.toLowerCase();
        if (style.includes('stir') || style.includes('fry')) {
            if (has('chicken')) return 'https://images.unsplash.com/photo-1604908176997-431d3f07f9a3?auto=format&fit=crop&w=1200&q=80';
            if (has('beef')) return 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80';
            return 'https://images.unsplash.com/photo-1625944527811-4a4c108f662a?auto=format&fit=crop&w=1200&q=80';
        }
        if (style.includes('bake') || style.includes('casserole')) {
            if (has('pasta')) return 'https://images.unsplash.com/photo-1520207607210-3a2eeca9b487?auto=format&fit=crop&w=1200&q=80';
            if (has('potato')) return 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1200&q=80';
            return 'https://images.unsplash.com/photo-1514511542834-d046bda03d68?auto=format&fit=crop&w=1200&q=80';
        }
        if (style.includes('soup') || style.includes('simmer')) {
            if (has('tomato')) return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80';
            if (has('chicken')) return 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80';
            return 'https://images.unsplash.com/photo-1542444257-7b3b9b4d3c48?auto=format&fit=crop&w=1200&q=80';
        }
    }

    // Ingredient-based defaults
    if (has('plantain') || has('yam')) return 'https://images.unsplash.com/photo-1592899677977-9c10ca588bb4?auto=format&fit=crop&w=1200&q=80';
    if (has('rice') && has('beans')) return 'https://images.unsplash.com/photo-1617093727343-37440fce4608?auto=format&fit=crop&w=1200&q=80';
    if (has('rice')) return 'https://images.unsplash.com/photo-1546549039-5fd3a4f8eed5?auto=format&fit=crop&w=1200&q=80';
    if (has('pasta')) return 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bbf?auto=format&fit=crop&w=1200&q=80';
    if (has('egg')) return 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80';
    if (has('chicken')) return 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80';
    if (has('soup')) return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80';
    if (has('vegetable') || has('broccoli') || has('carrot')) return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80';

    // Generic fallback
    return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80';
}

// DOM Elements
const searchInput = document.getElementById('ingredient-search');
const searchButton = document.getElementById('search-btn');
const recipeContainer = document.getElementById('recipe-container');

// Event Listeners
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// AI Recipe Generator
function generateRecipes(ingredients) {
    // Common cooking methods
    const cookingMethods = [
        "stir-fry", "sauté", "bake", "roast", "simmer", "grill", "steam", "braise", "poach"
    ];
    
    // Common seasonings
    const seasonings = [
        "salt", "pepper", "garlic", "onion powder", "paprika", "cumin", "oregano", "basil", 
        "thyme", "rosemary", "chili powder", "cayenne", "curry powder"
    ];
    
    // Common additional ingredients
    const commonIngredients = [
        "olive oil", "butter", "garlic", "onion", "lemon juice", "vinegar", "tomato sauce",
        "chicken broth", "vegetable broth", "cream", "cheese", "breadcrumbs"
    ];

    // Generate three different recipes
    const recipes = [];
    
    // Recipe 1: Stir-fry style
    const method1 = "stir-fry";
    const seasoning1 = seasonings[Math.floor(Math.random() * seasonings.length)];
    const additional1 = commonIngredients[Math.floor(Math.random() * commonIngredients.length)];
    
    recipes.push({
        name: `${ingredients.join(" and ")} Stir-Fry`,
        ingredients: [...ingredients, additional1, seasoning1, "soy sauce", "sesame oil", "cornstarch", "ginger", "garlic"],
        instructions: `1. Mise en Place (15-20 minutes):
   - Gather all ingredients and equipment
   - Wash all vegetables thoroughly under cold running water
   - Pat vegetables dry with paper towels to ensure proper stir-frying
   - Cut vegetables into uniform, bite-sized pieces for even cooking
   - If using meat, slice against the grain into thin strips
   - Mince garlic and ginger finely
   - Measure out all seasonings and sauces

2. Sauce Preparation (5 minutes):
   - In a small bowl, combine:
     * 2 tablespoons soy sauce
     * 1 tablespoon sesame oil
     * 1 teaspoon ${seasoning1}
     * 1 teaspoon cornstarch (for thickening)
     * 1 teaspoon minced ginger
     * 2 cloves minced garlic
   - Whisk until smooth and set aside

3. Cooking Process (20-25 minutes):
   a) Initial Setup:
      - Place a wok or large frying pan over high heat
      - Allow the pan to get very hot (you should see a slight smoke)
      - Add 2 tablespoons of ${additional1}
      - Swirl the oil to coat the pan evenly

   b) Protein Cooking (if using meat):
      - Add meat in a single layer
      - Let it sear for 1-2 minutes without moving
      - Flip and cook for another 1-2 minutes
      - Remove and set aside

   c) Vegetable Cooking:
      - Add vegetables in order of cooking time:
        1. Hard vegetables first (carrots, broccoli stems)
        2. Medium vegetables next (bell peppers, onions)
        3. Quick-cooking vegetables last (spinach, bean sprouts)
      - Stir-fry each group for 2-3 minutes
      - Add a splash of water if needed to prevent sticking

   d) Final Assembly:
      - Return protein to the pan
      - Pour in the prepared sauce
      - Stir-fry for 1-2 minutes until sauce thickens
      - Taste and adjust seasoning

4. Finishing and Serving (10 minutes):
   - Remove from heat
   - Let rest for 2-3 minutes
   - Garnish with:
     * Fresh herbs
     * Sesame seeds
     * Sliced green onions
   - Serve immediately over:
     * Steamed rice
     * Noodles
     * Or as is

5. Storage and Reheating:
   - Store in an airtight container
   - Refrigerate for up to 3 days
   - Reheat in a pan over medium heat
   - Add a splash of water if needed

Tips for Success:
- Keep the heat high throughout cooking
- Don't overcrowd the pan
- Have all ingredients ready before starting
- Cut ingredients uniformly for even cooking
- Taste and adjust seasoning as you go`,
        image: getImageForIngredients(ingredients, method1)
    });

    // Recipe 2: Baked style
    const method2 = "bake";
    const seasoning2 = seasonings[Math.floor(Math.random() * seasonings.length)];
    const additional2 = commonIngredients[Math.floor(Math.random() * commonIngredients.length)];
    
    recipes.push({
        name: `Baked ${ingredients.join(" and ")} Casserole`,
        ingredients: [...ingredients, additional2, seasoning2, "breadcrumbs", "cheese", "eggs", "milk", "flour", "butter"],
        instructions: `1. Preparation (30 minutes):
   a) Equipment Setup:
      - Preheat oven to 375°F (190°C)
      - Position rack in the middle
      - Prepare a 9x13 inch baking dish
      - Gather all necessary tools and ingredients

   b) Ingredient Preparation:
      - Wash and dry all vegetables thoroughly
      - Cut vegetables into uniform pieces
      - Grate cheese if using block cheese
      - Prepare breadcrumb mixture:
        * 1 cup breadcrumbs
        * 2 tablespoons ${seasoning2}
        * 1/4 cup grated parmesan
        * Mix thoroughly

   c) Sauce Preparation:
      - In a medium saucepan, melt 4 tablespoons butter
      - Add 1/4 cup flour, whisk for 1 minute
      - Gradually add 2 cups milk, whisking constantly
      - Cook until thickened (5-7 minutes)
      - Season with salt, pepper, and ${seasoning2}

2. Assembly (20 minutes):
   a) First Layer:
      - Grease baking dish with ${additional2}
      - Spread 1/3 of the vegetables
      - Sprinkle with 1/3 of the cheese
      - Pour 1/3 of the sauce
      - Season lightly

   b) Second Layer:
      - Add another 1/3 of vegetables
      - Add another 1/3 of cheese
      - Pour another 1/3 of sauce
      - Season lightly

   c) Final Layer:
      - Add remaining vegetables
      - Add remaining cheese
      - Pour remaining sauce
      - Top with seasoned breadcrumbs
      - Drizzle with ${additional2}

3. Baking Process (45-60 minutes):
   a) Initial Baking:
      - Cover with aluminum foil
      - Bake for 30 minutes
      - Check for bubbling

   b) Final Baking:
      - Remove foil
      - Continue baking for 15-30 minutes
      - Look for:
        * Golden brown top
        * Bubbling edges
        * Tender vegetables

   c) Resting:
      - Remove from oven
      - Let rest for 10-15 minutes
      - This allows the casserole to set

4. Serving (15 minutes):
   - Cut into portions
   - Serve with:
     * Fresh salad
     * Crusty bread
     * Steamed vegetables
   - Garnish with:
     * Fresh herbs
     * Extra cheese
     * Cracked black pepper

5. Storage and Reheating:
   - Cool completely before storing
   - Cover tightly with foil or plastic wrap
   - Refrigerate for up to 4 days
   - Freeze for up to 3 months
   - Reheat in 350°F oven for 20-30 minutes

Tips for Success:
- Don't skip the resting time
- Use fresh ingredients
- Don't overfill the baking dish
- Check for doneness with a knife
- Let it cool slightly before serving`,
        image: getImageForIngredients(ingredients, method2)
    });

    // Recipe 3: Soup style
    const method3 = "simmer";
    const seasoning3 = seasonings[Math.floor(Math.random() * seasonings.length)];
    const additional3 = commonIngredients[Math.floor(Math.random() * commonIngredients.length)];
    
    recipes.push({
        name: `${ingredients.join(" and ")} Soup`,
        ingredients: [...ingredients, additional3, seasoning3, "broth", "garlic", "onion", "carrots", "celery", "bay leaves", "thyme"],
        instructions: `1. Preparation (30 minutes):
   a) Equipment Setup:
      - Select a large, heavy-bottomed pot
      - Gather all necessary tools
      - Prepare a clean workspace

   b) Ingredient Preparation:
      - Wash all vegetables thoroughly
      - Cut vegetables into uniform pieces:
        * Onions: medium dice
        * Carrots: 1/2 inch rounds
        * Celery: 1/2 inch pieces
        * Other vegetables: appropriate sizes
      - Mince garlic finely
      - Measure out all seasonings

   c) Broth Preparation:
      - Choose between:
        * Homemade broth (preferred)
        * Store-bought broth
      - Have 6-8 cups ready
      - Warm broth slightly

2. Cooking Process (60-90 minutes):
   a) Initial Sauté (15 minutes):
      - Heat pot over medium heat
      - Add 2 tablespoons ${additional3}
      - Add onions, cook until translucent
      - Add garlic, cook for 1 minute
      - Add carrots and celery
      - Cook until slightly softened

   b) Main Cooking (45-60 minutes):
      - Add all main ingredients
      - Pour in warm broth
      - Add seasonings:
        * 2 bay leaves
        * 1 teaspoon ${seasoning3}
        * 1 teaspoon thyme
        * Salt and pepper to taste
      - Bring to a boil
      - Reduce heat to simmer
      - Partially cover pot

   c) Simmering Process:
      - Maintain gentle simmer
      - Skim any foam that rises
      - Stir occasionally
      - Check for doneness:
        * Vegetables should be tender
        * Flavors should be well combined
        * Broth should be flavorful

3. Finishing (20 minutes):
   a) Final Adjustments:
      - Remove bay leaves
      - Taste and adjust seasoning
      - Add more broth if needed
      - Consider adding:
        * Fresh herbs
        * Lemon juice
        * Additional seasonings

   b) Resting:
      - Remove from heat
      - Let rest for 10 minutes
      - This allows flavors to meld

4. Serving (15 minutes):
   - Ladle into bowls
   - Garnish with:
     * Fresh herbs
     * Crusty bread
     * Grated cheese
     * Olive oil drizzle
   - Serve hot

5. Storage and Reheating:
   - Cool completely before storing
   - Refrigerate for up to 5 days
   - Freeze for up to 3 months
   - Reheat gently on stovetop
   - Add fresh garnishes when serving

Tips for Success:
- Don't rush the simmering process
- Taste and adjust throughout cooking
- Use fresh, quality ingredients
- Don't overcook vegetables
- Let soup rest before serving

Additional Notes:
- Soup often tastes better the next day
- Can be made ahead and frozen
- Adjust consistency with more broth
- Add cream or coconut milk for richness
- Consider adding pasta or rice for heartiness`,
        image: getImageForIngredients(ingredients, method3)
    });

    return recipes;
}

// Modified search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
        alert('Please enter some ingredients to search for recipes.');
        return;
    }

    const searchTerms = searchTerm.split(',').map(term => term.trim());
    
    // First, try to find matching recipes from the database
    let matchingRecipes = findMatchingRecipes(searchTerms);
    
    // If no recipes found, generate new recipes
    if (matchingRecipes.length === 0) {
        const generatedRecipes = generateRecipes(searchTerms);
        
        // Add a special indicator for AI-generated recipes
        recipeContainer.innerHTML = `
            <div class="ai-notice">
                <i class="fas fa-robot"></i>
                <p>No exact matches found. Here are three AI-generated recipes based on your ingredients:</p>
            </div>
        `;
        
        generatedRecipes.forEach(recipe => {
            const recipeCard = createRecipeCard(recipe);
            recipeCard.classList.add('ai-generated');
            recipeContainer.appendChild(recipeCard);
        });
    } else {
        displayRecipes(matchingRecipes);
    }
}

// Find recipes that match the search terms
function findMatchingRecipes(searchTerms) {
    return recipeDatabase.filter(recipe => {
        return searchTerms.some(term => 
            recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(term)
            )
        );
    });
}

// Display recipes in the recipe container
function displayRecipes(recipes) {
    // Hide saved recipes section
    document.getElementById('saved-recipes').style.display = 'none';
    // Show main recipe results section
    document.getElementById('recipe-results').style.display = 'block';

    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipeContainer.innerHTML = `
            <div class="no-results">
                <h3>No recipes found</h3>
                <p>Try searching with different ingredients</p>
            </div>
        `;
        return;
    }

    recipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeContainer.appendChild(recipeCard);
    });
}

// Function to display saved recipes
function displaySavedRecipesSection() {
    // Hide main recipe results section
    document.getElementById('recipe-results').style.display = 'none';
    // Show saved recipes section
    document.getElementById('saved-recipes').style.display = 'block';

    const savedRecipesContainer = document.getElementById('saved-recipes-container');
    savedRecipesContainer.innerHTML = ''; // Clear previous results

    const savedRecipeNames = JSON.parse(localStorage.getItem('savedRecipes') || '[]');

    if (savedRecipeNames.length === 0) {
        savedRecipesContainer.innerHTML = `
            <div class="no-results">
                <h3>No saved recipes yet</h3>
                <p>Save recipes by clicking the heart icon on a recipe card.</p>
            </div>
        `;
        return;
    }

    const savedRecipes = recipeDatabase.filter(recipe => savedRecipeNames.includes(recipe.name));

    if (savedRecipes.length > 0) {
        savedRecipes.forEach(recipe => {
            const recipeCard = createRecipeCard(recipe);
            savedRecipesContainer.appendChild(recipeCard);
        });
    } else {
         savedRecipesContainer.innerHTML = `
            <div class="no-results">
                <h3>Could not find saved recipes in database</h3>
                <p>Something went wrong retrieving your saved recipes.</p>
            </div>
        `;
    }
}

// Modified createRecipeCard function to include AI indicator
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    // Create ingredients list with separate items
    const ingredientsList = recipe.ingredients.map(ingredient => 
        `<li>${ingredient}</li>`
    ).join('');
    
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-content">
            <h3>${recipe.name}</h3>
            <div class="ingredients">
                <h4>Ingredients:</h4>
                <ul class="ingredients-list">
                    ${ingredientsList}
                </ul>
            </div>
            <div class="instructions">
                <h4>Instructions:</h4>
                <p>${recipe.instructions}</p>
            </div>
            <button class="save-recipe" onclick="saveRecipe('${recipe.name}')">
                <i class="fas fa-heart"></i> Save Recipe
            </button>
        </div>
    `;
    
    return card;
}

// Save recipe to local storage
function saveRecipe(recipeName) {
    try {
        let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        if (!savedRecipes.includes(recipeName)) {
            savedRecipes.push(recipeName);
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            alert('Recipe saved successfully!');
        } else {
            alert('Recipe already saved!');
        }
    } catch (e) {
        console.error('Could not save recipe:', e);
        alert('Failed to save recipe. Please check your browser settings.');
    }
}

// Add a function to display saved recipes (optional, for testing)
function displaySavedRecipesTest() {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    console.log('Saved Recipes:', savedRecipes);
}

// You can call displaySavedRecipesTest() in the console to see saved items

// Add smooth scrolling for navigation links and section display logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#about') {
            // About link handled by modal logic
            return;
        }

        e.preventDefault();

        // Handle Saved Recipes link
        if (targetId === '#saved-recipes') {
            displaySavedRecipesSection();
        } else {
            // Handle other navigation links (Home, Recipes, Savings)
            // Hide saved recipes section
            document.getElementById('saved-recipes').style.display = 'none';
             // Show relevant sections - assuming default view shows #hero, #features, #recipe-results
             document.getElementById('hero').style.display = 'flex'; // Adjust display type as needed for your layout
             document.getElementById('features').style.display = 'grid'; // Adjust display type as needed
             document.getElementById('recipe-results').style.display = 'block'; // Adjust display type as needed

            // Scroll to the target section
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add these functions after the existing code but before the event listeners

function getUniqueIngredients() {
    const ingredients = new Set();
    recipeDatabase.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            ingredients.add(ingredient.toLowerCase());
        });
    });
    return Array.from(ingredients);
}

function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

function generateAISuggestions(query) {
    // Common ingredient categories with more detailed items
    const categories = {
        proteins: ['chicken', 'beef', 'pork', 'fish', 'tofu', 'eggs', 'beans', 'lentils', 'turkey', 'lamb'],
        vegetables: ['carrots', 'broccoli', 'spinach', 'bell peppers', 'onions', 'tomatoes', 'potatoes', 'sweet potatoes', 'cucumber', 'lettuce'],
        grains: ['rice', 'pasta', 'bread', 'quinoa', 'couscous', 'barley', 'oats', 'flour', 'cornmeal', 'cereal'],
        dairy: ['milk', 'cheese', 'yogurt', 'cream', 'butter', 'sour cream', 'cottage cheese', 'whipping cream'],
        spices: ['salt', 'pepper', 'garlic', 'ginger', 'cumin', 'paprika', 'oregano', 'basil', 'thyme', 'rosemary'],
        fruits: ['apples', 'bananas', 'oranges', 'berries', 'mangoes', 'pineapple', 'grapes', 'pears', 'peaches'],
        others: ['olive oil', 'vinegar', 'honey', 'sugar', 'baking powder', 'baking soda', 'cocoa powder', 'vanilla extract']
    };

    // Generate suggestions based on the query
    const allIngredients = Object.values(categories).flat();
    const queryLower = query.toLowerCase();

    // Only include ingredients that contain the query
    let suggestions = allIngredients.filter(ingredient => ingredient.toLowerCase().includes(queryLower));

    // Add common combinations if relevant
    if (queryLower.includes('chicken')) {
        suggestions.push('rice', 'vegetables', 'garlic');
    }
    if (queryLower.includes('pasta')) {
        suggestions.push('tomato sauce', 'cheese', 'basil');
    }
    if (queryLower.includes('rice')) {
        suggestions.push('vegetables', 'eggs', 'soy sauce');
    }
    if (queryLower.includes('bread')) {
        suggestions.push('butter', 'jam', 'cheese');
    }
    if (queryLower.includes('egg')) {
        suggestions.push('cheese', 'vegetables', 'bread');
    }

    // Remove duplicates and sort
    suggestions = Array.from(new Set(suggestions));
    suggestions = suggestions.sort((a, b) => {
        // Prioritize startsWith
        const aStarts = a.toLowerCase().startsWith(queryLower);
        const bStarts = b.toLowerCase().startsWith(queryLower);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return a.localeCompare(b);
    });

    return suggestions.slice(0, 8); // Return up to 8 suggestions
}

function showAutocomplete(query) {
    const autocompleteResults = document.getElementById('autocomplete-results');
    if (!query.trim()) {
        autocompleteResults.classList.remove('active');
        return;
    }

    // Collect suggestions from recipe database ingredients
    const dbIngredients = getUniqueIngredients();
    const queryLower = query.toLowerCase();
    const dbMatches = dbIngredients.filter(i => i.includes(queryLower));

    // Get AI-generated suggestions
    const aiSuggestions = generateAISuggestions(query);

    // Merge and de-duplicate, prioritize db matches first
    const suggestions = Array.from(new Set([...dbMatches, ...aiSuggestions])).slice(0, 10);

    if (suggestions.length > 0) {
        autocompleteResults.innerHTML = suggestions
            .map(ingredient => `
                <div class="autocomplete-item" data-ingredient="${ingredient}">
                    ${highlightMatch(ingredient, query)}
                </div>
            `).join('');
        autocompleteResults.classList.add('active');
    } else {
        autocompleteResults.classList.remove('active');
    }
}

// Update the event listeners section
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('ingredient-search');
    const searchButton = document.getElementById('search-btn');
    const autocompleteResults = document.getElementById('autocomplete-results');

    // Add input event listener for autocomplete (use the last comma-separated token)
    searchInput.addEventListener('input', (e) => {
        const full = e.target.value;
        const lastToken = full.split(',').pop().trim();
        if (lastToken.length > 0) {
            showAutocomplete(lastToken);
        } else {
            autocompleteResults.classList.remove('active');
        }
    });

    // Add click event listener for autocomplete items
    autocompleteResults.addEventListener('click', (e) => {
        const item = e.target.closest('.autocomplete-item');
        if (item) {
            const ingredient = item.dataset.ingredient;
            const currentValue = searchInput.value;
            const parts = currentValue.split(',');
            parts[parts.length - 1] = ` ${ingredient}`; // replace last token
            const next = parts.join(',').replace(/^\s*,\s*/,'').replace(/,\s*,/g, ', ');
            searchInput.value = next.trim().replace(/\s*,\s*$/, '');
            autocompleteResults.classList.remove('active');
            searchInput.focus();
        }
    });

    // Close autocomplete when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            autocompleteResults.classList.remove('active');
        }
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        const items = autocompleteResults.querySelectorAll('.autocomplete-item');
        const activeItem = autocompleteResults.querySelector('.autocomplete-item.active');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (!activeItem) {
                items[0]?.classList.add('active');
            } else {
                const nextItem = activeItem.nextElementSibling;
                if (nextItem) {
                    activeItem.classList.remove('active');
                    nextItem.classList.add('active');
                }
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (activeItem) {
                const prevItem = activeItem.previousElementSibling;
                activeItem.classList.remove('active');
                if (prevItem) {
                    prevItem.classList.add('active');
                }
            }
        } else if (e.key === 'Enter' && activeItem) {
            e.preventDefault();
            const ingredient = activeItem.dataset.ingredient;
            const currentValue = searchInput.value;
            const parts = currentValue.split(',');
            parts[parts.length - 1] = ` ${ingredient}`;
            const next = parts.join(',').replace(/^\s*,\s*/,'').replace(/,\s*,/g, ', ');
            searchInput.value = next.trim().replace(/\s*,\s*$/, '');
            autocompleteResults.classList.remove('active');
        } else if (e.key === 'Escape') {
            autocompleteResults.classList.remove('active');
        }
    });

    // Add search button click handler
    searchButton.addEventListener('click', handleSearch);
    
    // Add enter key handler for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !autocompleteResults.querySelector('.autocomplete-item.active')) {
            handleSearch();
        }
    });

    // Modal About section logic
    const aboutSection = document.getElementById('about');
    const aboutClose = document.getElementById('about-close');
    const aboutNav = document.querySelector('a[href="#about"]');

    if (aboutNav && aboutSection && aboutClose) {
        aboutNav.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('About link clicked');
            aboutSection.classList.add('active');
        });
        aboutClose.addEventListener('click', function() {
            console.log('About close clicked');
            aboutSection.classList.remove('active');
        });
        // Close modal if clicking outside the container
        aboutSection.addEventListener('click', function(e) {
            if (e.target === aboutSection) {
                console.log('About overlay clicked');
                aboutSection.classList.remove('active');
            }
        });
    } else {
        console.log('About modal or link not found:', { aboutNav, aboutSection, aboutClose });
    }
}); 