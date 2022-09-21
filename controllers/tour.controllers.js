const {getTourService,createTours,getToursId,updateTourId,updateTourById } = require("../services/tour.services");
exports.getTours= async (req, res) => {
    try {
        let filters = { ...req.query };
        const excludeFields = ['sort', 'page', 'limit'];

        excludeFields.forEach(field => delete filters[field]);

        let filterStrings = JSON.stringify(filters);

        filterStrings = filterStrings.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
        filters = JSON.parse(filterStrings);

        const queries = {};

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join();
            queries.sortBy = sortBy;
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            queries.fields = fields;
        }
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt((limit));
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        const tours = await getTourService(filters, queries);

        res.status(200).json({
            status: "Success",
            data: tours
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Get Request Failed",
            error: error.message
        })
    }
}

exports.saveTour = async (req, res) => {
    try {
        const result = await createTours(req.body);

        res.status(200).json({
            stats: "Success",
            message: "Successfully saved tour",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't save Tour",
            error: error.message,
        })
    }
}
exports.getTourId = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await getToursId(id);
        result.views += 1;
        const updatedResult = await updateTourId(id, result);

        res.status(200).json({
            status: "Success",
            message: "Successfully found Tour",
            data: updatedResult,
        })
    }
    catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get tour",
            error: error.message
        })
    }
}
exports.updateTourId = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await updateTourById(id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfully found Tour",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't update Tour",
            error: error.message,
        })
    }
}