'use client'
import { Country } from "@/components/countries/country";
import { useState, useEffect } from "react";
import type { Country as CountryType } from "@/types/country";
import { getCountry } from "@/api/countries/countries-api-client";

export default function Home() {
  const [country, setCountry] = useState<CountryType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getCountry("United States");
      setCountry(result);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading && "Loading..." }
      {country && <Country country={country} /> }
    </>
  );
}
