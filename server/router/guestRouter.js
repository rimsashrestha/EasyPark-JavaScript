const express = require ('express');
const router = express.Router();
const guestVehicleInfo = require('../model/guestSchema')

router.post("/", (req, res) => {

    const location = req.body.location;
    const firstName= req.body.firstName;
    const lastName= req.body.lastName;
    const phoneNumber= req.body.phoneNumber;
    const unitNumber= req.body.unitNumber;
    const vehicleMake= req.body.vehicleMake;
    const vehicleModel= req.body.vehicleModel;
    const lisencePlate= req.body.lisencePlate;
    const last4Digits= req.body.last4Digits;
    const spotNumber = req.body.spotNumber;
    

    const registerVehicle = new guestVehicleInfo({
        location,
        firstName,
        lastName,
        phoneNumber,
        unitNumber,
        vehicleMake,
        vehicleModel,
        lisencePlate,
        last4Digits,
        spotNumber
    })

    registerVehicle.save()
})

module.exports = router