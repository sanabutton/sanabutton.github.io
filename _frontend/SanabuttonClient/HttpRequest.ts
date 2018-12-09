import HttpClient from "./HttpClient";
import { ButtonsInterface } from "./Buttons";
import { UpdatedListInterface } from "./UpdatedList";
import SanabuttonClientInterface from "./SanabuttonClientInterface";

export default class HttpRequest implements SanabuttonClientInterface{
  public readonly httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async buttons(): Promise<ButtonsInterface> {
    const path = "/api/v1/buttons.json";
    const response: ButtonsInterface | null = await this.httpClient.get(path);

    return response == null ? [[[]]] : response;
  }

  /**
   * Feed で言うところの modified の更新日の一覧
   *
   * 1度作られたあとに更新されていない post のフィールドは存在しない。
   */
  public async updatedList(): Promise<UpdatedListInterface> {
    const path = "/api/v1/updated.json";
    const response: UpdatedListInterface | null = await this.httpClient.get(
      path
    );

    return response == null ? new Map() : response;
  }
}
