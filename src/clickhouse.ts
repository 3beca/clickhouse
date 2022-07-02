type Options = {
  protocol: "http" | "https" | undefined;
  host: string | undefined;
  port: number;
  path: string;
};

export class ClickHouse {
  private url: string;

  constructor(options: Options = {
    protocol: undefined,
    host: undefined,
    port: 8123,
    path: "/",
  }) {
    const { protocol, host, port, path } = options;
    this.url = `${protocol}://${host}:${port}${path}`;
  }

  public async ping(): Promise<string> {
    return (await fetch(`${this.url}ping`)).text();
  }
}
