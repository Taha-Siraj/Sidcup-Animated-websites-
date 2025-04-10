import React from 'react';
import './App.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".aboutimg img", {
      opacity: 0,
      rotate: 300,
      scale: 0.5,
      y: 100,
      duration: 2,
      stagger: 1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".aboutspages",  
        start: "top 80%",
        end: "top 60%",
        scrub: 3,
      },
    });
    gsap.from("#abouttext > *", { 
      opacity: 0,
      y: 100, 
      scale: 0.8,  
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".aboutspages",
        start: "top 80%",
        end: "top 60%",
        scrub: 3,
      },
    });

    gsap.to("header" , {
      backgroundColor: "#000",
      height: "110px",
      duration: 1,
      position: "sticky",
      top: 0,
      ease: "power4.inOut",
      scrollTrigger:{
        trigger: "header",
        scrub: 3,
        start: "50%",
        end: "0%",
      }
    })
    gsap.from("#card , #card1", {
      opacity: 0,
      y: 100, 
      duration: 1.5,
      stagger: 1,
      scrollTrigger:{
        trigger: "#card",
        start: "top 80%",
        end: "top 60%",
        scrub: 3,
      }
    })
  
  }, []);

  return (
    <div className='font-montserrat capitalize'>
      <div className="relative h-screen w-full">
        <header className='z-10 px-20 py-4 flex justify-between items-center w-full'>
          <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" className='h-[70px]' alt="" />
          <div className='flex gap-x-5 uppercase'>
            <h2 className='text-[17px] cursor-pointer text-white'>TOPTRACER RANGE</h2>
            <h2 className='text-[17px] cursor-pointer text-white'>Golf Lessons</h2>
            <h2 className='text-[17px] cursor-pointer text-white'>Adventure Golf</h2>
            <h2 className='text-[17px] cursor-pointer text-white'>coffee shop</h2>
            <h2 className='text-[17px] cursor-pointer text-white'>leagues</h2>
          </div>
          <button className= 'capitalize bg-black text-white py-2 px-5 rounded-full border-[4px] border-[#91B508] font-semibold text-xl hover:bg-[#91B508]'>book range</button>
          <button className='capitalize bg-black text-white py-2 px-5 rounded-full border-[5px] border-[#91B508] font-semibold text-xl hover:bg-[#91B508]'>book golf</button>
        </header>

        <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src="/hero.mp4" autoPlay loop muted playsInline />

        <div className='flex flex-col h-screen gap-y-6 py-4 justify-start items-center'>
          <h1 id='custom-stroke'>Eat.Drink.Play.</h1>
          <h2 className='text-[35px] text-white font-semibold'>Welcome to Sidcup Family Golf!</h2>
          <p className='text-xl text-white text-center w-[40%]'>
            Sidcup Family Golf is a Toptracer driving range and crazy golf venue in Sidcup, South East London.
            Passionate about technology, player development, and making golf fun and accessible to everyone.
          </p>
        </div>
      </div>

      <div>
        <marquee className='py-10'>
          <div id='scroller' className='flex text-8xl text-black font-extrabold gap-x-2 uppercase'>
            <h4>TOPTRACER RANGE</h4>
            <h4>Golf Lessons</h4>
            <h4>Adventure Golf</h4>
            <h4>coffee shop</h4>
            <h4>leagues</h4>
            <h4>TOPTRACER RANGE</h4>
            <h4>Golf Lessons</h4>
            <h4>Adventure Golf</h4>
            <h4>coffee shop</h4>
            <h4>leagues</h4>
          </div>
        </marquee>
      </div>
      
      <div className='h-[70%] aboutspages py-20 text-white flex justify-between items-center gap-x-5 px-20'>
        <div className='aboutimg'>
          <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" className='w-[220px] rounded-xl' />
        </div>
        <div id='abouttext' className='w-[50%] text-center flex flex-col gap-y-4'>
          <h1 className='text-5xl font-extrabold uppercase'>About US</h1>
          <p>
            Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology.
            Complimented by a practice green and bunker, coffee shop and American Golf Store.
            There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses.
          </p>
        </div>
        <div className='aboutimg'>
          <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" className='w-[220px] rounded-xl' />
        </div>
      </div>
      <div  className='py-8 flex justify-between items-center gap-x-5 px-20'>
        <div id='card' className='h-[370px] w-[330px] text-whit rounded-xl'>
         <div className='flex flex-col gap-y-7 py-10 px-4 justify-center items-center'>
         <h1 className='text-3xl text-black font-semibold font-montserrat opacity-0'>TopRacer Range</h1>
         <p className='opacity-0 text-xl text-center capitalize text-black font-montserrat'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?</p>
         </div>
        </div>
        <div id='card1' className='rounded-xl h-[370px] w-[330px] '>
        <div className='flex flex-col gap-y-7 py-10 px-4 justify-center items-center'>
         <h1 className='text-3xl text-black font-semibold font-montserrat opacity-0'> Adventure Golf</h1>
         <p className='opacity-0 text-xl text-center capitalize text-black font-montserrat'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?</p>
         </div>
        </div>
        <div id='card' className='h-[370px] w-[330px] rounded-xl'>
        <div className='flex flex-col gap-y-7 py-10 px-4 justify-center items-center'>
         <h1 className='text-3xl text-black font-semibold font-montserrat opacity-0'>TopRacer Range</h1>
         <p className='opacity-0 text-xl text-center capitalize text-black font-montserrat'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quam molestias magni cupiditate architecto et enim quas facere ipsum tempora?</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default App;