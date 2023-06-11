import { apiUrl } from "./constants";

export const getWord = async(searchWord: string) => {
const res = await fetch(`${apiUrl}/word?word=${searchWord}`);
const data = res.json();
  return data;
}
