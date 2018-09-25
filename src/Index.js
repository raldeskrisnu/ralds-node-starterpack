import appConfig from './config/MainConfig';
import routeConfig from './config/RoutesConfig';
import errorConfig from './config/ErrorConfig';
import express from 'express';

const app = express();

appConfig.init(app, express);
routeConfig.init(app);
errorConfig.init(app);

module.exports = app;