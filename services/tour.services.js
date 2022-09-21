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

exports.getToursId= async (id) => {
    const tour = await Tour.findById(id);
    return tour;
}
exports.updateTourById= async (id, data) => {
    const tour = await Tour.findById(id);
    const result = await tour.set(data).save();
    return result;
}
exports.getTrendingTour = async () => {
    const tours = await Tour.find({}).sort({ viewer: -1 }).limit(3);
    return tours;
}

exports.getCheapestTour = async () => {
    const tours = await Tour.find({}).sort({ price: 1 }).limit(3);
    return tours;
}
