import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.PORT || 8000;

const URLS = {
  FRONTEND_URL: 'http://localhost:8080',
};

const env = process.env.NODE_ENV;
if ((env === 'production') || (env === 'staging')) {
  URLS.FRONTEND_URL = '<YOUR_FRONTEND_URL_HERE>';
}

const productionConstants = {
  PORT,
  URLS,
};

const constants = {
  production: productionConstants,
};


export default constants;
