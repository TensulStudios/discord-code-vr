import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET allowed for \'/api/onetime.js\'.' });
  }

  const { length = 8 } = req.query;
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth() + 1;
  const day = now.getUTCDate();
  const hours = now.getUTCHours()
  const minutes = now.getUTCMinutes()
  const seconds = now.getUTCSeconds()

  const seed = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
  const hash = crypto.createHash('sha256').update(seed).digest('hex');
  const code = hash.slice(0, Math.min(64, parseInt(length))).toUpperCase();

  res.status(200).json({ token, code });
}
