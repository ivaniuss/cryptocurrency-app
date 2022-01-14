import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a0715b2590mshaadc1aa57d89665p15abf8jsne829c903270a'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (buildder)=>({
        getCryptos: buildder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;