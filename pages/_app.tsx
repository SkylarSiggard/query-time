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
            retry: 4,
            staleTime: 5000
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