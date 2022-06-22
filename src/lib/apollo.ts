import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ooafsw0nto01xk0pf2cpun/master',
    cache: new InMemoryCache()
  })