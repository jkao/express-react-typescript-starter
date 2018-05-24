import { BaseJson, BaseApi } from '../base';

export interface TextJson extends BaseJson {
  message: string;
}

export class Text extends BaseApi<TextJson> {
  message: string;

  constructor(message: string) {
    super({ message });
    this.message = message;
  }
}
