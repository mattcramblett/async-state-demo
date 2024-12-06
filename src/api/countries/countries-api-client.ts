import axios from "axios";
import { Country } from "@/types/country";

const BASE_URL = "https://restcountries.com/v3.1";

const delay = async (millis: number) => {
  return new Promise((res) => setTimeout(res, millis));
}

export const getCountry = async (name: string): Promise<Country> => {
  const waitTime = name === "Canada" ? 3000 : 1000; // simulate slower resource

  await delay(waitTime);
  const response = await axios.get(
    `${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true`
  );
  return response.data[0] as Country;
}

