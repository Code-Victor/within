import { z } from "zod";
import * as SecureStore from "expo-secure-store";

const ACCESS_TOKEN_KEY = "token";

export async function getAccessToken() {
  try {
    const result = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);

    return result;
  } catch (e) {
    console.log("Failed to get token:", e);
  }
}
export async function setAccessToken(token: string) {
  try {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
    console.log("Token stored successfully");
  } catch (e) {
    console.log("Failed to store token:", e);
  }
}
export async function clearAccessToken(otp?: boolean) {
  try {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, "");
  } catch (e) {
    console.log("Failed to delete token:", e);
  }
}

/**
 * The `timeSince` function calculates the time difference between a given date and the current date,
 * and returns the result in years, months, days, hours, minutes, or seconds.
 * @param {Date} date - The `date` parameter is a `Date` object representing a specific point in time.
 * It is the reference date for calculating the time difference between the current date and the
 * provided date.
 * @returns a string representing the time elapsed since the given date. The string includes the number
 * of years, months, days, hours, minutes, or seconds depending on the interval of time.
 */
export function timeSince(date: Date) {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export function getAvatar(name: string) {
  const avatarUrl = `https://api.dicebear.com/7.x/adventurer/png?backgroundColor=B9C8FF&seed=${name}`;

  return avatarUrl;
}

// A schema for a password field
export const passwordSchema = z
  .string()
  .refine(
    (value) => {
      const lowerCasePattern = /[a-z]/;
      return lowerCasePattern.test(value);
    },
    {
      message: "Password must have at least one lowercase letter.",
    }
  )
  .refine(
    (value) => {
      const upperCasePattern = /[A-Z]/;
      return upperCasePattern.test(value);
    },
    {
      message: "Password must have at least one uppercase letter.",
    }
  )
  .refine(
    (value) => {
      const digitPattern = /\d/;
      return digitPattern.test(value);
    },
    {
      message: "Password must have at least one digit(numeric).",
    }
  )
  .refine(
    (value) => {
      const specialCharPattern = /[@$!%*?&]/;
      return specialCharPattern.test(value);
    },
    {
      message: "Password must have at least one special character(@$!%*?&).",
    }
  )
  .refine(
    (value) => {
      const minLength = 8;
      return value.length >= minLength;
    },
    {
      message: "Password must have a minimum length of 8 characters.",
    }
  );
export function monify(number: number) {
  return number.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
}
