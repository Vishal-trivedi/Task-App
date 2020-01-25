const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required: true,
        trim:true

    },
    completed:{
        type:Boolean,
        default:false


    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})




const Lask = mongoose.model('Lask',taskSchema)
module.exports = Lask
 