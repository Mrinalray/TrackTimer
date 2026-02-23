require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TrackTimer Backend is running!');
});

app.post('/api/auth/session', async (req, res) => {
  const { session } = req.body;
  if (!session) return res.status(400).json({ error: 'No session provided' });
  res.json({ message: 'Session received successfully', user: session.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});