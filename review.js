// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//     Comment: String,
//     Rating:{
//         type: Number,
//         min: 1,
//         max: 5
//     },
//     createdAt:{
//         type: Date,
//         default: Date.now()
//     },
// });
// module.exports = mongoose.model("Review", reviewSchema);  //exporting the model


const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

module.exports = mongoose.model("Review", reviewSchema);
