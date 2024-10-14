import express from 'express';
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import EnquiryR from './Routes/EnquiryR.js'; 
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors()); 

app.get('/', (request, response) => { 
    console.log(request);
    return response.status(200).send("Welcome");
});

app.use('/enquiries', EnquiryR);

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
