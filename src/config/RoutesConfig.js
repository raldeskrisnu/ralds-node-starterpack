import routes from '../router/Route';
(function (routeConfig) {
  
    routeConfig.init = function (app) {
      ////add a new line if you want to create new path
      app.use('/', routes);
    };
  
  })(module.exports);