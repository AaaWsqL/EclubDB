var mongoose = require('mongoose'),
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name:String,
  e_mails:[String],
  phones:[String],
  imageURL: String,  // photos to be stores in 'public/images/team'
  departments : [String],
  position: String,
  branch: String,
  batchOf: Number,
  
});

module.exports=mongoose.model('team_members', TeamSchema);

