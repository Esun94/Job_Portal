const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobPackageSchema = new Schema({
    packageName: {
        type: String,
    },
    packageDuration: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    }
});

const JobPackage = mongoose.model('JobPackage', jobPackageSchema);

module.exports = JobPackage;