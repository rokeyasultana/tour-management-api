const express = require("express");
const router = express.Router();
const tourRouter = require("../controllers/tour.controllers");


router.route("/")
 .get(tourRouter.getTours)
 .post(tourRouter.saveTour)

 router.route("/:id")

    .get(tourRouter.getTourId)
    .patch(tourRouter.updateTourId)


    router.route("/trending")
    .get(tourRouter.getTrending)

router.route("/cheapest")
    .get(tourRouter.getCheapest)

    module.exports = router;