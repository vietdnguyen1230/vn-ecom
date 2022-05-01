import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <StateContext>
        <Toaster />
        <Component {...pageProps} />
      </StateContext>
    </SessionProvider>
  );
}
