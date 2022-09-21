const express = require("express");
const router = express.Router();
const tourRouter = require("../controllers/tour.controllers");


router.route("/")
 .get(tourRouter.getTours)


    module.exports = router;