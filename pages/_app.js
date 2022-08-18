import Layout from '../compoment/layout/layout'
import '../styles/globals.css'


import { wrapper } from "../redux/store" 



function MyApp({ Component, pageProps }) {
  return (
  
    <Layout > 
      <Component {...pageProps} />
   
  </Layout>
  
  
  )
  
}

export default wrapper.withRedux(MyApp)
