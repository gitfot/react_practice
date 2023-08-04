import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const studentApi = createApi({
    reducerPath: 'studentApi', // Api的标识，不能和其他的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/"
    }),
    endpoints(build) {
        // build是请求的构建器，通过build来设置请求的相关信息
        return {
            getStudents:build.query({
                query() {
                    // 用来指定请求子路径
                    return 'students';
                }
            }),
        };
    }// endpoints 用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值
});

export const {
    useGetStudentsQuery
} = studentApi;

export default studentApi;
