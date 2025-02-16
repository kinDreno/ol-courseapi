import express from "express";
import apiController from "../controllers/api_controller";

const api_router = express.Router();

api_router.get("/api/:category/:course", apiController.getAllTopicsByCourse);
api_router.get("/api/:category/:course/:name", apiController.getSpecificByName);

export default api_router;