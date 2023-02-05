import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Home() {
  const [prediction, setPrediction] = useState<any>(null);
  const [error, setError] = useState(null);
  const [charName, setCharName] = useState<string>("");
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
      }),
    });
    let prediction = await response.json();
    setPrediction(prediction);
    setCharName(e.target.prompt.value);
  };

  useEffect(()=> {
    console.log(prediction);
  },[prediction])

  return (
    <><>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
      <div className='w-full min-h-screen flex flex-col justify-center items-center bg-zinc-700'>
          <div className='flex'>
            <Image
            src="https://wow.zamimg.com/uploads/screenshots/normal/177053-mage-jaina-official-blizzard-fan-art-by-beili-ren.jpg"
            alt='dupa i tak nic'
            width={256}
            height={256}
            />
            <div>
              <p>
                {prediction ? charName : ""}
              </p>
              <p>
                Attack: {prediction? prediction.attack : ""}
              </p>
              <p>
                Health Points: {prediction? prediction.healthpoints : ""}
              </p>
              <p>
                Type: {prediction? prediction.type : ""}
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
        <input type="text" name="prompt" placeholder="Enter a prompt to display an image" defaultValue="Mage"/>
        <button type="submit">Go!</button>
      </form>
          <p>Prompt</p>
      </div>
    </>
  )
}