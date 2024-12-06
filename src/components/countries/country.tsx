import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import type { Country } from "@/types/country";

function Stat(header: string, content: string | number) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-semibold leading-none tracking-tight">
        {header}
      </div>
      <div className="text-neutral-400">
        {content}
      </div>
    </div>
  );
}

export function Country({ country }: { country: Country }) {
  return (
    <Card className="bg-gradient p-4 size-full">
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>
            <div className="flex gap-2">
              <span>{country.flag}</span>
              <span>{country.name.common}</span>
            </div>
          </CardTitle>
          <CardDescription>
            {country.flags.alt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {Stat("Region", country.subregion) }
            {Stat("Population", country.population) }
          </div>
        </CardContent>
      </Card>
    </Card>
  );
}

