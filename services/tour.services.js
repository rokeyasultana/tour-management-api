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