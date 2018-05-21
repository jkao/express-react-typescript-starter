import { BaseJson, BaseApi } from '../../base';

export interface TestJson extends BaseJson {
  message: string;
}

export class Test extends BaseApi {
  message: string;
  constructor(message: string) {
    super({ message });
    this.message = message;
  }
}