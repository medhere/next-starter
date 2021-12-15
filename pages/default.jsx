import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';


import { useRouter } from "next/router";

import styles from './components/mylayout.module.css';
import Layout from "./components/mylayout";
// const DynamicComponent = dynamic(() => import('../components/hello'))	//default export
// const DynamicComponent = dynamic(() => import('../components/hello').then((mod) => mod.Hello))	//named export
// const DynamicComponentWithCustomLoading = dynamic(		//custom loading component
//   () => import('../components/hello'),  { loading: () => <p>...</p>, ssr:false, suspense:true }
// )



export default function Home({ getData, getServer }) {

  const router = useRouter();
  // router.pathname|query|asPath|route|isFallback|isPreview;
  // router.push('url','asurl',{scroll:true,shallow:false});
  // router.replace('url','asurl',{scroll:true,shallow:false});
  // router.prefetch('url','asurl')
  // router.back()
  // router.reload()
  // router.events.on|off('evt', func)
      // routeChangeStart(url, { shallow })
      // routeChangeComplete(url, { shallow })
      // routeChangeError(err, url, { shallow })

    return (
    <div>
		  <Head> <title>First Post</title> </Head>
      <Layout>
        <p>This is a test: {getData}</p>
        <div className={styles.container}>
            test styles        
        </div>
        <Link href='/test/admin'><a>Goto admin</a></Link> <br />
        {/* <Link href='/test/admin' prefetch replace scroll shallow><a>Goto admin</a></Link> <br /> */}


      </Layout>
          {/* <Script src="https://www.google-analytics.com/analytics.js" strategy="beforeInteractive | afterInteractive | lazyOnload"/> */}
          {/* <Script id="show-banner" strategy="lazyOnload">  {`document.getElementById('banner').classList.remove('hidden')`} </Script> */}
          {/* <Script id="stripe-js" src="https://js.stripe.com/v3/" onLoad={() => { setStripe({ stripe: window.Stripe('pk_test_12345') })}}/> */}
    </div>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  var getData="This is SSG";
  return { props: { getData } }
}

// export async function getServerSideProps(context) {
//   var {params, req, res, query, resolvedUrl} = context;
//      var getServer="This is SSR";  
//   // return {  redirect: { destination: '/', permanent: false } }  }
//   // return { notFound: true}
//   return { props: { getServer }}
// }
