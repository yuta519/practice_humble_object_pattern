import { expect, test } from "vitest";
import { say_random_message } from "./bad_example";

test("say_random_message generates a random message", () => {
  expect(say_random_message()).toBe("C is the origin of C++");
});
