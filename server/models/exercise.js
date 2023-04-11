import mongoose from "mongoose";


const ExerciseSchema = new mongoose.Schema({
    "Week Ending Date": { type: Date },
    "State": { type: String },
    "Observed Number": { type: Number },
    "Upper Bound Threshold": { type: Number },
    "Exceeds Threshold": { type: Boolean },
    "Average Expected Count": { type: Number },
    "Excess Estimate": { type: Number },
    "Total Excess Estimate": { type: Number },
    "Percent Excess Estimate": { type: Number },
    "Year": { type: Number },
    "Type": { type: String },
    "Outcome": { type: String },
    "Suppress": { type: String },
    "Note": { type: String }
  });

const Exercise = mongoose.model("Exercise", ExerciseSchema);
export default Exercise;