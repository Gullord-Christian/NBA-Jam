const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
  app.get("/api/players", PlayerController.getAllPlayers); // get all
  app.post("/api/player", PlayerController.createPlayer); // create
  app.get("/api/player/:id", PlayerController.getOnePlayer); // get one
  app.put("/api/player/:id", PlayerController.updatePlayer); // update one
  app.delete("/api/player/:id", PlayerController.deletePlayer); // delete
  app.get("/api/players/:fullName", PlayerController.getCompare); // get two players
};
