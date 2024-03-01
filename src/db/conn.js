const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/FootInfo')
    .then(() => console.log('Database is connected'))
    .catch((error) => console.error('Error connecting to database:', error));
