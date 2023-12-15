import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Aca va la lista de tipos de pokemon');
});

router.post('/', (_req, res) => {
    res.send('Aca va a crear un tipo de pokemon');
});

export default router;