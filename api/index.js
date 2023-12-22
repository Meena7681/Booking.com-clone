import express from "express";
import dotenv from 'dotenv';
import { default as mongoose } from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";



import hotelsRoutes from './routes/hotelsRoutes.js';
import roomsRoutes from './routes/roomsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import authRoutes from './routes/authRoutes.js';



const app = express();
dotenv.config();



const PORT = process.env.PORT || 4000;
const MONGOOSE_URI = process.env.MONGOOSE_URI;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));



app.use('/hotels', hotelsRoutes);
app.use('/rooms', roomsRoutes);
app.use('/users', usersRoutes);
app.use('/auth', authRoutes);


app.use((err, req, res, next) => {
	if (err.status) {
		return res.status(err.status).json({ msg: err.message });
	}
	else {
		return res.status(500).json({ msg: err.message });
	}
})



app.listen(PORT, async () => {
	try {
		await mongoose.connect(MONGOOSE_URI);
		console.log(`Server is running at port ${PORT} and database connected successfully`);
	}
	catch (err) {
		console.log(`database is not connected and error is ${err.message}`);
	}
})