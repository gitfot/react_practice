import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const studentApi = createApi({
    reducerPath: 'studentApi', // Api的标识，不能和其他的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }),
    tagTypes:['stu'],
    endpoints: builder => ({
        getStudents:builder.query({
            query: () => 'students',
            providesTags: (result, error, arg) => [
                //为整个列表提供一个通用标签
                {type: 'stu', id: 'LIST'},
                // 以及为每个接收到的student对象提供一个特定的 {type: 'Post', id} 标签
                result.data.map(({ id }) => ({ type: 'stu', id }))
            ]
        }),
        getStudentById:builder.query({
            query: studentId => `/students/${studentId}`,
            // 为每个接收到的student对象提供一个特定的 {type: 'Post', id} 标签
            providesTags: (result, error, arg) => [{ type: 'Post', id: arg }]
        }),

        addStudent: builder.mutation({
            query: initialPost => ({
                url: '/students',
                method: 'POST',
                body: initialPost
            }),
            // 匹配getStudents的标签，用于自动刷新列表数据
            invalidatesTags:[{type:'stu', id:'LIST'}]
        }),

        updateStudent: builder.mutation({
            query: initialPost => ({
                url: `/students/${initialPost.id}`,
                method: 'POST',
                body: initialPost
            }),
            // 使特定的 {type: 'Post', id} 标签缓存无效，强制更新。
            // 1、这将强制重新获取 “getStudentById” query接口中的单条数据
            // 2、以及 “getStudents” query接口中的整个列表，因为它们都提供了与 “{type, id}” 值匹配的标签。
            invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }]
        })
    })
});

export const {useGetStudentsQuery, useGetStudentDetailQuery, useAddStudentMutation} = studentApi;
