import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config-merger';
import { TransformInterceptor } from './global/interceptors/transformer.interceptor';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	config.get('swagger.config').call(app);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(
		new ClassSerializerInterceptor(app.get(Reflector), {
			excludePrefixes: ['_'],
		}),
	);
	app.useGlobalInterceptors(new TransformInterceptor());

	const port = config.getPort() || 5050;
	await app.listen(port, () => {
		console.log(
			'\n',
			'\x1b[33m',
			`Listening on port: ${port}. Please head over to http://localhost:${port}/api for Swagger docs.`,
		);
	});
}
bootstrap();
