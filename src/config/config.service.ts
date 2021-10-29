import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { resolve } from 'path';
import { MergableConfig } from './interfaces/mergable-config.interface';

@Injectable()
export class ConfigService {
  private mergedConfigs = {};
  private env: { [k: string]: string | undefined };
  constructor(configs: MergableConfig[], envPath = '../../.env') {
    config({
      path: resolve(__dirname, envPath),
    });

    this.env = process.env;
    return this.mergeConfigs(configs);
  }

  public getValue(key: string, throwOnMissing = false): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  private ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
  }

  private mergeConfigs(configs: MergableConfig[]) {
    configs.forEach((config: MergableConfig) => {
      if (config.dependencies && config.dependencies) {
        this.ensureValues(config.dependencies);
      }
      if (config.token) {
        this.mergedConfigs[config.token] = config.handler;
      }
    });
    return this;
  }

  public get(token: string) {
    if (token) {
      return {
        call: (...args: any[]) => this.mergedConfigs[token](this, ...args),
      };
    }
    throw new Error(`config error - missing configs.${token}`);
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('NODE_ENV').toLowerCase();
    return mode != 'development';
  }
}
