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
   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start size-full max-w-[1200px]">
        {isLoading && "Loading..." }
        {country && <Country country={country} /> }
      </main>
    </div>
  );
}
