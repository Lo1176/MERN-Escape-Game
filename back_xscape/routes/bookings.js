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
        Booking.find({ roomId: roomId })
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

    app.put("/bookings/:roomId/update", (req, res) => {
        const roomId = req.params.roomId;
        Booking.updateOne({roomId : roomId}, {...req.body})
          .then((data) => {
            res.status(200).json({ message: "Données booking modifiées"});
          })
          .catch((err) => {
              res.status(400).json({ err });
          });
      });
}

export default bookingRoutes