const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    foodId :Number,
    foodItemName: String,
    foodGroup: String,
    description: String,
    nutritionalInformation: {
        calories: Number,
        macronutrients: {
            proteins: Number,
            fats: {
                total: Number,
                saturated: Number,
                unsaturated: Number,
                trans: Number
            },
            carbohydrates: Number,
            sugar: Number
        },
        micronutrients: {
            vitamins: [String],
            minerals: [String],
            otherNutrients: [String]
        },
        fiber: Number,
        sodium: Number,
        cholesterol: Number
    },
    servingSize: String,
    allergens: [String],
    ingredients: [String],
    preparationMethods: String,
    certifications: [String],
    countryOfOrigin: String,
    brandOrManufacturer: String,
    dietaryRestrictions: [String],
    healthBenefits: [String],
    bestPractices: String
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food; // Exporting the Food model
