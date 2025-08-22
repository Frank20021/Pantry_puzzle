// Pantry Puzzle - Minimal client logic to render recipe suggestions on the same page

// Global recipe database with example data (replace with real data or API results)
window.recipeDatabase = [
	{
		id: 1,
		name: 'Garlic Butter Chicken with Rice',
		image: 'https://images.unsplash.com/photo-1604908176997-4312f8414a03?auto=format&fit=crop&w=1200&q=80',
		totalTime: '35 mins',
		servings: 4,
		rating: 4.6,
		reviews: 128,
		difficulty: 'Beginner',
		calories: 520,
		cuisine: 'American',
		ingredients: ['chicken', 'rice', 'garlic', 'butter', 'parsley', 'salt', 'pepper'],
		tags: ['easy', 'weeknight'],
		dietary: ['gluten-free'],
		instructions: `
			<ol>
				<li>Season chicken with salt and pepper.</li>
				<li>Cook rice according to package instructions.</li>
				<li>Sear chicken in butter until golden and cooked through.</li>
				<li>Add minced garlic and cook 30–60 seconds until fragrant.</li>
				<li>Toss chicken in garlic butter; serve over rice and garnish with parsley.</li>
			</ol>
		`
	},
	{
		id: 2,
		name: 'Tomato Basil Pasta',
		image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=1200&q=80',
		totalTime: '25 mins',
		servings: 2,
		rating: 4.4,
		reviews: 86,
		difficulty: 'Beginner',
		calories: 430,
		cuisine: 'Italian',
		ingredients: ['pasta', 'tomatoes', 'basil', 'garlic', 'olive oil', 'parmesan', 'salt'],
		tags: ['vegetarian', 'quick'],
		dietary: ['vegetarian'],
		instructions: `
			<ol>
				<li>Cook pasta in salted water until al dente.</li>
				<li>Saute garlic in olive oil, add chopped tomatoes and simmer 5–7 mins.</li>
				<li>Toss pasta with sauce, add basil and parmesan, adjust salt to taste.</li>
			</ol>
		`
	},
	{
		id: 3,
		name: 'Veggie Stir-fry with Rice',
		image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
		totalTime: '20 mins',
		servings: 3,
		rating: 4.7,
		reviews: 210,
		difficulty: 'Intermediate',
		calories: 380,
		cuisine: 'Asian',
		ingredients: ['vegetables', 'soy sauce', 'garlic', 'ginger', 'rice', 'sesame oil'],
		tags: ['stir-fry', 'quick'],
		dietary: ['vegan'],
		instructions: `
			<ol>
				<li>Cook rice or reheat leftover rice.</li>
				<li>Stir-fry vegetables in sesame oil on high heat 3–5 mins.</li>
				<li>Add garlic, ginger, soy sauce; toss to coat. Serve with rice.</li>
			</ol>
		`
	}
];

