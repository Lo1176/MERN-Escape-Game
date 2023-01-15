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
}

export default bookingRoutes