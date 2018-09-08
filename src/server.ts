import express from 'express';
import bodyparser from 'body-parser';
import logger from 'morgan';
class Server {
  public express: express.Application;

    constructor() {
        this.express = express();
        this.initilize();
    }
    private initilize() {
        this.express.use(logger('combined'));
        this.express.use(bodyparser.urlencoded({ extended: true }));
       // this.express.use(bodyparser)
        this.express.use(bodyparser.json());
    }


}
export default new Server().express;