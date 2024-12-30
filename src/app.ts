import express, { Request, Response } from 'express';
import path from 'path'

const app = express();
const router = express.Router();
 
router.get('/',(_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});
 
app.use('/', router);

export default app;
