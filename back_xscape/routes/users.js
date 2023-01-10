import User from "../models/users.js";

const userRoutes = (app) => {
  app.get("/users", (req, res) => {
    User.find({})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  });

  app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    User.find({ _id: id })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
          res.status(400).json({ err });
      });
  });

  app.post("/users/add", (req, res) => {
    const user= new User({
      ...req.body,
      creationDate: new Date(),
    });
    user 
      .save()
      .then((data)=>{
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(400).json({err})
      })
    })

  app.put("/users/:id/update", (req, res) => {
    const userId = req.params.id;
    User.updateOne({_id : userId}, {...req.body})
      .then((data) => {
        res.status(200).json({ message: "Données utilisateur modifiées"});
      })
      .catch((err) => {
          res.status(400).json({ err });
      });
  });

  app.delete("/users/:id/delete", async (req, res) => {
    const userId = req.params.id;
    const result = await User.deleteOne({ _id: userId });
    res.json({ status: 200});
  });

};

export default userRoutes;