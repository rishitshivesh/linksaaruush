const { Schema, model } = require("mongoose");
const linkSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = {
  competitionModel: model("competition", linkSchema),
  certificateModel: model("certificate", linkSchema),
  webinarModel: model("webinar", linkSchema),
  workshopModel: model("workshop", linkSchema),
};
