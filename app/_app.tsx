import Layout from "../components/layout/Layout";
import '../styles/global.css'

function myApp({Component, pageProps}){
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );

}

export  default myApp;