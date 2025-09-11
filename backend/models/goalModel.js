import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Please add a text value"],
            trim: true,
            maxlength: [500, "Text cannot be more than 500 characters"],
        },
    },
    {
        timestamps: true,
    }
);

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;
