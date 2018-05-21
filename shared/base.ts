export interface BaseJson {}

export abstract class BaseApi {
  json: BaseJson;
  constructor(json: BaseJson) {
    this.json = json;
  };
}