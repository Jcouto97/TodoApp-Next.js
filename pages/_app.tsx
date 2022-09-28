import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head"; //para meta info
import Layout from "../components/Layout";
import { CompletedContext } from "../Contexts/CompletedContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [completed, setCompleted] = useState<string[]>([]); //DAR CLEAR

  return (
    <>
       <CompletedContext.Provider value={{ completed, setCompleted }} >
      <Head>
        <title>Todo App</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      </CompletedContext.Provider>
    </>
  );
}

export default MyApp;
