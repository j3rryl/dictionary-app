"use client";
import { useState } from "react";
import { getWord } from "./api/dictionary"
import DictionaryCard from "./components/DictionaryCard"
import { Word } from "./interface";
export default function Home() {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Word[]>([]);
  const [notFound, setNotFound] = useState<string>("");


  const onSearch= async(searchQuery: string)=>{
    const results = await getWord(searchQuery);
    // setSearchResults(results);
    if(results?.success){
      setSearchResults(results?.results);
      setNotFound("");
    } else {
      setSearchResults([]);
      setNotFound(results?.message)
    }
    
  }
  return (
    <>
      <DictionaryCard onSearch={onSearch} searchResults={searchResults} notFound={notFound} />
    </>
      )
}
