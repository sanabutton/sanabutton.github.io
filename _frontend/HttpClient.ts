import axios, { AxiosInstance, AxiosResponse } from "axios";

export type httpProtocol = "http" | "https";
export type urlAuthority = "//www.natorisana.love";
export type Data = unknown;

export interface HttpClientInterface {
  get(path: string): Promise<Data | null>;
}

export default class HttpClient implements HttpClientInterface {
  public static create() {
    return new HttpClient(axios.create(), "https", "//www.natorisana.love");
  }
  // エラーハンドリングとかの処理の共通化用のやつら
  public errorHandler: (message: string) => void;
  // 実際に使うやつ
  private readonly httpClient: AxiosInstance;
  // for request building
  private readonly requestProtocol: httpProtocol;
  private readonly baseAuthority: urlAuthority;

  public constructor(
    httpClient: AxiosInstance,
    requestProtocol: httpProtocol,
    baseAuthority: urlAuthority
  ) {
    this.httpClient = httpClient;
    this.requestProtocol = requestProtocol;
    this.baseAuthority = baseAuthority;

    this.errorHandler = (message: string) => {
      console.warn(message);
    };
  }

  /**
   * @param path start with "/"
   * @return エラー時は Null
   */
  public async get<T = Data>(path: string): Promise<T | null> {
    const url = this.requestProtocol + ":" + this.baseAuthority + path;

    const response = await this.httpClient
      .get<T>(url)
      .catch((error: AxiosResponse) => {
        this.onError([
          error.status,
          error.statusText,
          error.data,
          error.config.url
        ]);
        error.data = null;
        return error;
      });
    return response.data;
  }

  protected onError(error: unknown) {
    this.errorHandler(JSON.stringify(error));
  }
}
