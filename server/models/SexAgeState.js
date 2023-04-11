import mongoose from "mongoose";

const SexAgeStateSchema = new mongoose.Schema({
"Data As Of": {type: String},
"Start Date": {type: String},
"End Date": {type: String},
"Group": {type: String},
"Year": {type: Number, default: null},
"Month": {type: Number, default: null},
"State": {type: String},
"Sex": {type: String},
"Age Group": {type: String},
"COVID-19 Deaths": {type: Number},
"Total Deaths": {type: Number},
"Pneumonia Deaths": {type: Number},
"Pneumonia and COVID-19 Deaths": {type: Number},
"Influenza Deaths": {type: Number},
"Pneumonia, Influenza, or COVID-19 Deaths": {type: Number},
"Footnote": {type: String, default: null}
});

const SexAgeState = mongoose.model("SexAgeState", SexAgeStateSchema);

export { SexAgeState };