// Add more rice-based recipe variations to show different combinations
window.recipeDatabase = window.recipeDatabase.concat([
	{
		id: 10,
		name: 'Egg Fried Rice',
		image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&w=1200&q=80',
		totalTime: '20 mins',
		servings: 2,
		rating: 4.5,
		reviews: 342,
		difficulty: 'Beginner',
		calories: 450,
		cuisine: 'Asian',
		ingredients: ['rice', 'egg', 'peas', 'carrot', 'soy sauce', 'garlic', 'sesame oil'],
		tags: ['quick', 'stir-fry'],
		dietary: [],
		instructions: `
			<ol>
				<li>Scramble eggs in hot wok, set aside.</li>
				<li>Stir-fry garlic, carrot, and peas.</li>
				<li>Add rice, soy sauce, sesame oil; toss well.</li>
				<li>Fold in eggs and serve hot.</li>
			</ol>
		`
	},
	{
		id: 11,
		name: 'Chicken Fried Rice',
		image: 'https://images.unsplash.com/photo-1604908554026-41f87c9df4da?auto=format&fit=crop&w=1200&q=80',
		totalTime: '25 mins',
		servings: 3,
		rating: 4.7,
		reviews: 512,
		difficulty: 'Beginner',
		calories: 520,
		cuisine: 'Asian',
		ingredients: ['rice', 'chicken', 'egg', 'peas', 'scallions', 'soy sauce', 'garlic'],
		tags: ['quick', 'leftovers'],
		dietary: [],
		instructions: `
			<ol>
				<li>Sear diced chicken until cooked.</li>
				<li>Add garlic, then rice and vegetables.</li>
				<li>Push aside, scramble egg, then combine.</li>
				<li>Season with soy sauce and scallions.</li>
			</ol>
		`
	},
	{
		id: 12,
		name: 'Rice and Beans',
		image: 'https://images.unsplash.com/photo-1617093727343-374698b8bfcb?auto=format&fit=crop&w=1200&q=80',
		totalTime: '40 mins',
		servings: 4,
		rating: 4.3,
		reviews: 198,
		difficulty: 'Beginner',
		calories: 480,
		cuisine: 'Latin',
		ingredients: ['rice', 'black beans', 'onion', 'garlic', 'tomato', 'cumin'],
		tags: ['budget', 'vegetarian'],
		dietary: ['vegan'],
		instructions: `
			<ol>
				<li>Saute onion and garlic with cumin.</li>
				<li>Add tomatoes, beans; simmer 10 mins.</li>
				<li>Serve over fluffy rice.</li>
			</ol>
		`
	},
	{
		id: 13,
		name: 'Jollof Rice',
		image: 'https://images.unsplash.com/photo-1617191518009-6aabca08f5b9?auto=format&fit=crop&w=1200&q=80',
		totalTime: '60 mins',
		servings: 6,
		rating: 4.8,
		reviews: 620,
		difficulty: 'Intermediate',
		calories: 530,
		cuisine: 'African',
		ingredients: ['rice', 'tomato puree', 'pepper', 'onion', 'stock', 'thyme', 'bay leaf'],
		tags: ['party', 'one-pot'],
		dietary: ['vegetarian'],
		instructions: `
			<ol>
				<li>Blend tomatoes, peppers, onions; cook down into stew.</li>
				<li>Add stock and seasonings; bring to simmer.</li>
				<li>Add rice; steam until tender and smoky.</li>
			</ol>
		`
	},
	{
		id: 14,
		name: 'Coconut Rice',
		image: 'https://images.unsplash.com/photo-1569058242253-92a9aa3cba05?auto=format&fit=crop&w=1200&q=80',
		totalTime: '30 mins',
		servings: 4,
		rating: 4.2,
		reviews: 143,
		difficulty: 'Beginner',
		calories: 460,
		cuisine: 'Asian',
		ingredients: ['rice', 'coconut milk', 'ginger', 'salt'],
		tags: ['fragrant', 'side'],
		dietary: ['vegan', 'gluten-free'],
		instructions: `
			<ol>
				<li>Rinse rice until water runs clear.</li>
				<li>Simmer with coconut milk, water, salt, ginger.</li>
				<li>Steam covered until fluffy.</li>
			</ol>
		`
	},
	{
		id: 15,
		name: 'Mushroom Risotto',
		image: 'https://images.unsplash.com/photo-1546549039-49d9d0de3d8a?auto=format&fit=crop&w=1200&q=80',
		totalTime: '40 mins',
		servings: 2,
		rating: 4.6,
		reviews: 289,
		difficulty: 'Intermediate',
		calories: 550,
		cuisine: 'Italian',
		ingredients: ['arborio rice', 'mushrooms', 'stock', 'parmesan', 'butter', 'onion', 'garlic'],
		tags: ['creamy'],
		dietary: [],
		instructions: `
			<ol>
				<li>Saute onion and mushrooms with butter.</li>
				<li>Toast rice; add warm stock gradually, stirring.</li>
				<li>Finish with parmesan and butter; serve creamy.</li>
			</ol>
		`
	},
	{
		id: 16,
		name: 'Shrimp Fried Rice',
		image: 'https://images.unsplash.com/photo-1617195737499-2b9f2e9b9a38?auto=format&fit=crop&w=1200&q=80',
		totalTime: '22 mins',
		servings: 3,
		rating: 4.5,
		reviews: 231,
		difficulty: 'Beginner',
		calories: 510,
		cuisine: 'Asian',
		ingredients: ['rice', 'shrimp', 'egg', 'peas', 'carrot', 'soy sauce', 'garlic'],
		tags: ['quick', 'seafood'],
		dietary: [],
		instructions: `
			<ol>
				<li>Saute shrimp until pink; set aside.</li>
				<li>Stir-fry vegetables, add rice and soy sauce.</li>
				<li>Scramble egg, fold in shrimp, serve.</li>
			</ol>
		`
	}
]);

