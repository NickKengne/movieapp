"use client"

import { useState } from "react";
import { MovieGridCard } from "./components/home/MovieGridCard";
import { SearchInput } from "./components/home/SearchInput";
import { Loader } from "lucide-react";
import { useMovie } from "@/hooks/useMovie";
import { useDebounce } from "@/hooks/useDebounce";

export default function Home() {
  const [inputSearchTextValue, setSearchTextValue] = useState<string>("");
  const debouncedSearch = useDebounce(inputSearchTextValue, 500);

  const { moviesData, isLoading, error } = useMovie(debouncedSearch);

  const handleSearchTextChange = (value: string) => {
    setSearchTextValue(value);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <SearchInput onChangeValue={handleSearchTextChange} />
      {isLoading && <div className="min-h-screen flex justify-center items-center"><Loader className="animate-spin" size={40} color="yellow"/></div>}
      {error && <div className="min-h-screen flex justify-center items-center">Une erreur est survenue</div>}
      <MovieGridCard movies={moviesData?.results || []} />
    </div>
  );
}
