import HttpClient from "./HttpClient";
import { ButtonsInterface } from "./types/Buttons";
import { UpdatedListInterface } from "./types/UpdatedList";

export default class SanabuttonClient {
  public readonly httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async buttons(): Promise<ButtonsInterface> {
    const path = "/api/v1/buttons.json";
    const response: ButtonsInterface | null = await this.httpClient.get(path);

    return response == null ? [[[]]] : response;
  }

  public async updatedList(): Promise<UpdatedListInterface> {
    const path = "/api/v1/updated.json";
    const response: UpdatedListInterface | null = await this.httpClient.get(
      path
    );

    return response == null ? new Map() : response;
  }
}
