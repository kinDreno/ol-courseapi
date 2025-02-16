import { type Request, type Response } from "express";
import { promises as fs } from "fs";
import path from "path";

const apiController = {
  // Get all topics by course based on its params
  getAllTopicsByCourse: async (req: Request, res: Response): Promise<void> => {
    const { category, course } = req.params;
    const filePath = path.join(__dirname, `../models/${category}/${course}/source.json`);

    try {
      const data = await fs.readFile(filePath, "utf8");
      res.json(JSON.parse(data)); 
    } catch (error: any) {
      console.error("Error reading file:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // Get specific topic by name
  getSpecificByName: async (req: Request, res: Response): Promise<void> => {
    const { category, course, name } = req.params;
    const filePath = path.join(__dirname, `../models/${category}/${course}/source.json`);

    try {
      const data = await fs.readFile(filePath, "utf8");
      const topicsData = JSON.parse(data);

      if (!topicsData.topics) {
        res.status(500).json({ message: "Invalid data structure" });
        return;
      }

      const topic = topicsData.topics.find((t: any) => t.name.toLowerCase() === name.toLowerCase());

      if (!topic) {
        res.status(404).json({ message: "Topic not found" });
        return;
      }

      res.json(topic);
    } catch (error: any) {
      console.error("Error reading file:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default apiController;
