const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes');
const adminProductsRouter = require('./routes/admin/products-routes')
const ShopProductsRouter = require('./routes/shop/products-routes');
const shopCartRouter = require('./routes/shop/cart-routes');

mongoose.connect("mongodb+srv://anubhavkrsingh911:SAGqFKnxs5FIE2ii@clusterquickcart.5wofc6s.mongodb.net/"

)
.then(()=>console.log('mongooDB connected'))
.catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173',
        methods : ['GET','POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use('/api/admin/product', adminProductsRouter);
app.use('/api/shop/product', ShopProductsRouter);
app.use('/api/shop/cart',shopCartRouter);

app.listen(PORT, ()=> console.log(`Server is now runing on port ${PORT}`)) 