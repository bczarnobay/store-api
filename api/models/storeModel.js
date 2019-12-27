const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

var ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ItemSchema.plugin(mongoosePaginate);
mongoose.model('Items', ItemSchema);