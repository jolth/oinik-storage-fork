"use strict";
import pool from "../db.js"; 

export const getDevices = async (req, res) => {
  const devices = await pool.query("SELECT * FROM gps ORDER BY id");
  //res.status(200).send(devices.rows);
  res.send(devices.rows);
}
