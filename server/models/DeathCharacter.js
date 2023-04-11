import mongoose from "mongoose";

const MDConfirmedRaceSchema = new mongoose.Schema({
    OBJECTID: { type: Number },
    DATE: { type: String },
    African_American: { type: Number },
    White: { type: Number },
    Hispanic: { type: Number },
    Asian: { type: Number },
    Other: { type: Number },
    Not_Available: { type: Number },
});

const MDConfirmedRace = mongoose.model("MDConfirmedRace", MDConfirmedRaceSchema);

const ProvisionalHHSSchema = new mongoose.Schema({
    "Data As Of": { type: String },
    "Start Date": { type: String },
    "End Date": { type: String },
    "Group": { type: String },
    "Year": { type: String },
    Month: { type: String },
    "MMWR Week": { type: Number },
    "Week-Ending Date": { type: String },
    "HHS Region": { type: String },
    "Race and Hispanic Origin Group": { type: String },
    "Age Group": { type: String },
    "COVID-19 Deaths": { type: Number },
    "Total Deaths": { type: Number },
    Footnote: { type: String },
});

const ProvisionalHHS = mongoose.model("ProvisionalHHS", ProvisionalHHSSchema);

const AhProvisionalHispanicSchema = new mongoose.Schema({
    "Data As Of": { type: String },
    "Jurisdiction of Occurrence": { type: String },
    Year: { type: Number },
    Sex: { type: String },
    "Race and Hispanic Origin": { type: String },
    "Age Group": { type: String },
    "COVID (U071, Multiple Cause of Death)": { type: Number },
    Septicemia: { type: Number },
    "Malignant Neoplasms": { type: Number },
    "Diabetes Mellitus": { type: Number },
    "Alzheimer Disease": { type: Number },
    "Influenza and Pneumonia": { type: Number },
    "Chronic Lower Respiratory Diseases": { type: Number },
    "Other Diseases of Respiratory System": { type: Number },
    "Nephritis, Nephrotic Syndrom, and Nephrosis": { type: Number },
    "Symptoms, Signs, and Abnormal Clinical and Laboratory Findings, Not Elsewhere Classified": { type: Number },
    "Circulatory Diseases": { type: Number },
    "Hypertensive Diseases": { type: Number },
    "Cerebrovascular Diseases": { type: Number },
    "flag_covid": { type: String },
    "flag_sept": { type: String },
    "flag_neopl": { type: String },
    "flag_diab": { type: String },
    "flag_alz": { type: String },
    "flag_inflpn": { type: String },
    "flag_clrd": { type: String },
    "flag_otherresp": { type: String },
    "flag_nephr": { type: String },
    "flag_otherunk": { type: String },
    "flag_circ": { type: String },
    "flag_hypt": { type: String },
    "flag_stroke": { type: String }
});

const AhProvisionaHis = mongoose.model("AhProvisionaHis", AhProvisionalHispanicSchema);

const AHProvisionalEducationSchema = new mongoose.Schema({
    "Data as of": { type: String },
    "Start Date": { type: String },
    "End Date": { type: String },
    "Education Level": { type: String },
    "Race or Hispanic Origin": { type: String },
    "COVID-19 Deaths": { type: Number },
    "Total Deaths": { type: Number },
    });
    
const AHProvisionalEdu = mongoose.model("AHProvisionalEdu", AHProvisionalEducationSchema);



export { MDConfirmedRace, ProvisionalHHS, AhProvisionaHis, AHProvisionalEdu};