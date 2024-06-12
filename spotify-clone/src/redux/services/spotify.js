import axios from "axios";
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/albums/',
  params: {ids: '3IBcauSj5M2A6lTeffJzdv'},
  headers: {
    'X-RapidAPI-Key\n': '9fcd1cbf2cmsh41d316878c44115p1a4dbajsn15fbce19a40c',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

export const spotifyapi=createApi({
    reducerPath:'spotifyapi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://spotify23.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set({
                'X-RapidAPI-Key\n': '9fcd1cbf2cmsh41d316878c44115p1a4dbajsn15fbce19a40c',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
              })
              return headers
        }
    }),
    endpoints:(builder)=>({
        getTopcharts:builder.query({query:()=>'/charts/'})
    })
})
export const{
    useGetTopchartsQuery,
}=spotifyapi;