import config from '../config/config-merger';
import fs = require('fs');
fs.writeFileSync(
	'ormconfig.json',
	JSON.stringify(config.get('typeorm.config').call(), null, 2),
);
