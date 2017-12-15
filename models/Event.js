var mongoose = require('mongoose'),
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name:String,
  date: String,
  type: String,
  imageURLs: [String], // 'public/images/events/{event_name}' generated while uploading
  organisers : [{ type: Schema.Types.ObjectId, ref: 'team_members'}],
  sponsors: [{ type: Schema.Types.ObjectId, ref: 'organisations'}],
  collaborations: [{ type: Schema.Types.ObjectId, ref: 'organisations'}],
  attendantsCount: Number,
  total_expense: Number
});

module.exports=mongoose.model('events', EventSchema);

