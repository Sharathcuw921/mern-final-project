const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Player Model
const Player = require('../models/playerModel');

// POST a new player
router.post("/", async (req, res) => {
  const { name, number, position } = req.body;
  try {
    const player = await Player.create({ name, number, position });
    res.status(200).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all players
router.get("/", async (req, res) => {
  const players = await Player.find();
  res.status(200).json(players);
});

module.exports = router;
