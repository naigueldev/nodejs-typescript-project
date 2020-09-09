import { Router } from 'express';
import ProductRouter from '@src/app/modules/Product/Router';

class Routes {
    constructor(public router = Router()) {
        this.define();
    }

    public define(): void {
        this.router.use('/products', ProductRouter);
    }

    public getRouter(): Router {
        return this.router;
    }
}


export default new Routes().getRouter();