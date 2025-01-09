"use client";

import { usePathname, useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
// import { Button } from "./ui/button";

export default function ByCategory() {
  const router = useRouter();
  const pathname = usePathname();
  //   const searchParams = useSearchParams();

  //   const currentFilter = searchParams.get("category") ?? "all";

  const handleClick = (filter: string) => () => {
    const query = filter === "all" ? "" : `?category=${filter}`;
    router.push(`${pathname}${query}`);
  };

  return (
    <div className="flex items-center justify-center py-4 flex-wrap gap-4">
      <RadioGroup defaultValue="todos" className="flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="todos" id="r1" onClick={handleClick("all")} />
          <Label htmlFor="r1">Todos</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="clasica"
            id="r2"
            onClick={handleClick("clasica")}
          />
          <Label htmlFor="r2">Clasica</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="lujo-coleccion"
            id="r3"
            onClick={handleClick("lujo-coleccion")}
          />
          <Label htmlFor="r3">Lujo</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="concepto-coleccion"
            id="r4"
            onClick={handleClick("concepto-coleccion")}
          />
          <Label htmlFor="r3">Concepto</Label>
        </div>
      </RadioGroup>

      {/* <div className="flex items-center justify-center py-4 flex-wrap gap-4">
        <Button
          type="button"
          onClick={handleClick("all")}
          color="primary"
          size="lg"
          variant="outline"
          className="bg-transparent rounded-lg border-2 bg-white"
        >
          <span className="text-gray-700">Todos</span>
        </Button>
        <Button
          type="button"
          onClick={handleClick("clasica")}
          color="primary"
          size="lg"
          variant="outline"
          className="bg-transparent rounded-lg border-2 bg-white"
        >
          <span className="text-gray-700">Clasica</span>
        </Button>
        <Button
          type="button"
          onClick={handleClick("lujo-coleccion")}
          color="primary"
          size="lg"
          variant="outline"
          className="bg-transparent rounded-lg border-2 bg-white"
        >
          <span className="text-gray-700">Lujo</span>
        </Button>
        <Button
          type="button"
          onClick={handleClick("concepto-coleccion")}
          color="primary"
          size="lg"
          variant="outline"
          className="bg-transparent rounded-lg border-2 bg-white"
        >
          <span className="text-gray-700">Concepto</span>
        </Button>
      </div> */}
    </div>
  );
}
