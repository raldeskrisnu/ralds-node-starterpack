import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import morgan from 'morgan';

(function(mainConfig) {
  
    require('dotenv').config();
    
    mainConfig.init = function(app, express) {
        
      // *** app middleware *** //
      if (process.env.NODE_ENV !== 'development') {
            app.use(morgan('dev'));
      }
  
      // *** cross domain requests *** //
      const allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
      };
  
      app.use(allowCrossDomain);
      app.use(cookieParser());
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(flash());
      app.listen(process.env.PORT || 8080);
  
    };
  
  })(module.exports);
