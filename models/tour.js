const mongoose = require("mongoose");

const tourSchema =  mongoose.Schema({
    name:{
      type: String,
      required: [true,"Please provide a name for this tour"],
      trim: true,
      unique:true,
      minLength:[3,"Name must be at least 3 characters."],
      maxLength:[100,"Name is too large"]
    },
  
    description:{
      type: String,
      required: true,
    },
  
    image:{
      type: String,
      required: [true, "Image is required"],
    },
  
    price:{
      type: Number,
      required: true,
      min:[0,"Price cant't be negative"],
    
    },
    viewer: {
        type: Number,
        default: 0,
        required: true
    }
}, {
    timestamps: true,
})
    


  const Tours = mongoose.model("Tours", tourSchema);

module.exports = Tours;