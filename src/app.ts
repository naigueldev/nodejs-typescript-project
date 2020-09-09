import './util/module-alias';
import { application } from 'express';
import bodyParser from 'body-parser';
import * as http from 'http';


export class SetupApplication {
    private server?: http.Server;

    constructor(private port = 3000, public app = application) { }

    public init(): void {
        this.setupExpress();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    public start(): void {
        this.server = this.app.listen("3000", () => {
            console.log('Server running on port 3000')
        });
    }
}