import "../styles/globals.css";
import AppNav from "../nav/AppNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <AppNav />
    </>
  );
}

export default MyApp;
