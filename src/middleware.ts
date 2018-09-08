import express from 'express';
class Routes {
    public routes: express.Router;
    constructor() {
        this.routes = express.Router();
        this.initialize();
    }

    private initialize() {
        this.routes.use((req,resp,next) => {
            console.log("hit...");
            next();
        });
        this.routes.get('/', (req, resp) => {
            resp.json([{ "msg": "service hit sucess" }, {"req was":req.query}])
            console.log(req.originalUrl);
        });
        this.routes.post('/', (req, resp) => {
            var response = {
                fullname: `${req.body.firstname} ${req.body.lastname}`
            }
            resp.status(200).send(response);
            console.log(req.body);
        });
    }
}
export default new Routes().routes;