import { NestApplication } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '../config.service';
import { MergableConfig } from '../interfaces/mergable-config.interface';

export default {
	token: 'swagger.config',
	handler: (context: ConfigService, app: NestApplication) => {
		const config = new DocumentBuilder()
			.setTitle('Task Tracker API')
			.setVersion('1.0')
			.build();
		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('api', app, document);
	},
} as MergableConfig<void>;
