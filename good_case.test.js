import { expect, test } from "vitest";
import { get_message } from "./good_case";

test("get_message generates a message by index", () => {
  expect(get_message(0)).toBe("C is the origin of C++");
});
