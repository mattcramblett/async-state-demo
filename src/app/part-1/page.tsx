'use client'
import { Country } from "@/components/countries/country";
import { useState, useEffect } from "react";
import type { Country as CountryType } from "@/types/country";
import { getCountry } from "@/api/countries/countries-api-client";

export default function Page() {
  const [country, setCountry] = useState<CountryType | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCountry("United States");
      setCountry(result);
    }
    fetchData();
  }, []);

  return (
    <>
      {country && <Country country={country} /> }
    </>
  );
}
