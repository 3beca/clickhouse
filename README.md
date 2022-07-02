# clickhouse

[![](https://img.shields.io/github/workflow/status/3beca/clickhouse/CI?style=flat-square)](https://github.com/3beca/clickhouse/actions)
[![](https://img.shields.io/codecov/c/gh/3beca/clickhouse?style=flat-square)](https://codecov.io/gh/3beca/clickhouse)

ClickHouse Http Client for Deno runtime.

## Introduction

This module is a client for ClickHouse database using the Http interface 
https://clickhouse.com/docs/en/interfaces/http/.

## Usage

### Ping

```typescript
const clickHouse = new ClickHouse({
  protocol: "http",
  host: "localhost",
  port: 8123,
});

const pingResult = await clickHouse.ping();
console.log(pingResult); // it prints Ok.
```

## Test

To run the test suite you need to have a running instance of ClickHouse. For
that you can use the docker-compose in the root of the repository.

Run the following to start ClickHouse server on docker 

```sh
docker-compose up -d
```

Then run the test suite

```sh
deno test --allow-net
```

## License

MIT
