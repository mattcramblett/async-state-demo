import axios from "axios";
import { Country } from "@/types/country";

const BASE_URL = "https://restcountries.com/v3.1";

export const getCountry = async (name: string): Promise<Country> => {
  const response = await axios.get(
    `${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true`
  );
  return response.data[0] as Country;
}

