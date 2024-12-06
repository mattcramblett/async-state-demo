'use client'
import { Country } from "@/components/countries/country";
import { useState, useEffect } from "react";
import type { Country as CountryType } from "@/types/country";
import { getCountry } from "@/api/countries/countries-api-client";
import { CountryPicker, OPTIONS } from "@/components/countries/country-picker";

export default function Page() {
  const [selection, setSelection] = useState<string>(OPTIONS[0]);

  const [data, setData] = useState<CountryType | undefined>();
  const [isPending, setIsPending] = useState<boolean>(true);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const result = await getCountry(selection);
      setData(result);
      setIsPending(false);
    }
    fetchData();
  }, [selection]);

  return (
    <>
      <CountryPicker currentSelection={selection} onChangeSelection={(s) => setSelection(s)} />
      { <Country isPending={isPending} country={data} /> }
    </>
  );
}
