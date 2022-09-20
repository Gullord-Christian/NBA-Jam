// connecting to model
const Player = require("../models/player.model");

module.exports.getAllPlayers = (req, res) => {
  Player.find({})
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
};
// Using status(400) to display errors from backend

module.exports.createPlayer = (req, res) => {
  const {
    fullName,
    heightFeet,
    heightInches,
    weight,
    teamPlayedForOne,
    teamPlayedForTwo,
    teamPlayedForThree,
    positionOne,
    positionTwo,
    nickName,
    imageUrlSmall,
    imageUrlLarge,
    isActive,
    yearDrafted,
    pointsPerGame,
    reboundsPerGame,
    assistsPerGame,
    fieldGoalPercentage,
    threePointPercentage,
    freeThrowPercentage,
    playerDescription,
    wikiUrl,
    rankAllTime,
    otherAwards,
  } = req.body;
  Player.create(req.body)
    .then((player) => res.json(player))
    .catch((err) => res.status(400).json(err));
};

module.exports.getOnePlayer = (req, res) => {
  Player.findOne({ _id: req.params.id })
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
};

module.exports.getCompare = (req, res) => {
  Player.findOne({ fullName: req.params.fullName })
    .then((player) => res.json(player))
    .catch((err) => res.json(err));
};

module.exports.updatePlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPlayer) => res.json(updatedPlayer))
    .catch((err) => res.status(400).json(err));
};

module.exports.deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then((deleteOne) => res.json(deleteOne))
    .catch((err) => res.json(err));
};
// req.body = value to be updated
// new - true - return with update
// new - false - return original song
// by default: runValidators is false - no validations on update
// runValidators is true, validations on update.
