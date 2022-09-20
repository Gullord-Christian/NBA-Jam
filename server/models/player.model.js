// Importing mongoose using the require statement
const mongoose = require("mongoose");
// if( !mongoose.Types.ObjectId.isValid(_id) ) return false;

// this creates a new schema instance from the object constructor, this will define how each new document put into the collection will be formatted

const PlayerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Title is required"],
    },
    heightFeet: {
      type: Number,
      required: [true, "Height is required"],
    },
    heightInches: {
      type: Number,
      required: [true, "Height is required"],
    },
    rankAllTime: {
      type: Number,
    },
    otherAwards: {
      type: String,
    },
    weight: {
      type: Number,
      required: [true, "Weight is required"],
    },
    teamPlayedForOne: {
      type: String,
    },
    teamPlayedForTwo: {
      type: String,
    },
    teamPlayedForThree: {
      type: String,
    },
    positionOne: {
      type: String,
      required: [true, "Please enter position(s) played"],
    },
    positionTwo: {
      type: String,
    },
    nickName: {
      type: String,
    },
    imageUrlSmall: {
      type: String,
    },
    imageUrlLarge: {
      type: String,
    },
    wikiUrl: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    yearDrafted: {
      type: Number,
      required: [true, "Please enter year drafted. "],
    },
    pointsPerGame: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Please enter points per game. "],
    },
    reboundsPerGame: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Please enter rebounds per game. "],
    },
    assistsPerGame: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Please enter assists per game.  "],
    },
    fieldGoalPercentage: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Please enter field goal percentage "],
    },
    threePointPercentage: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Please enter three point percentage. "],
    },
    freeThrowPercentage: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Please enter free throw percentage. "],
    },
    playerDescription: {
      type: String,
    },

    allStarApps: { type: Number, required: true },
    allNbaTeams: { type: Number, required: true },
    mostValuablePlayer: { type: Number, required: true },
    nbaChamps: { type: Number, required: true },
    allDefTeams: { type: Number, required: true },
  },
  { timestamps: true }
);

// mongoose.model takes the blueprint above and creates the database collection out of the model. We create a new 'Song' variable to export and set it's returned value of mongoose.model
module.exports = mongoose.model("Player", PlayerSchema);
