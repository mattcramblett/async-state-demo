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
  const [error, setError] = useState<string | undefined>();
 
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const result = await getCountry(selection);
        setData(result);
        setError(undefined);
      } catch (e: any) {
        setData(undefined);
        setError(e?.response?.data?.message);
      } finally {
        setIsPending(false);
      }
    }
    fetchData();
  }, [selection]);

  return (
    <>
      <CountryPicker currentSelection={selection} onChangeSelection={(s) => setSelection(s)} />
      { <Country isPending={isPending} error={error} country={data} /> }
    </>
  );
}
