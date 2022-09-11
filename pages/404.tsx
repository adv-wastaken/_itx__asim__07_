import type { NextPage } from 'next'
import Head from 'next/head'

const fourofour: NextPage = () => {
  return (
    <div>
     <div className="h-screen md:pt-20 w-full flex flex-col items-center justify-center text-center">
       <Head>
         <title>Page not found</title>
         <link rel="icon" href="/logo.png"/>
       </Head>
       
       <h1 className="text-3xl text-[#00ffff]">Oooops...</h1>
       <h1 className="text-md text-[#00ffff] opacity-80">This page could not be found.</h1>
     </div>
    </div>
  )
}

export default fourofour