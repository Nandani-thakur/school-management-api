

const db = require("../config/db");
const getDistance = require("../utils/distance");

//  Add School (PostgreSQL)
exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ message: "Invalid coordinates" });
    }

    const result = await db.query(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES ($1, $2, $3, $4) RETURNING id",
      [name, address, latitude, longitude]
    );

    res.status(201).json({
      message: "School added successfully",
      schoolId: result.rows[0].id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  List Schools (PostgreSQL)
exports.listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: "User location required" });
    }

    const result = await db.query("SELECT * FROM schools");

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const sortedSchools = result.rows
      .map((school) => {
        const distance = getDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        );

        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};