import { BaseJson, BaseApi } from '../base';
import { TextJson, Text } from './text';

export interface TextListJson extends BaseJson {
  texts: TextJson[];
}

export class TextList extends BaseApi {
  texts: Text[];

  constructor(texts: Text[]) {
    super({ texts: texts.map(text => text.json) });
    this.texts = texts;
  }

}
