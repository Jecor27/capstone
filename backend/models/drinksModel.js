import mongoose from 'mongoose'
const Schema = mongoose.Schema

const DrinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true
            },
            amount: {
                type: String,
                required: true
            }, // e.g., "2 oz", "1 tbsp"
            unit: { type: String } // Optional field for measurement unit
        }
    ],
    instructions: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Cocktail', 'Mocktail', 'Smoothie', 'Coffee', 'Tea', 'Juice', 'Other'],
        required: true
    },
    alcoholContent: {
        type: Boolean,
        default: false
    },
    glassType: {
        type: String, // e.g., "Highball", "Martini", "Mug"
        trim: true
    }
}, { timestamps: true });

export default mongoose.model('Drink', DrinkSchema);