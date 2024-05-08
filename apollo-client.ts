import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  const client = new ApolloClient({
    uri: "https://herencia.stepzen.net/api/honest-rabbit/__graphql",
    // uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apikey herencia::stepzen.net+1000::9ae29822db40e913d91faee23b897f432a9df1e3bd92a62b6dc41144a8980753`,
      //   Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
    },
  });

  return client;
};
