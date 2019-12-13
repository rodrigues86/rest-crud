var mongoose = require('mongoose');  
var userSchema = new mongoose.Schema({  
  name: String,
  lastName: String,
  birthday: Date,
  phones: [{numberType: String, number: Number, index: true}],
  created_at: { type: Date, default: Date.now },
  updated_at: Date
});

userSchema.pre('save', next => {
  // change the updated_at field to current date
  this.updated_at = new Date();
  next();
});

userSchema.pre('update', next => {
  // change the updated_at field to current date
  this.update({},{ $set: { updated_at: new Date() } });
  next();
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');