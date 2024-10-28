const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [
        {
            half: {
                type: Number,
                required: true
            },
            full: {
                type: Number,
                required: true
            }
        }
    ],
    description: {
        type: String,
        required: true
    }
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
