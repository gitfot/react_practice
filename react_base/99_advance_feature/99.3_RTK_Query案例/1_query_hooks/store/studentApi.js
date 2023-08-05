import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const studentApi = createApi({
    reducerPath: 'studentApi', // Api的标识，不能和其他的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }),
    endpoints: builder => ({
        getStudents:builder.query({
            query: () => 'students'
        }),
        getStudentDetail:builder.query({
            query: () => 'students/${studentId}'
        })
    })
});

export const {useGetStudentsQuery, useGetStudentDetailQuery} = studentApi;