// Append even more rice combinations
window.recipeDatabase = window.recipeDatabase.concat([
	{
		id: 17,
		name: 'Nigerian Fried Rice',
		image: 'https://images.unsplash.com/photo-1604908175642-03c1b9f88c93?auto=format&fit=crop&w=1200&q=80',
		totalTime: '35 mins',
		servings: 4,
		rating: 4.7,
		reviews: 410,
		difficulty: 'Intermediate',
		calories: 520,
		cuisine: 'African',
		ingredients: ['rice', 'liver', 'carrot', 'peas', 'green beans', 'sweet corn', 'curry powder', 'thyme'],
		tags: ['party', 'colorful'],
		dietary: [],
		instructions: `
			<ol>
				<li>Parboil rice and set aside.</li>
				<li>Stir-fry vegetables and liver with curry and thyme.</li>
				<li>Toss in rice; adjust seasoning and steam briefly.</li>
			</ol>
		`
	},
	{
		id: 18,
		name: 'Rice and Stew',
		image: 'https://images.unsplash.com/photo-1617191520942-f5aaf9a3e3b8?auto=format&fit=crop&w=1200&q=80',
		totalTime: '45 mins',
		servings: 4,
		rating: 4.4,
		reviews: 265,
		difficulty: 'Beginner',
		calories: 500,
		cuisine: 'African',
		ingredients: ['rice', 'tomatoes', 'pepper', 'onion', 'vegetable oil', 'stock cubes'],
		tags: ['classic'],
		dietary: [],
		instructions: `
			<ol>
				<li>Cook rice until fluffy.</li>
				<li>Fry tomato-pepper-onion blend into a rich stew.</li>
				<li>Season and serve stew over rice.</li>
			</ol>
		`
	},
	{
		id: 19,
		name: 'Rice Pilaf',
		image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80',
		totalTime: '30 mins',
		servings: 4,
		rating: 4.3,
		reviews: 170,
		difficulty: 'Beginner',
		calories: 420,
		cuisine: 'Middle Eastern',
		ingredients: ['rice', 'butter', 'onion', 'stock', 'bay leaf', 'almonds', 'parsley'],
		tags: ['aromatic'],
		dietary: ['gluten-free'],
		instructions: `
			<ol>
				<li>Saute rice with butter and onion.</li>
				<li>Add stock and bay leaf; simmer until tender.</li>
				<li>Finish with toasted almonds and parsley.</li>
			</ol>
		`
	},
	{
		id: 20,
		name: 'Chicken Biryani',
		image: 'https://images.unsplash.com/photo-1625944525142-7bcb644ae1df?auto=format&fit=crop&w=1200&q=80',
		totalTime: '75 mins',
		servings: 6,
		rating: 4.8,
		reviews: 980,
		difficulty: 'Expert',
		calories: 650,
		cuisine: 'Indian',
		ingredients: ['basmati rice', 'chicken', 'yogurt', 'onion', 'garam masala', 'saffron', 'mint'],
		tags: ['layered', 'festive'],
		dietary: [],
		instructions: `
			<ol>
				<li>Marinate chicken with yogurt and spices.</li>
				<li>Parboil rice; layer with chicken and fried onions.</li>
				<li>Steam on low (dum) with saffron and mint.</li>
			</ol>
		`
	},
	{
		id: 21,
		name: 'Seafood Paella',
		image: 'https://images.unsplash.com/photo-1604908554639-7e7d92b2a24c?auto=format&fit=crop&w=1200&q=80',
		totalTime: '60 mins',
		servings: 5,
		rating: 4.6,
		reviews: 540,
		difficulty: 'Intermediate',
		calories: 620,
		cuisine: 'Spanish',
		ingredients: ['rice', 'shrimp', 'mussels', 'squid', 'saffron', 'paprika', 'stock', 'peas'],
		tags: ['seafood', 'one-pan'],
		dietary: [],
		instructions: `
			<ol>
				<li>Saute rice with aromatics and paprika.</li>
				<li>Add stock and saffron; simmer without stirring.</li>
				<li>Nestle seafood and peas; steam until done.</li>
			</ol>
		`
	},
	{
		id: 22,
		name: 'Jambalaya',
		image: 'https://images.unsplash.com/photo-1604908175365-1b3a5e94e6b2?auto=format&fit=crop&w=1200&q=80',
		totalTime: '55 mins',
		servings: 6,
		rating: 4.5,
		reviews: 330,
		difficulty: 'Intermediate',
		calories: 640,
		cuisine: 'Cajun',
		ingredients: ['rice', 'andouille sausage', 'chicken', 'shrimp', 'bell pepper', 'celery', 'onion', 'cajun seasoning'],
		tags: ['hearty'],
		dietary: [],
		instructions: `
			<ol>
				<li>Brown sausage and chicken; saute holy trinity.</li>
				<li>Add rice, tomatoes, stock; simmer.</li>
				<li>Fold in shrimp; finish until rice is tender.</li>
			</ol>
		`
	},
	{
		id: 23,
		name: 'Kimchi Fried Rice',
		image: 'https://images.unsplash.com/photo-1605472068863-6df0f5d2b610?auto=format&fit=crop&w=1200&q=80',
		totalTime: '18 mins',
		servings: 2,
		rating: 4.6,
		reviews: 260,
		difficulty: 'Beginner',
		calories: 490,
		cuisine: 'Korean',
		ingredients: ['rice', 'kimchi', 'gochujang', 'scallions', 'sesame oil', 'egg'],
		tags: ['spicy', 'quick'],
		dietary: [],
		instructions: `
			<ol>
				<li>Stir-fry kimchi with oil and gochujang.</li>
				<li>Add rice; fry until smoky.</li>
				<li>Top with fried egg and scallions.</li>
			</ol>
		`
	},
	{
		id: 24,
		name: 'Pineapple Fried Rice',
		image: 'https://images.unsplash.com/photo-1598866534731-9f7e6f7f0b4c?auto=format&fit=crop&w=1200&q=80',
		totalTime: '22 mins',
		servings: 3,
		rating: 4.4,
		reviews: 190,
		difficulty: 'Beginner',
		calories: 500,
		cuisine: 'Thai',
		ingredients: ['rice', 'pineapple', 'egg', 'cashews', 'curry powder', 'soy sauce', 'scallions'],
		tags: ['sweet-savory', 'quick'],
		dietary: [],
		instructions: `
			<ol>
				<li>Stir-fry aromatics; add rice and curry powder.</li>
				<li>Fold in pineapple, cashews, and egg.</li>
				<li>Season with soy sauce; finish with scallions.</li>
			</ol>
		`
	}
]);

