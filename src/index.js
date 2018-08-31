import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

import routes from './config/routes';
import testRoutes from './routes/testRoute';
import constants from './config/constants';


const app = express();
const { production } = constants;

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({
  extended: true,
}));


app.use(routes.Test, testRoutes);

app.get(routes.Home, (_, res) => {
  res.send("Roll over to /test to see it it's working or not");
});


const server = app.listen(production.PORT, () => {
  console.log(`Backend is running on PORT: ${production.PORT}`);
});

export default server;
