module.exports = function(app){
    app.use('/register', require('./routes/register'));
}