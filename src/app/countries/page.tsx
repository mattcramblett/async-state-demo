"use client";
import { Country } from "@/components/countries/country";
import { useState, useEffect } from "react";
import type { Country as CountryType } from "@/types/country";
import { getCountry } from "@/api/countries/countries-api-client";
import { CountryPicker, OPTIONS } from "@/components/countries/country-picker";

export default function Page() {
  const [selection, setSelection] = useState<string>(OPTIONS[0]);
  const [data, setData] = useState<CountryType | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCountry(selection);
      setData(result);
    };
    fetchData();
  }, [selection]);

  return (
    <>
      <CountryPicker
        currentSelection={selection}
        onChangeSelection={(s) => setSelection(s)}
      />
      {data && <Country country={data} />}
    </>
  );
}
