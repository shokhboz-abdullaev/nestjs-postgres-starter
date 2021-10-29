import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config-merger';

@Module({
  imports: [TypeOrmModule.forRoot(config.get('typeorm.config').call())],
})
export class ConfigModule {}
