export interface BaseJson {}

export abstract class BaseApi {
  public json: BaseJson;
  constructor(json: BaseJson) {
    this.json = json;
  };
}