// Build a simple ingredient catalog from recipes for autocomplete suggestions
const ingredientCatalog = Array.from(new Set(window.recipeDatabase.flatMap(r => r.ingredients)))
	.sort((a, b) => a.localeCompare(b));

// Saved recipes (basic impl)
window.savedRecipes = [];
window.toggleSaveRecipe = function(id) {
	if (window.savedRecipes.includes(id)) {
		window.savedRecipes = window.savedRecipes.filter(x => x !== id);
	} else {
		window.savedRecipes = [...window.savedRecipes, id];
	}
	const n = document.createElement('div');
	n.className = 'notification show';
	n.textContent = window.savedRecipes.includes(id) ? 'Recipe saved' : 'Recipe removed';
	document.getElementById('notification-container')?.appendChild(n);
	setTimeout(() => n.remove(), 1500);
};

// Modal to view recipe details
function createRecipeModal(recipe) {
	const existing = document.querySelector('.recipe-modal');
	if (existing) existing.remove();
	const modal = document.createElement('div');
	modal.className = 'recipe-modal';
	modal.innerHTML = `
		<div class="modal-content">
			<span class="close" title="Close">×</span>
			<div class="recipe-detail-header">
				<img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x300?text=Recipe'" />
				<div class="recipe-detail-info">
					<h2>${recipe.name}</h2>
					<div class="recipe-stats">
						<span><i class="fas fa-clock"></i> ${recipe.totalTime}</span>
						<span><i class="fas fa-fire"></i> ${recipe.calories} cal</span>
						<span><i class="fas fa-utensils"></i> ${recipe.cuisine}</span>
						<span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
					</div>
					<div class="recipe-rating-large">
						<span class="stars">${'★'.repeat(Math.floor(recipe.rating||0))}${(recipe.rating%1>=0.5)?'☆':''}${'✩'.repeat(5-Math.floor(recipe.rating||0)-(recipe.rating%1>=0.5?1:0))}</span>
						<span class="rating-text">${recipe.rating} (${recipe.reviews})</span>
					</div>
				</div>
			</div>
			<div class="recipe-detail-body">
				<div class="ingredients-section">
					<h3>Ingredients</h3>
					<ul>
						${(recipe.ingredients||[]).map(i => `<li>${i}</li>`).join('')}
					</ul>
				</div>
				<div class="instructions-section">
					<h3>How to Cook</h3>
					<div class="instructions">${recipe.instructions}</div>
				</div>
			</div>
		</div>
	`;
	document.body.appendChild(modal);
	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.closest('.close')) modal.remove();
	});
	document.addEventListener('keydown', function esc(ev) {
		if (ev.key === 'Escape') { modal.remove(); document.removeEventListener('keydown', esc); }
	});
}

