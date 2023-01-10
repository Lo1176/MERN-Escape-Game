import Room from "../models/rooms.js";

const roomRoutes = (app) => {
  app.get("/rooms", (req, res) => {
    Room.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  });

  app.get("/rooms/:id", (req, res) => {
    const roomId= req.params.id
    Room.find({_id : roomId})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>{
        res.status(400).json(err)
      })
  })
};

export default roomRoutes;