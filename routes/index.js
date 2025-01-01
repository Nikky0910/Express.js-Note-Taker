const router = require("express").Router();

const htmlRoute = require("./html/index");
const apiRoute= require("./api/index");


// http://localhost:3001/api
router.use("/api", apiRoute)


// http://localhost:3001/
router.use("/", htmlRoute);






module.exports = router;
