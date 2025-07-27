const mongoose = require('mongoose');
const fileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  filename: String,
  data: Array,
});
module.exports = mongoose.model('File', fileSchema);