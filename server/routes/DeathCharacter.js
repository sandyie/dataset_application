import express from 'express';

import { MDConfirmedRace, ProvisionalHHS, 
        AhProvisionaHis, AHProvisionalEdu } from '../models/DeathCharacter.js';


const MDConfirmedRaceRouter = express.Router();

MDConfirmedRaceRouter.route('/').get((req, res) => {
    MDConfirmedRace.find().limit(300)
      .then(MDConfirmedRace => res.json(MDConfirmedRace))
      .catch(err => res.status(400).json('Error: ' + err));
});

const ProvisionalHHSRouter = express.Router();

ProvisionalHHSRouter.route('/').get((req, res) => {
    ProvisionalHHS.find().limit(300)
      .then(ProvisionalHHS => res.json(ProvisionalHHS))
      .catch(err => res.status(400).json('Error: ' + err));
});

const AhProvisionalHisRouter = express.Router();

AhProvisionalHisRouter.route('/').get((req, res) => {
    AhProvisionaHis.find().limit(300)
      .then(AhProvisionaHis => res.json(AhProvisionaHis))
      .catch(err => res.status(400).json('Error: ' + err));
});

const AHProvisionalEduRouter = express.Router();

AHProvisionalEduRouter.route('/').get((req, res) => {
    AHProvisionalEdu.find().limit(300)
      .then(AHProvisionalEdu => res.json(AHProvisionalEdu))
      .catch(err => res.status(400).json('Error: ' + err));
});

export { MDConfirmedRaceRouter, ProvisionalHHSRouter, 
    AhProvisionalHisRouter, AHProvisionalEduRouter } 