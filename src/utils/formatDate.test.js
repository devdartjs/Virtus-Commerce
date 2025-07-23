import { expect, test, describe } from "vitest";
import { formatDate } from "./formatDate";

describe("testing formatDate", () => {
  test("should format timestamp correctly (January 1)", () => {
    const ms = new Date(2023, 0, 1).getTime();
    expect(formatDate(ms)).toBe("January 1");
  });

  test("should format timestamp correctly (June 15)", () => {
    const ms = new Date(2023, 5, 15).getTime();
    expect(formatDate(ms)).toBe("June 15");
  });

  test("should format timestamp correctly (December 31)", () => {
    const ms = new Date(2023, 11, 31).getTime();
    expect(formatDate(ms)).toBe("December 31");
  });

  test("should format future date correctly", () => {
    const ms = new Date(2030, 0, 1).getTime();
    expect(formatDate(ms)).toBe("January 1");
  });

  test("should format distant past date correctly", () => {
    const ms = new Date(1900, 5, 15).getTime();
    expect(formatDate(ms)).toBe("June 15");
  });

  test("should return invalid date for invalid input", () => {
    expect(formatDate(NaN)).toBe("Invalid Date");
  });

  test("should handle leap year date correctly (February 29, 2024)", () => {
    const ms = new Date(2024, 1, 29).getTime();
    expect(formatDate(ms)).toBe("February 29");
  });

  test("should handle large timestamp values correctly", () => {
    const ms = 32503680000000;
    const date = new Date(ms);
    expect(formatDate(ms)).toBe(
      date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      })
    );
  });
});
