type Options = {
  protocol: "http" | "https" | undefined;
  host: string | undefined;
  port: number;
};

export class ClickHouse {
  private url: string;

  constructor(options: Options = {
    protocol: undefined,
    host: undefined,
    port: 8123,
  }) {
    const { protocol, host, port } = options;
    this.url = `${protocol}://${host}:${port}/`;
  }

  public async ping(): Promise<string> {
    return (await fetch(`${this.url}ping`)).text();
  }
}
