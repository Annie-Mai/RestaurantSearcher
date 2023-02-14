import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FavoriteSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    address: {
        type: String,
        required: 'Enter address'
    },
    phone: {
        type: String
    },
    distance: {
        type: String
    },
    rating: {
        type: Number
    },
    favoroteId: {
        type: Number
    }
});

