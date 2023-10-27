const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Watch Routes.
const watchesRoutes = require('./routes/watches');
const usersRouter = require('./routes/users');
const storiesRouter = require('./routes/stories');


// Use routes
app.use('/watches', watchesRoutes);
app.use('/users', usersRouter);
app.use('/stories', storiesRouter);


app.get('/',(req,res) => {
    res.send('Home');

});

app.listen(PORT, () => {

console.log(`Server is up and running on ${PORT}`) 
});