const express = require('express');
const app = express();
const port = 3000;
const loginRoutes = require('./controller/user/login');
const productRoutes = require('./controller/product/productRoutes');
const registerRoutes = require('./controller/user/register')

app.use(express.json())
app.use(express.static('public'))


app.use('/api/login', loginRoutes)
app.use('/api/product', productRoutes)
app.use('/api/register', registerRoutes)


app.listen(port, () => {
    console.log(`app on server http://localhost:${port}`)
})