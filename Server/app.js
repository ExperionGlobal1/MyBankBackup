const express = require('express');

const bodyParser = require('body-parser');
// const publicRoutes = require('./apps/public/routes');
// const userRoutes = require('./apps/user/routes');
const adminRoutes = require('./apps/admin/routes');
app.use('/api/v1/user',TransactionRoutes);
const dotEnv = require('dotenv');

const authMiddleware = require('./middlewares/authMiddlewares');

const cors = require('cors');

dotEnv.config();

const app = express();

// app.use(cors({origin: '*'}));

app.use(authMiddleware);
app.use(bodyParser.json({inflate: true}));
// app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/v1', publicRoutes);
app.use('home',userRoutes);
app.use('/api/v1/admin',adminRoutes);
// app.use('/api/v1/user', userRoutes); 


app.listen(80);

