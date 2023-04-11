import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import exercisesRouter from "./routes/exercises.js";
import { SexAgeStateRouter, ConditionalRouter , 
      NVSSProvisionalRouter, MDConfirmedAgeRouter} from "./routes/SexAgeState.js";

import { MDConfirmedRaceRouter, ProvisionalHHSRouter, 
      AhProvisionalHisRouter, AHProvisionalEduRouter } from "./routes/DeathCharacter.js";

// data imports
// import Exercise from './models/exercise.js';
// import {SexAgeState} from "./models/SexAgeState.js";
import { Conditional, NVSSProvisional, MDConfirmedAge } from "./models/DeathAge.js";

import {
  dataAffiliateStat,
  SexAgeStateStat,
  ConditionalStateStat,
} from "./data/index.js";


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

/* ROUTES */
app.use('/exercises', exercisesRouter);

// DEATH AGE 
app.use('/sexagestate', SexAgeStateRouter);
app.use('/conditional', ConditionalRouter);
app.use('/nvssprovisional', NVSSProvisionalRouter);
app.use('/mdconfirmage', MDConfirmedAgeRouter);

// DEATH CHARACTERISTIC
app.use('/mdconfirmedrace', MDConfirmedRaceRouter);
app.use('/provisionalhhs', ProvisionalHHSRouter);
app.use('/ahprovisionalhis', AhProvisionalHisRouter);
app.use('/ahprovisionaledu', AHProvisionalEduRouter);



/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // Exercise.insertMany(dataAffiliateStat)
    // SexAgeState.insertMany(SexAgeStateStat)
    // Conditional.insertMany(ConditionalStateStat)

  })
  .catch((error) => console.log(`${error} did not connect`));