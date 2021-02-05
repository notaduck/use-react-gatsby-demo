import PropTypes from "prop-types";
import React from "react";
import Footer from "./footer";
import { QueryClient, QueryClientProvider } from 'react-query'
 import { ReactQueryDevtools } from 'react-query/devtools'
import Header from "./header/header";

function Layout({ children }) {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <div className="flex flex-col min-h-screen text-gray-900">
          <Header />

          <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16 overflow-y-visible">
            {children}
          </main>

          <Footer />
        </div>

      </QueryClientProvider>
      <ReactQueryDevtools/>

    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
