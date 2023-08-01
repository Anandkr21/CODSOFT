const { Flight } = require("../model/flightMode")


exports.allflight = async(req,res) =>{
    try {
        const flight = await Flight.find();
        res.status(200).send({
            status:true,
            msg: "List of all flights.",
            data: flight
        })
    } catch (error) {
        res.status(500).send({
            status:false,
            msg:'Internal Server error.'
        });
    }
}


exports.addflight = async(req,res) =>{
    try {
        const addflight = req.body;
        await Flight.insertMany([{addflight}]);
        res.status(201).send({
            status:true,
            msg: "Flight Added!",
            data : addflight
        })
    } catch (error) {
        res.status(500).send({
            status: true,
            msg: "Internal server error."
        })   
    }
}