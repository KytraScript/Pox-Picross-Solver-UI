import React, { useEffect } from 'react'
import { useRouter, withRouter } from 'next/router'
import '../styles/global.css';

function MyApp({Component, pageProps}){

    const router = useRouter()
    //
    // useEffect(() => {
    //     const handleRouteChange = (url, { shallow }) => {
    //         console.log(
    //             `App is changing to ${url} ${
    //                 shallow ? 'with' : 'without'
    //             } shallow routing`
    //         )
    //     }
    //
    //     router.events.on('hashChangeStart', handleRouteChange)
    //
    //     // If the component is unmounted, unsubscribe
    //     // from the event with the `off` method:
    //     // return () => {
    //     //     router.events.off('routeChangeStart', handleRouteChange)
    //     // }
    // }, [])

    return <Component { ...pageProps } />
}

export default MyApp;
