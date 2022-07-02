import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { ClickHouse } from "../mod.ts";

Deno.test("ClickHouse client should allow ping db", async () => {
  const clickHouse = new ClickHouse({
    protocol: "http",
    host: "localhost",
    port: 8123,
    path: "/",
  });
  const pingResult = await clickHouse.ping();
  assertEquals(pingResult, "Ok.\n");
});
