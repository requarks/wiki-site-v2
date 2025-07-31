import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createApp, h } from 'vue'

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP || 'https://graph.requarks.io/'
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

export function setupApollo(app) {
  app.provide(DefaultApolloClient, apolloClient)
}
