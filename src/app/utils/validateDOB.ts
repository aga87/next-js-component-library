import { isValid, parse } from "date-fns";

export const validateDOB = (value: string): string => {
  if (!value) return "This field is required";

  // Strict format check
  const regex = /^\d{2}-\d{2}-\d{4}$/;
  if (!regex.test(value)) return "Use format DD-MM-YYYY";

  const parsedDate = parse(value, "dd-MM-yyyy", new Date());

  // Check valid calendar date
  if (!isValid(parsedDate)) return "Invalid date";

  // Prevent invalid rollover (e.g. 32-01 → 01-02)
  const [day, month, year] = value.split("-").map(Number);

  if (
    parsedDate.getDate() !== day ||
    parsedDate.getMonth() + 1 !== month ||
    parsedDate.getFullYear() !== year
  ) {
    return "Invalid date";
  }

  // Prevent future dates
  if (parsedDate > new Date()) {
    return "Date cannot be in the future";
  }

  return "";
};
