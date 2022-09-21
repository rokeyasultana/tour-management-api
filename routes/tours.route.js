const express = require("express");
const router = express.Router();
const tourRouter = require("../controllers/tour.controllers");


router.route("/")
 .get(tourRouter.getTours)
 .post(tourRouter.saveTour)

 router.route("/:id")
    .get(tourRouter.getTourById)
    .patch(tourRouter.updateTourById)

    router.route("/trending")
    .get(tourRouter.getTrendingTours)

router.route("/cheapest")
    .get(tourRouter.getCheapestTours )

    module.exports = router;