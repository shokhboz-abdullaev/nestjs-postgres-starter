import { ConfigService } from './config.service';
import swaggerConfig from './modules/swagger.config';
import typeormConfig from './modules/typeorm.config';

const config = new ConfigService([typeormConfig, swaggerConfig]);

export default config;
