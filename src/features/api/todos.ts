import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todos {
  userID?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}
export const api = createApi({
  reducerPath: "jsonplaceholder",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    todos: build.query<Todos, number>({
      query: (id: number = 5) => ({
        url: `/todos/${id}`,
      }),
    }),
  }),
});
