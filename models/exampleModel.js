const mongoose = require('mongoose');
const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
});
module.exports = mongoose.models.example
|| mongoose.model('example', exampleSchema);
// ExampleModel.create({
//     name: 'John Doe',
//     age: 30,         