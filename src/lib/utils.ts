import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertQueryToInt(query: string | string[] | undefined) {
  const numericId = query
    ? parseInt(Array.isArray(query) ? query[0] : query, 10)
    : undefined; // Ensure id is a number

  return numericId;
}
