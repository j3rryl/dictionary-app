import { Word } from "../interface";
import { apiUrl } from "./constants";
// import axios, { AxiosInstance } from 'axios';

// const dictionaryApi: AxiosInstance = axios.create({
//   baseURL: apiUrl
// });

export const getWord = async(searchWord: string) => {
const res = await fetch(`${apiUrl}/word?word=${searchWord}`);
const data = res.json();
  return data;
}

// export const getWord = async (searchQuery: string ) => {
//     const response = await dictionaryApi
//       .post(`/word?word=${searchQuery}`)
//       .then((response: {data: {success: boolean, results: Word[]}}) => {
//         return response.data.results;
//       })
//       .catch((error: {data: {success: boolean, message: string}}) => {
//         console.log(error);
//         throw new Error(error.data.message);
//       });
//     return response;
//   };
