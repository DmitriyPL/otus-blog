import { test } from "./main";

describe("test", () => {
    it("is a function", () => {
      expect(test).toBeInstanceOf(Function);
    });
});