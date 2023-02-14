import mongoose from 'mongoose';
import {FavoriteSchema} from './backend/FavoriteSchema';



//Pass in FavoriteSchema
//import model
//pass into database
//create new instance of var storing model
//with new instance

const Favorite =mongoose.model('FavoriteSchema', Favorite);

export const addnewFavorite = (req,res)=>{
    let newFave = new Favorite(req.body);

    newFavorite.save((err, favorite)=>{
        if(err){
            res.send(err);
        }
        res.json(favorite);
    });
}
//findOneAndUpdate mongoose builtin funct
export const updateFavorite = (req,res)=>{
    Favorite.findOneAndUpdate({id: req.params.favoriteId}, req.body, {new: true}, (err, favorite) =>{
        if(err){
            res.send(err);
        }
        res.json(favorite);
    })
}

export const deleteFavorite = (req,res)=>{
    Favorite.remove({id: req.params.favoriteId}, req.body, {new: true}, (err, favorite) =>{
        if(err){
            res.send(err);
        }
        res.json({message: 'Removed favorite'}); //response body
    })
}
