# clickhouse

[![](https://img.shields.io/github/workflow/status/3beca/clickhouse/CI?style=flat-square)](https://github.com/3beca/clickhouse/actions)
[![](https://img.shields.io/codecov/c/gh/3beca/clickhouse?style=flat-square)](https://codecov.io/gh/3beca/clickhouse)

ClickHouse Http Client for Deno runtime.

## Test

To run the test suite you need to have a running instance of Click House. For that you can use the docker-compose in the root of the repository.

Run:

```sh
docker-compose up -d
```

Then

```sh
deno test --allow-net
```

## License

MIT