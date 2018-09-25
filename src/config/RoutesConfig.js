import routes from '../router/Index';
(function (routeConfig) {
  
    routeConfig.init = function (app) {
      app.use('/', routes);
    };
  
  })(module.exports);