import express from 'express';
import {SexAgeState} from '../models/SexAgeState.js';

import { Conditional, NVSSProvisional, MDConfirmedAge } from '../models/DeathAge.js';

const SexAgeStateRouter = express.Router();

SexAgeStateRouter.route('/').get((req, res) => {
    SexAgeState.find().limit(300)
      .then(SexAgeState => res.json(SexAgeState))
      .catch(err => res.status(400).json('Error: ' + err));
});

const ConditionalRouter = express.Router();

ConditionalRouter.route('/').get((req, res) => {
    Conditional.find().limit(300)
      .then(Conditional => res.json(Conditional))
      .catch(err => res.status(400).json('Error: ' + err));
});

const NVSSProvisionalRouter = express.Router();

NVSSProvisionalRouter.route('/').get((req, res) => {
    NVSSProvisional.find().limit(300)
      .then(NVSSProvisional => res.json(NVSSProvisional))
      .catch(err => res.status(400).json('Error: ' + err));
});

const MDConfirmedAgeRouter = express.Router();

MDConfirmedAgeRouter.route('/').get((req, res) => {
    MDConfirmedAge.find().limit(300)
      .then(MDConfirmedAge => res.json(MDConfirmedAge))
      .catch(err => res.status(400).json('Error: ' + err));
});

export { SexAgeStateRouter, ConditionalRouter,
    NVSSProvisionalRouter, MDConfirmedAgeRouter};
