import "./src/styles/global.css"

import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'

export const wrapPageElement = ({ element, props }) => {

    const queryClient = new QueryClient();

    return (
        <div {...props}>
            <QueryClientProvider client={queryClient}>
                {element}
            </QueryClientProvider>
        </div>
    )
}


