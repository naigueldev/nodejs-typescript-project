import { Router, request, response } from 'express';

const router = Router();

router.get('/', (request, response) => {
    response.json({
        _id: 'ABC123',
        name: 'Product Name',
        price: 28.90
    });
});

export default router;