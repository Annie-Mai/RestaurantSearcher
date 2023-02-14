import{
    addnewFavorite, 
    getFavorite, 
    getFavoriteID, 
    updateFavorite,
    deleteFavorite 
}from './backend/src/controllers'

const routes = (app) =>{
    app.route('/favorite')
    .get((req, res, next) =>{
        console.log('Request from: ${req.originalUrl}')
        console.log('Request type: ${req.method}')
        next();
    }, getFavorite)
}

.post(addnewFavorite);

app.route('/favorites/:favoriteId');
.get(getFavoriteID);
.put(updateFavorite);

.delete(deleteFavorite);

app.route('/test')
.get((req, res, next)=>{ res.send(`TEST Get${next()}`); })
.post((req, res, next)=>{ res.send('TEST Post')})
.put((req, res, next)=>{ res.send('TEST Put')})
.delete((req, res, next)=>{ res.send('TEST Delete')}) 

export default routes;