import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const OPTIONS = ["United States", "Mexico", "Canada", "Genovia"];

export function CountryPicker({
  currentSelection,
  onChangeSelection,
}: {
  currentSelection: string;
  onChangeSelection: (s: string) => void;
}) {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        {OPTIONS.map((o) => (
          <NavigationMenuItem key={o}>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                currentSelection === o ? "bg-primary text-neutral-900" : null,
              )}
              onClick={() => onChangeSelection(o)}
            >
              <span className="select-none">{o}</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
