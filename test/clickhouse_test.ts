import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { ClickHouse } from "../mod.ts";

Deno.test("ClickHouse is not undefined", () => {
  assertNotEquals(ClickHouse, undefined);
});

Deno.test("ClickHouse should be a class with new", () => {
  const clickHouse = new ClickHouse();
  assertNotEquals(clickHouse, undefined);
});

Deno.test("ClickHouse should allow ping db", async () => {
  const clickHouse = new ClickHouse({
    protocol: "http",
    host: "localhost",
    port: 8123,
  });

  const pingResult = await clickHouse.ping();
  assertEquals(pingResult, "Ok.\n");
});
