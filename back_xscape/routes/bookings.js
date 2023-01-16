import Booking from "../models/bookings.js"

const bookingRoutes = (app) => {
    app.get("/bookings", (req, res) => {
      Booking.find({})
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            res.status(400).json({ err });
          });
    });

    app.get("/booking/:roomId", (req, res) => {
        const roomId = req.params.roomId;
        Booking.findOne({ roomId: roomId })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
    })

    app.post("/bookings/add", (req, res) => {
        const booking= new Booking({
          ...req.body,
        });
        booking 
          .save()
          .then((data)=>{
            res.status(200).json(data)
          })
          .catch((err) => {
            res.status(400).json({err})
          })
        })

    app.put("/bookings/:roomId/:day/:daytime/update", (req, res) => {
        const roomId = req.params.roomId;
        const day= req.params.day
        const daytime = req.params.daytime
        if (daytime === "AM"){
          Booking.updateOne({roomId : roomId, 'calendar.day' : day}, {"calendar.$.time.AM": {...req.body}})
            .then((data) => {
              res.status(200).json({ message: "Données booking modifiées"});
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
        }else if (daytime === "PM"){
          Booking.updateOne({roomId : roomId, 'calendar.day' : day}, {"calendar.$.time.PM": {...req.body}})
            .then((data) => {
              res.status(200).json({ message: "Données booking modifiées"});
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
        }else {
          res.status(404)
        }
      });

      app.get("/history/:userId", (req, res) => {
        const userId = req.params.userId;
        let history = []
        Booking.find({ userId : userId })
            .then((data) => {
              // data.map((room) => {
              //   room.calendar.map((day) => {
              //     if (day.time.AM.userId === userId){
              //     history.push()
              //     // console.log(history)
              //   } else if (day.time.PM.userId === userId){
              //     history.push(data.calendar.time)
              //   }
              //   })
              // })
              //   // console.log(history)
              //   // res.json(history)
                res.status(200).json(data);
            })
            .catch((err) => {
                res.status(400).json({err: err});
            });
    })
}

export default bookingRoutes