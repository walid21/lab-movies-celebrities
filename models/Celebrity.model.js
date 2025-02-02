//  Add your code here
const { Schema, model } = require("mongoose");

// define the schema
const celebritySchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  occupation: {
    type: Schema.Types.String,
  },
  catchPhrase: {
    type: Schema.Types.String,
  },
});

// declare the model
const Celebrity = model("Celebrity", celebritySchema);

// export the model
module.exports = Celebrity;
