import express from 'express';

import routes from '../../config/routes';
import message from '../../helpers/generateMessage';


const route = express.Router();
const { createSuccessMessage } = message;

route.get(routes.Home, (_, res) => {
  res.json(createSuccessMessage());
});

export default route;
