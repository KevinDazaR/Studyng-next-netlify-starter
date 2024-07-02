import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Kevin Daza Ramìrez
        </p>
    <h3>JavaScript</h3>
      <span>console.log("¡Hola mundo Js");</span>

    <h3>C#</h3>
      <span> 
        
                  Console.WriteLine("Hola Mundo");
     </span>

   <h3>JavaScript</h3>
   <span>  public class HolaMundo {
        System.out.println("Hola Mundo"); </span>
 
   <h3>Node Js</h3>
   <span>console.log("Hola Mundo");

 </span>

     <h3>Php</h3>
   <span>?php
echo "Hola Mundo";
?
 </span>
      
      </main>

      <Footer />
    </div>
  )
}
