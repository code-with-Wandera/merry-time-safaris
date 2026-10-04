
import express from 'express';
import pool from '../config/db.config.js';

const router = express.Router();

// GET all safaris
router.get('/safaris', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM safaris');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch safaris' });
  }
});

// POST a new tailor-made safari enquiry
router.post('/enquiries', async (req, res) => {
  const { name, email, whatsapp, travelers, travel_dates, destinations_interest, approximate_budget, special_requests } = req.body;
  
  try {
    const query = `
      INSERT INTO enquiries (name, email, whatsapp, travelers, travel_dates, destinations_interest, approximate_budget, special_requests)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [
      name, email, whatsapp, travelers, travel_dates, destinations_interest, approximate_budget, special_requests
    ]);
    
    res.status(201).json({ message: 'Enquiry submitted successfully!', enquiryId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit enquiry' });
  }
});

export default router;