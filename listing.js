const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image: {
        type:  String,
        default: "https://www.google.com/search?q=foreign+image&sca_esv=3e7026d05fa1ec3b&udm=2&biw=1440&bih=812&sxsrf=AHTn8zqotDHnaaVu9DJc7OX4eiPkEgrebw%3A1738221857348&ei=ISmbZ-v8FN-WwbkPlbaSuQc&ved=0ahUKEwirkeSC9ZyLAxVfSzABHRWbJHcQ4dUDCBE&uact=5&oq=foreign+image&gs_lp=EgNpbWciDWZvcmVpZ24gaW1hZ2UyBRAAGIAEMgUQABiABDIFEAAYgAQyBBAAGB4yBBAAGB4yBBAAGB4yBBAAGB4yBhAAGAUYHjIGEAAYBRgeMggQABgFGAoYHkjLTFAAWOZCcAB4AJABAJgBjQOgAZUjqgEEMy0xM7gBA8gBAPgBAZgCDaAC2SPCAgQQIxgnwgIKEAAYgAQYQxiKBcICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAg0QABiABBixAxhDGIoFwgIOEAAYgAQYsQMYgwEYigWYAwCSBwYzLTExLjKgB_1L&sclient=img#vhid=59Bfk4hwqvKbwM&vssid=mosaic",
        set: (v) => v === "" ? "airbnb.jpg" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
    },]
});
 
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
