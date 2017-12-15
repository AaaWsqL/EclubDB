var mongoose = require('mongoose'),
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name:String,
  e_mails:[String],
  phones:[String],
  website: String,
  linkedIN: String,
  imageURLs:[String] , // photos to be stores in 'public/images/contacts'
  organisation : { type: Schema.Types.ObjectId, ref: 'organisations'},
  event: { type: Schema.Types.ObjectId, ref: 'events'},
  handler: { type: Schema.Types.ObjectId, ref: 'team_members'}
});

module.exports=mongoose.model('contacts', ContactSchema);

