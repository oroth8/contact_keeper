const express = require('express');

const app = express();

app.get('/', (req, res)=> res.json({msg: "Welcome to the Contact Keeper API"}));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
