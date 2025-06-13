import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET allowed for \'/api/daily.js\'.' });
  }

  const { token = '', length = 8 } = req.query;

  if (!token) {
    return res.status(400).json({ error: 'Missing \'token\' parameter in GET request url.' });
  }

  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth() + 1;
  const day = now.getUTCDate();

  const seed = `${year}-${month}-${day}-${token}`;
  const hash = crypto.createHash('sha256').update(seed).digest('hex');
  const code = hash.slice(0, Math.min(64, parseInt(length))).toUpperCase();

  res.status(200).json({ token, code });
}
