import express from "express";
import { config } from 'dotenv';
import { default as mongoose } from "mongoose";


import hotelsRoutes from './routes/hotelsRoutes.js';
import roomsRoutes from './routes/roomsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import authRoutes from './routes/authRoutes.js';



const app = express();
config();


const PORT = process.env.PORT || 4000;
const MONGOOSE_URI = process.env.MONGOOSE_URI;


app.use('/api/hotels', hotelsRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);



app.listen(PORT, async () => {
	try {
		await mongoose.connect(MONGOOSE_URI);
		console.log(`Server is running at port ${PORT} and database connected successfully`);
	}
	catch (err) {
		console.log(`database is not connected and error is ${err.message}`);
	}
})