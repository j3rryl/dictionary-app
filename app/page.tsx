"use client";
import { useState } from "react";
import { getWord } from "./api/dictionary"
import DictionaryCard from "./components/DictionaryCard"
import { Word } from "./interface";
export default function Home() {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Word[]>([]);

  const onSearch= async(searchQuery: string)=>{
    const results = await getWord(searchQuery);
    setSearchResults(results);
  }
  return (
    <>
      <DictionaryCard onSearch={onSearch} searchResults={searchResults} />
    </>
      )
}
