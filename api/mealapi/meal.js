const loadmeals = (searchText) => {
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}


const displayMeals = meals => {
    //step 1
    const mealscontainer = document.getElementById('meals-container');
    mealscontainer.innerText = '';
    meals.forEach(meal => {
        //console.log(meal);
        //step 2
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        //step 3
        mealDiv.innerHTML = `      
          <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
                 <button
                    type="button" onclick="loadMealdetails2(${meal.idMeal})"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#mealdescription"
                    >
                    Launch demo modal
                    </button>
            </div>
          </div>
        `
        mealscontainer.appendChild(mealDiv);
    });
    
}
const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    loadmeals(searchText);
    console.log(searchText)
}

//async await
const loadMealdetails2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.meals[0]);
  } catch(error) {
    colsole.log(error);
  }
}
const loadMealdetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]));
}
 const displayDetails = meal => {
      document.getElementById('mealdescriptionLabel').innerText = meal.strMeal;
      const mealbodysee = document.getElementById('mealbody');
      mealbodysee.innerHTML = `
            <img src="${meal.strMealThumb}" class="img-fluid" />
            <p class="mt-2">${meal.strInstructions}</p>
      `
    }
loadmeals('fish');