import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const studentApi = createApi({
    reducerPath: 'studentApi', // Api的标识
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }),
    tagTypes: ['student'], // 用来指定Api中的标签类型
    endpoints: builder => ({
        getStudents:builder.query({
            // 指定请求子路径
            query: () => 'students',
            // transformResponse 用来转换响应数据的格式
            transformResponse: (baseQueryReturnValue, meta, arg) => baseQueryReturnValue.data,
            //设置数据标签
            providesTags: [{type: 'student', id: 'LIST'}]
        }),
        getStudentById:builder.query({
            query: (id) => `students/${id}`,
            transformResponse: (baseQueryReturnValue, meta, arg) => baseQueryReturnValue.data,
            keepUnusedDataFor: 60, // 设置数据缓存的时间，单位秒 默认60s
            providesTags: (result, error, id) => [{type: 'student', id}]
        }),
        delStudent:builder.mutation({
            query: (id) => ({
                url: `students/${id}`,
                method: 'delete'
            }),
            invalidatesTags:[{type:'stu', id:'LIST'}]
        }),
        addStudent: builder.mutation({
            query: jsonBody => ({
                url: '/students',
                method: 'POST',
                body: {data:jsonBody} //要不要data具体看接口入参定义
            }),
            // 匹配getStudents的标签，用于自动刷新列表数据
            invalidatesTags:[{type:'stu', id:'LIST'}]
        }),
        updateStudent: builder.mutation({
            query: jsonBody => ({
                url: `/students/${jsonBody.id}`,
                method: 'POST',
                body: {data: jsonBody.attributes}
            }),
        })
    })
});

// Api对象创建后，对象中会根据各种方法自动的生成对应的钩子函数
// 通过这些钩子函数，可以来向服务器发送请求
// 钩子函数的命名规则 getStudents --> useGetStudentsQuery
export const {
    useGetStudentsQuery,
    useGetStudentByIdQuery,
    useDelStudentMutation,
    useAddStudentMutation,
    useUpdateStudentMutation
} = studentApi;
