// import axios from "axios";
import HttpClient from "./HttpClient";
// import { Buttons } from "./types/Responses";

export default class SanabuttonClient {
  public readonly httpClient: HttpClient;

  public constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // public async buttons(): Promise<Buttons> {
  //   const path = "/api/v1/buttons.json";
  //   axios.get("https://www.natorisana.love" + path);
  // }
}