// Optional hooks used by UI
window.viewRecipeDetails = function(id) {
	const recipe = window._lastResultsById?.[id] || window.recipeDatabase.find(r => String(r.id) === String(id));
	if (!recipe) return;
	createRecipeModal(recipe);
};
window.getVideoEmbedHTML = function(url, fallbackImg) {
	return '';
};

// Ingredient helpers referenced in HTML
window.removeIngredient = function(btn) {
	btn?.closest?.('.ingredient-item')?.remove?.();
};

function getSelectedIngredients() {
	const nodes = document.querySelectorAll('#ingredient-list .ingredient-name');
	return Array.from(nodes).map(n => n.textContent.trim().toLowerCase());
}

function ingredientImageUrl(name) {
	const q = encodeURIComponent(name);
	return `https://source.unsplash.com/featured/200x200/?${q}`;
}

function addIngredient(name) {
	if (!name) return;
	const norm = name.trim().toLowerCase();
	if (!norm) return;
	const existing = getSelectedIngredients();
	if (existing.includes(norm)) return;
	const list = document.querySelector('#ingredient-list .ingredient-items');
	if (!list) return;
	const item = document.createElement('div');
	item.className = 'ingredient-item';
	item.innerHTML = `
		<div class="ingredient-content">
			<img src="${ingredientImageUrl(norm)}" alt="${norm}" class="ingredient-image" onerror="this.src='https://via.placeholder.com/40?text=%20'">
			<span class="ingredient-name">${norm}</span>
			<span class="ingredient-calories">—</span>
		</div>
		<button class="remove-ingredient" title="Remove ingredient">
			<i class="fas fa-times"></i>
		</button>
	`;
	item.querySelector('.remove-ingredient').addEventListener('click', () => item.remove());
	list.appendChild(item);
}

