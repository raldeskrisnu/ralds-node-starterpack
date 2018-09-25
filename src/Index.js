import express from 'express';
import mainConfig from './config/MainConfig';
import errorConfig from './config/ErrorConfig';
import routeConfig from './config/RoutesConfig';

const app = express();

mainConfig.init(app, express);
errorConfig.init(app);
routeConfig.init(app);

module.exports = app;