var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: String,
  gender: String,
  id: String,
  feet: String,
  inch: String,
  weight: String,
  fitnessGoal: String,
  token: String
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;