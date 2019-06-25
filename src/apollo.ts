import ApolloClient, { Operation } from 'apollo-boost';

const apolloClient = new ApolloClient({
  clientState: {
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('refine_key')),
      },
    },
    resolvers: {
      Mutation: {
        userLogIn: (_, { token }, { cache }) => {
          localStorage.setItem('refine_key', token);
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true,
              },
            },
          });
        },
        userLogOut: (_, { token }, { cache }) => {
          localStorage.removeItem('refine_key');
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: false,
              },
            },
          });
        },
      },
    },
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        'X-JWT': localStorage.getItem('refine_key'),
      },
    });
  },
  uri: 'https://api.graph.cool/simple/v1/cjx8kwmg61cwj0155h6hwb3hm',
});

export default apolloClient;
