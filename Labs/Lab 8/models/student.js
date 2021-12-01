const mongoose = require ('mongoose');

const studentSchema = mongoose.Schema({
    firstName: String,
    lastName: String 
})
const User = mongoose.model("User", studentSchema)
module.exports = mongoose.model("Student", studentSchema);