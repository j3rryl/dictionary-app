import React, { useRef } from 'react'
import { DictionaryComponentProps } from '../interface'
import Image from 'next/image'

import searchIcon from "../assets/images/search.png";

const DictionaryCard: React.FC<DictionaryComponentProps> = ({onSearch , searchResults, notFound}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    // Get values by field name
    const searchQuery = String(formData.get('searchQuery'));    

    if (searchQuery) {
      onSearch(searchQuery);
    }
  };
  return (
    <>
    <div className='container absolute top-1/4 
    left-0 right-0 mx-auto p-10 w-3/5 border-white border-solid border-2 rounded-2xl bg-transparent'>
      <h4 className='text-center mb-6'>English Dictionary</h4>
        <form ref={formRef} className='search-bar mb-6 w-full h-16 bg-white bg-opacity-20 flex items-center rounded-xl'
        onSubmit={handleSearch}
        >
          <input className='bg-transparent flex-1 border-0 outline-none p-24 text-2xl' type='search' placeholder='Search a word' name='searchQuery'/>
          <button type='submit' className=' w-10 h-10 mr-2 rounded-full flex justify-center items-center cursor-pointer bg-[#58629b]'>
            <Image 
              src={searchIcon} 
              width={25}
              height={25}
              alt='search-icon'/>
          </button>
        </form>
        {searchResults?.map((item)=>{
          return (
          <div className='content' key={item?.id}> 
            <div className='content-title'>
              <p>{item?.word}</p>
              <p>{item?.wordType}</p>
            </div>
            <hr className='my-2'/>
            <div className='content-definition border-l-4 border-indigo-500 px-3'>
              <p>Definition</p>
              <p>{item.definition}</p>
            </div>
            <hr className='my-2'/>
          </div>
          )
        })}
        {notFound!=="" && (
          <p className="text-center text-[#c4c4c4]">{notFound}</p>
        )}
      <p className="mt-8 text-center text-[#c4c4c4]">Type any existing word and press enter to get meaning, example, synonyms, etc.</p>
    </div>
    </>
  )
}

export default DictionaryCard