
import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { default: Favorite } = require('../frontend/src/components/Favorite');
const Schema = mongoose.Schema;

//Create schema and model- types of data in our app

const FavoriteSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    distance: String,
    rating: Number,
    favoriteId: Number
})

const Favorite = mongoose.model('favorite', FavoriteSchema);

module.exports = Favorite;