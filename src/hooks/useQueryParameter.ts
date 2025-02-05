import { QueryParameter } from "@/enums";
import { useSearchParams } from "react-router";

export default function useQueryParameter(param: QueryParameter) {
  const [searchParams, setSearchParams] = useSearchParams();
  const parameter = searchParams.get(param);

  const updateParameter = (newValue: string | null) => {
    if (newValue === null) {
      searchParams.delete(param);
    } else {
      searchParams.set(param, newValue);
    }

    setSearchParams(searchParams);
  };

  return { parameter, updateParameter };
}
