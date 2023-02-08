import ButtonCTA from '@/components/Button'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [stats, setStats] = useState<any>(null);
    const [charName, setCharName] = useState<string>("");
    const [charImg, setCharImg] = useState<string>("");
    const [userId, setUserId] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    
 
  // IdGeneretor (before register is set)
useEffect(() => {
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }
    setUserId(getRandomInt(9999999))
  },[])
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      setLoading(true);
      const responseStats = await fetch("/api/openaiStats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: e.target.prompt.value,
        }),
      });
      let stats = await responseStats.json();
      console.log(stats);
      setStats(stats);
      setCharName(e.target.prompt.value);
  
      // Img create
      const responseImg = await fetch("/api/opeaiImg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: e.target.prompt.value,
          id: userId
        }),
      });
      let imgResponse = await responseImg.json();
      console.log(imgResponse);
      setCharImg(imgResponse);
      setLoading(false);
    };
    if (loading){
      return (
        <><div>LOADING!</div></>
      )
    }
    return (
        <>
        <div className='w-full min-h-screen flex flex-col justify-center items-center bg-zinc-700'>
            <div className='flex'>
              <Image 
              src={charImg}
              alt='Your character'
              width={256}
              height={256}
              priority
              />
              <div>
                <p>
                  {stats ? charName : ""}
                </p>
                <p>
                  Attack: {stats? stats.attack : ""}
                </p>
                <p>
                  Health Points: {stats? stats.healthpoint : ""}
                </p>
                <p>
                  Type: {stats? stats.type : ""}
                </p>
              </div>
            </div>
          <form onSubmit={handleSubmit}>
          <input type="text" name="prompt" placeholder="Enter a prompt to display an image" style={{color: "black"}}/>
          <ButtonCTA text='Create a character' />
          </form>
        </div>
      </>
    )
}
export default Dashboard