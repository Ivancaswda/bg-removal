import mongoose from "mongoose";



 // getting data after registration through clerk and storing in our mongodb database in this form
const userSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    photo: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    creditBalance: {type: Number, default:5} // По дефолту
    // у пользователя будет 5 попыток чтобы использовать инструмент потом ему нужно будет платить
})
const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel