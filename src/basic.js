document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('foodsTableBody');

    fetch('http://localhost:3000/getAllFoods')
        .then(response => response.json())
        .then(data => {
            data.forEach(food => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${food.foodId}</td>
                    <td>${food.foodItemName}</td>
                    <td>${food.foodGroup}</td>
                    <td>${food.description}</td>
                    <td>${food.nutritionalInformation.calories}</td>
                    <td>${food.nutritionalInformation.macronutrients.proteins}</td>
                    <td>${food.nutritionalInformation.macronutrients.fats.total}</td>
                    <td>${food.nutritionalInformation.macronutrients.fats.saturated}</td>
                    <td>${food.nutritionalInformation.macronutrients.fats.unsaturated}</td>
                    <td>${food.nutritionalInformation.macronutrients.fats.trans}</td>
                    <td>${food.nutritionalInformation.macronutrients.carbohydrates}</td>
                    <td>${food.nutritionalInformation.macronutrients.sugar}</td>
                    <td>${food.nutritionalInformation.fiber}</td>
                    <td>${food.nutritionalInformation.sodium}</td>
                    <td>${food.nutritionalInformation.cholesterol}</td>
                    <td>${food.servingSize}</td>
                    <td>${food.allergens.join(', ')}</td>
                    <td>${food.ingredients.join(', ')}</td>
                    <td>${food.preparationMethods}</td>
                    <td>${food.certifications.join(', ')}</td>
                    <td>${food.countryOfOrigin}</td>
                    <td>${food.brandOrManufacturer}</td>
                    <td>${food.dietaryRestrictions.join(', ')}</td>
                    <td>${food.healthBenefits.join(', ')}</td>
                    <td>${food.bestPractices}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});