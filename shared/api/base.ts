export interface BaseJson {}

export abstract class BaseApi<T extends BaseJson> {
  public json: T;
  constructor(json: T) {
    this.json = json;
  };
}