function renderAutocomplete(matches, mount) {
	if (!mount) return;
	mount.innerHTML = '';
	if (!matches.length) {
		mount.style.display = 'none';
		return;
	}
	matches.slice(0, 8).forEach(name => {
		const el = document.createElement('div');
		el.className = 'autocomplete-item';
		el.innerHTML = `
			<div class="ingredient-info">
				<img class="ingredient-thumbnail" src="${ingredientImageUrl(name)}" alt="${name}" onerror="this.src='https://via.placeholder.com/40?text=%20'">
				<div class="ingredient-details">
					<div class="ingredient-name">${name}</div>
					<div class="ingredient-category">suggestion</div>
				</div>
			</div>
			<div class="ingredient-nutrition"><span class="calories">—</span></div>
		`;
		el.addEventListener('click', () => {
			addIngredient(name);
			mount.style.display = 'none';
			const input = document.getElementById('ingredient-search');
			if (input) input.value = '';
		});
		mount.appendChild(el);
	});
	mount.style.display = 'block';
}

function wireAutocomplete() {
	const input = document.getElementById('ingredient-search');
	const dropdown = document.getElementById('autocomplete-results');
	if (!input || !dropdown) return;

	function update() {
		const q = (input.value || '').trim().toLowerCase();
		if (!q) {
			dropdown.style.display = 'none';
			return;
		}
		const matches = ingredientCatalog.filter(n => n.includes(q));
		renderAutocomplete(matches, dropdown);
	}

	input.addEventListener('input', update);
	input.addEventListener('focus', update);
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			const value = input.value;
			if (value) {
				addIngredient(value);
				input.value = '';
				dropdown.style.display = 'none';
			}
		}
		if (e.key === 'Escape') {
			dropdown.style.display = 'none';
		}
	});
	document.addEventListener('click', (e) => {
		if (!dropdown.contains(e.target) && e.target !== input) {
			dropdown.style.display = 'none';
		}
	});

	const addBtn = document.getElementById('add-ingredient');
	if (addBtn) {
		addBtn.addEventListener('click', (e) => {
			e.preventDefault();
			const value = input.value;
			if (value) {
				addIngredient(value);
				input.value = '';
				dropdown.style.display = 'none';
			}
		});
	}
}

// Filter recipes based on selected ingredients; rank by match count
function getResultsFromCurrentState() {
	const selected = getSelectedIngredients();
	const requireAll = !!document.getElementById('require-all-ingredients')?.checked;
	if (!selected.length) return window.recipeDatabase.slice(0, 10);
	const scored = window.recipeDatabase.map(r => {
		const ing = r.ingredients.map(i => i.toLowerCase());
		const matches = selected.filter(s => ing.includes(s)).length;
		return { r, matches, total: selected.length, coversAll: matches === selected.length };
	}).filter(x => requireAll ? x.coversAll : x.matches > 0)
		.sort((a, b) => {
			if (requireAll) return a.r.totalTime.localeCompare(b.r.totalTime);
			return b.matches - a.matches || a.r.totalTime.localeCompare(b.r.totalTime);
		});
	return scored.map(x => x.r);
}

function parseInstructionSteps(instructionsHtml) {
	const container = document.createElement('div');
	container.innerHTML = instructionsHtml || '';
	const items = Array.from(container.querySelectorAll('li')).map(li => li.textContent.trim()).filter(Boolean);
	if (items.length) return items;
	const text = container.textContent || '';
	return text.split(/\n+|\.\s+/).map(s => s.trim()).filter(Boolean);
}

