import { expect, test, describe } from "vitest";
import { formatCurrency } from "./formatCurrency";

describe("testing formatCurrency", () => {
  test("test conversion of 39990 to 399.90 ", () => {
    expect(formatCurrency(39990)).toBe("$399.90");
  });

  test("test conversion of string to be undefined ", () => {
    expect(formatCurrency("string")).toBe("$NaN");
  });

  test("should convert negative number correctly", () => {
    expect(formatCurrency(-1050)).toBe("$10.50");
  });

  test("should format zero correctly", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  test("should round small values up to the nearest cent", () => {
    expect(formatCurrency(1)).toBe("$0.01");
  });
});
