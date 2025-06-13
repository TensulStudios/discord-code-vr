import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth() + 1;
  const day = now.getUTCDate();
  const seed = `${year}-${month}-${day}`;

  const hash = crypto.createHash('sha256').update(seed).digest('hex');
  const dailyCode = hash.slice(0, 8).toUpperCase();

  res.status(200).json({ code: dailyCode });
}
