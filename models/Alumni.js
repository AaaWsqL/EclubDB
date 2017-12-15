var mongoose = require('mongoose'),
var Schema = mongoose.Schema;

var AlumniSchema = new Schema({
  name:String,
  e_mails:[String],
  phones:[String],
  website: String,
  linkedIN: String,
  imageURL: String, // photos to be stores in 'public/images/alumni'
  organisations : [{ type: Schema.Types.ObjectId, ref: 'organisations'}],
  batchOf: Number,
  
});

module.exports=mongoose.model('alumni', AlumniSchema);

