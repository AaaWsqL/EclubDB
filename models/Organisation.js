var mongoose = require('mongoose'),
var Schema = mongoose.Schema;

var OrganisationSchema = new Schema({
  contactPoint:[{ type: Schema.Types.ObjectId, ref: 'contacts'}],
  name:String,
  type: String,// need to think about types
  logoURL: String, // in 'public/images/organisation/'
});

module.exports=mongoose.model('organisations', OrganisationSchema);

