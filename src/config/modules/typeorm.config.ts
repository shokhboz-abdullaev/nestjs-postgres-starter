import { MergableConfig } from '../interfaces/mergable-config.interface';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config.service';

export default {
	token: 'typeorm.config',

	dependencies: [
		'POSTGRES_HOST',
		'POSTGRES_PORT',
		'POSTGRES_USER',
		'POSTGRES_PASSWORD',
		'POSTGRES_DB',
		'POSTGRES_SYNCHRONIZE',
	],

	handler: (context: ConfigService): TypeOrmModuleOptions => {
		return {
			type: 'postgres',

			host: context.getValue('POSTGRES_HOST'),
			port: parseInt(context.getValue('POSTGRES_PORT')),
			username: context.getValue('POSTGRES_USER'),
			password: context.getValue('POSTGRES_PASSWORD'),
			database: context.getValue('POSTGRES_DB'),
			entities: [
				context.isProduction() ? 'dist/**/*.entity.js' : 'src/**/*.entity{.ts,.js}',
			],

			migrationsTableName: 'migrations',

			migrations: ['src/migrations/*.ts'],

			cli: {
				migrationsDir: 'src/migrations',
			},

			ssl: context.isProduction(),
			synchronize: JSON.parse(context.getValue('POSTGRES_SYNCHRONIZE')),
		};
	},
} as MergableConfig<TypeOrmModuleOptions>;
