import User from "../models/users.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
// c'est quoi saltRounds
const saltRounds = 10;



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

  // app.get("/users/:email", (req, res) => {
  //   const email = req.params.email;
  //   User.find({ email: email })
  //     .then((data) => {
  //       res.status(200).json(data);
  //     })
  //     .catch((err) => {
  //         res.status(400).json({ err });
  //     });
  // });

  app.post("/users/add", async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, saltRounds)

    new User({
      ...req.body,
      password: hash,
      creationDate: new Date()
    })
      .save()
      .then((data)=>{
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(400).json({err})
      })
    })

  // login
  app.post('/login', async (req, res) => {
    const user = await User.find({email: req.body.email})
    if (user.length === 0) {
      res.json({status:404, msg:"cet email n'existe pas"})
    } else {
      const matchPassword = await bcrypt.compare(req.body.password, user[0].password)
      if (matchPassword) {
        const token = jwt.sign({ _id: user[0]._id }, "hereisthesecrettokeninthe.env", {
          expiresIn: "1h",
        });
        res.json({status: 200, token, user: user[0]})
      } else {
        res.json({status: 401, msg:'mauvais mot de passe'})
      }
    }
  })

  //Middlewear
  function withAuth(req,res,next){
    const token=req.headers['authorization']
    if(token === null){
      res.json({status:401, msg:"bad token"})
    }
    jwt.verify(token,"hereisthesecrettokeninthe.env", function(err, decoded){
      if(err){
        res.json({status:401,msg:"bad token", error: err})
      }
      req.body._id=decoded._id
      next()
    })
  }

  app.get('/checkToken',withAuth,(req,res) => {
    User.findOne({_id:req.body._id})
      .then((data) => {
        res.status(200).json({msg:"token ok", user: data})
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