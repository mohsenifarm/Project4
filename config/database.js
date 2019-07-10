const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://payam:payam12444@find-lost-fkn3e.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});