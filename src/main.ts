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

	await app.listen(3000);
}
bootstrap();
