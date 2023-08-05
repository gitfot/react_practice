import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const studentApi = createApi({
    reducerPath: 'studentApi', // Api的标识，不能和其他的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }),
    tagTypes:['ALL'],
    endpoints: builder => ({
        getStudents:builder.query({
            query: () => 'students',
            providesTags:['ALL']
        }),

        addStudent: builder.mutation({
            query: initialPost => ({
                url: '/students',
                method: 'POST',
                body: initialPost
            }),
            invalidatesTags:['ALL']
        })
    })
});

export const {useGetStudentsQuery, useGetStudentDetailQuery, useAddStudentMutation} = studentApi;