function createCookingOverlay(recipe) {
	const existing = document.querySelector('.cooking-mode');
	if (existing) existing.remove();
	const overlay = document.createElement('div');
	overlay.className = 'cooking-mode';
	const steps = parseInstructionSteps(recipe.instructions);
	overlay.innerHTML = `
		<div class="cooking-header">
			<h2><i class="fas fa-utensils"></i> ${recipe.name}</h2>
			<button class="close-cooking" title="Close">×</button>
		</div>
		<div class="cooking-timer">
			<div class="timer-display">
				<span class="time-left" id="cook-timer">00:00</span>
				<button class="timer-control" id="cook-toggle"><i class="fas fa-play"></i> Start</button>
			</div>
		</div>
		<div class="cooking-steps">
			<div class="cooking-progress" id="cook-progress">0 / ${steps.length} steps</div>
			<h3>Steps</h3>
			<div class="step-list">
				${steps.map((s, i) => `
					<div class="step-item" data-idx="${i}">
						<div class="step-number">${i+1}</div>
						<div class="step-content">
							<div class="step-text">${s}</div>
						</div>
						<button class="step-complete" title="Mark complete">✓</button>
					</div>
				`).join('')}
			</div>
		</div>
	`;
	document.body.appendChild(overlay);

	// Close
	overlay.querySelector('.close-cooking').addEventListener('click', () => overlay.remove());

	// Timer
	let running = false;
	let seconds = 0;
	let intervalId = null;
	const timerEl = overlay.querySelector('#cook-timer');
	const toggleBtn = overlay.querySelector('#cook-toggle');
	function renderTime() {
		const m = Math.floor(seconds / 60).toString().padStart(2, '0');
		const s = (seconds % 60).toString().padStart(2, '0');
		timerEl.textContent = `${m}:${s}`;
	}
	renderTime();
	toggleBtn.addEventListener('click', () => {
		running = !running;
		if (running) {
			toggleBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
			intervalId = setInterval(() => { seconds += 1; renderTime(); }, 1000);
		} else {
			toggleBtn.innerHTML = '<i class="fas fa-play"></i> Start';
			clearInterval(intervalId);
		}
	});

	// Steps completion
	let completed = 0;
	const progressEl = overlay.querySelector('#cook-progress');
	overlay.querySelectorAll('.step-item .step-complete').forEach(btn => {
		btn.addEventListener('click', () => {
			const item = btn.closest('.step-item');
			if (!item.classList.contains('completed')) {
				item.classList.add('completed');
				completed += 1;
				progressEl.textContent = `${completed} / ${steps.length} steps`;
				btn.disabled = true;
			}
		});
	});
}

// Remember last results for lookup
window._lastResultsById = {};

// Implement start cooking to open overlay with steps
window.startCooking = function(id) {
	const recipe = window._lastResultsById?.[id] || window.recipeDatabase.find(r => String(r.id) === String(id));
	if (!recipe) return;
	createCookingOverlay(recipe);
};

// Helper to derive a dish-specific image from its name/cuisine when needed
function dishImageFallback(recipe, w = 1200, h = 600) {
	const parts = [recipe?.name, recipe?.cuisine, 'food', 'plated'].filter(Boolean).join(',');
	return `https://source.unsplash.com/featured/${w}x${h}/?${encodeURIComponent(parts)}`;
}

function ensureRecipeImages(recipes) {
	return recipes.map(r => {
		const hasSpecific = typeof r.image === 'string' && r.image.startsWith('http');
		return { ...r, image: hasSpecific ? r.image : dishImageFallback(r) };
	});
}

// Wire search button and clear button
(function wireUI() {
	document.addEventListener('DOMContentLoaded', function() {
		wireAutocomplete();
		const searchBtn = document.getElementById('search-btn');
		const clearBtn = document.getElementById('clear-ingredients');
		const resultsSection = document.getElementById('recipe-results');

		if (searchBtn) {
			searchBtn.addEventListener('click', function() {
				let results = getResultsFromCurrentState();
				results = ensureRecipeImages(results);
				// remember last results by id for modal/cooking
				window._lastResultsById = Object.fromEntries(results.map(r => [r.id, r]));
				try { localStorage.setItem('lastSearchResults', JSON.stringify(results.map(r => r.id))); } catch (e) {}
				if (typeof window.renderRecipesReact === 'function') {
					window.renderRecipesReact(results);
				} else if (resultsSection) {
					resultsSection.style.display = 'block';
				}
			});
		}
		if (clearBtn) {
			clearBtn.addEventListener('click', function() {
				const list = document.querySelector('#ingredient-list .ingredient-items');
				if (list) list.innerHTML = '';
			});
		}

		// Auto-render prepared foods on load so users see dishes immediately
		let initial = getResultsFromCurrentState();
		initial = ensureRecipeImages(initial);
		window._lastResultsById = Object.fromEntries(initial.map(r => [r.id, r]));
		if (typeof window.renderRecipesReact === 'function') {
			window.renderRecipesReact(initial);
		} else if (resultsSection) {
			resultsSection.style.display = 'block';
		}
	});
})(); 