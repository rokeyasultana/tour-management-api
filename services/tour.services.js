const Tour = require("../models/tour");

exports.getTourService= async (filter, { skip, limit = 10, sortBy, fields }) => {
    const tours = await Tour.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sortBy)
        .select(fields);
    const totalTour = await Tour.countDocuments(filter);
    const pageCount = Math.ceil(totalTour / limit)
    return { totalTour, pageCount, tours };
}
exports.createTours = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}

exports.getTourIdService = async (id) => {
    const tour = await Tour.findById(id);
    return tour;
}

exports.updateTourIdServer = async (id, data) => {
    const tour = await Tour.findById(id);
    const result = await tour.set(data).save();
    return result;
}

exports.getTrendingToursService = async (resultsToShow) => {
    const result = await Tour.find({})
      .limit(resultsToShow || 3)
      .sort({ viewer: -1, name: 1 });
    return result;
  };

  exports.getCheapestToursService = async (resultsToShow) => {
    const result = await Tour.find({})
      .limit(resultsToShow || 3)
      .sort({ price: 1, name: 1 });
    return result;
  };
