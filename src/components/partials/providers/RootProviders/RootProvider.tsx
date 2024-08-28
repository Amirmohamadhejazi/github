'use client'

import { type PropsWithChildren, useState } from 'react'
import NextAdapterApp from 'next-query-params/app'
import { ColorSchemeScript, DirectionProvider, MantineProvider } from '@mantine/core'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { MANTINE_THEME } from '@core/configs/mantine'

import { ToastProvider } from './resources'

const RootProvider = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                        refetchOnWindowFocus: false,
                        refetchOnReconnect: false,
                        //set stale time to 5 minutes
                        staleTime: 5 * 60 * 60 * 1000,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            <DirectionProvider>
                <MantineProvider theme={MANTINE_THEME}>
                    <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
                    <ToastProvider />
                </MantineProvider>
                <ColorSchemeScript defaultColorScheme='light' />
            </DirectionProvider>
            {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' /> */}
        </QueryClientProvider>
    )
}

export default RootProvider
