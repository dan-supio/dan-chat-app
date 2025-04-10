import cors from 'cors';
import express from 'express';
import router from './router';

const app = express();

const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/', router);

app.listen(8080, () => {
  console.log('Server listening on port 8080.');
});
