const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department"
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Employee', employeeSchema);