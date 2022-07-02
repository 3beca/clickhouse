import { assertNotEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { ClickHouse } from "../mod.ts";

Deno.test("clickhouse is not undefined", () => {
  assertNotEquals(ClickHouse, undefined);
});
