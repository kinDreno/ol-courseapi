import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const dataPath = path.join(__dirname, "../models/topics.json");
const rawData = fs.readFileSync(dataPath, "utf-8");
const topicsData = JSON.parse(rawData);

const apiController = {
    getAllTopics: (req: Request, res: Response) => {
        res.json(topicsData);
    },

    getTopicByName: (req: Request, res: Response) => {
        const { name } = req.params;
        const topic = topicsData.topics.find((t: any) => t.name.toLowerCase() === name.toLowerCase());

        if (!topic) {
            return res.status(404).json({ message: "Topic not found" });
        }

        res.json(topic);
    }
};

export default apiController;
