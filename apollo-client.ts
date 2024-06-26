import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  const client = new ApolloClient({
    uri: "https://herencia.stepzen.net/api/honest-rabbit/__graphql",
    // uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
    },
  });

  return client;
};
