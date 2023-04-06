import express from "express"
import morgan from 'morgan'
import 'dotenv/config'
import './src/dataBase/connectDB.js'

import authRouter from './src/routes/auth.route.js'
import userRouter from './src/routes/user.route.js'
import productRouter from './src/routes/product.route.js'
import jobRouter from './src/routes/job.route.js'
import serviceRouter from './src/routes/service.route.js'
import AdminRouter from './src/routes/admin.route.js'
import emailRouter from './src/routes/mail.route.js'


const app = express();


const whiteList = [process.env.ORIGIN]

app.use(
    cors({
        origin: function (origin, callback) {
            console.log("😲😲😲 =>", origin);
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                "Error de CORS origin: " + origin + " No autorizado!"
            );
        },
        credentials: true,
    })
);

app.use(morgan('dev'));
app.use(express.json());

app.use('/', authRouter);
app.use('/user', userRouter)
app.use('/admin', AdminRouter)

app.use('/product', productRouter)
app.use('/job', jobRouter)
app.use('/service', serviceRouter)
app.use('/confirm', emailRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('server listenning on port', port) })