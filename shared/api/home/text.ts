import { BaseJson, BaseApi } from '../base';

export interface TextJson extends BaseJson {
  message: string;
}

export class Text extends BaseApi {
  message: string;

  constructor(message: string) {
    super({ message } as TextJson);
    this.message = message;
  }
}
