'use client'
import { Country } from "@/components/countries/country";
import { useState } from "react";
import { getCountry } from "@/api/countries/countries-api-client";
import { CountryPicker, OPTIONS } from "@/components/countries/country-picker";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const [selection, setSelection] = useState<string>(OPTIONS[0]);

  const { data, isPending, error } = useQuery({
    queryKey: ["countries", selection],
    queryFn: () => getCountry(selection),
  });

  return (
    <>
      <CountryPicker currentSelection={selection} onChangeSelection={(s) => setSelection(s)} />
      { <Country isPending={isPending} error={error?.message} country={data} /> }
    </>
  );
}
