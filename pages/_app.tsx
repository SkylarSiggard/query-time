import React from 'react';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function MyApp({ Component, pageProps }) {
    const [queryClient] = React.useState(() => new QueryClient({
        defaultOptions: {
            queries: {
            retry: 1,
            staleTime: 500
            }
        }
    }))

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false}/>
            </Hydrate>
        </QueryClientProvider>
    )
}