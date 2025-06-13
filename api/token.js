import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET allowed for \'/api/token.js\'.' });
  }

  const { token = '', length = 8 } = req.query;

  if (!token) {
    return res.status(400).json({ error: 'Missing token' });
  }
  const hash = crypto.createHash('sha256').update(token).digest('hex');
  const code = hash.slice(0, Math.min(64, parseInt(length))).toUpperCase();

  res.status(200).json({ token, code });
}
