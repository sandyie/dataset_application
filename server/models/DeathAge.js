import mongoose from "mongoose";

const ConditionAgeSchema = new mongoose.Schema({
    "Data As Of": { type: String },
    "Start Date": { type: String },
    "End Date": { type: String },
    Group: { type: String },
    State: { type: String },
    "Condition Group": { type: String },
    Condition: { type: String },
    "ICD10_codes": { type: String },
    "Age Group": { type: String },
    "COVID-19 Deaths": { type: Number },
    "Number of Mentions": { type: Number },
});

const Conditional = mongoose.model("Conditional", ConditionAgeSchema);


const NVSSProvisionalSchema = new mongoose.Schema({
    "Data as of": { type: String },
    "Start Date": { type: String },
    "End Date": { type: String },
    Group: { type: String },
    "HHS Region": { type: Number },
    State: { type: String },
    "Place of Death": { type: String },
    "Age group": { type: String },
    "COVID-19 Deaths": { type: Number },
    "Total Deaths": { type: Number },
    "Pneumonia Deaths": { type: Number },
    "Pneumonia and COVID-19 Deaths": { type: Number },
    "Influenza Deaths": { type: Number },
    "Pneumonia, Influenza, or COVID-19 Deaths": { type: Number },
});

const NVSSProvisional = mongoose.model("NVSSProvisional", NVSSProvisionalSchema);

const MDConfirmedAgeSchema = new mongoose.Schema({
    OBJECTID: { type: Number },
    DATE: { type: String },
    "Age_0_to_9": { type: Number },
    "Age_10_to_19": { type: Number },
    "Age_20_to_29": { type: Number },
    "Age_30_to_39": { type: Number },
    "Age_40_to_49": { type: Number },
    "Age_50_to_59": { type: Number },
    "Age_60_to_69": { type: Number },
    "Age_70_to_79": { type: Number },
    "Age_80plus": { type: Number },
    "Age_Unknown": { type: Number },
});
    
const MDConfirmedAge = mongoose.model("MDConfirmedAge", MDConfirmedAgeSchema);
    

    

export { Conditional, NVSSProvisional, MDConfirmedAge };