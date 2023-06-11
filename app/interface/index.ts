export interface Word{
    id: number,
    word: string,
    wordType: string,
    definition: string
}
export interface DictionaryComponentProps {
    onSearch: (query: string) => void,
    searchResults: Word[],
    notFound: string
  }
  