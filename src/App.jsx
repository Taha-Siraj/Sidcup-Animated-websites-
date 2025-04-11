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
      duration: 1,
      stagger: 1,
      scale: 0.8,
      scrollTrigger:{
        trigger: "#card",
        start: "top 80%",
        end: "top 60%",
        scrub: 3,
      }
    })
     gsap.from("#sign", {
      opacity: 0,
      y: 100,
      duration: 1,
      scale: 0.8,
      scrollTrigger:{
        trigger: "#sign",
        start: "top 100%",
        end: "top 70%",
        scrub: 3,

      }
     })
     gsap.from( "#foodimg", {
      opacity: 0,
      x: -100,
      duration: 1,
      scale: 0.8,
      scrollTrigger:{
        trigger: "#foodimg",
        start: "top 80%",
        end: "top 60%",
        scrub: 3,
      }
     })
     gsap.from("#foodtext", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger:{
        trigger: "#foodtext",
        start: "top 80%",
        end: "top 60%",
        scrub: 3,
      } 
     })
     let tl = gsap.timeline()
     tl.from("#logo", {
      opacity: 0,
      y: -200,
      duration: 0.4,
     })
     tl.from("#menu h2", {
      opacity: 0,
      stagger: 1,
      y: -200,
      duration: 0.5,
     })
     gsap.from("#btn button", {
      opacity: 0,
      stagger: 1,
      x: 400,
      duration: 0.6,
      transitionDelay: 1,
      
     })
     gsap.to("#comma", {
      y: 100,
     x: 100,
      duration: 1,
      scale: 0.8,
      markers: true,
      start: "top 100%",
      end: "top 40%",
      scrollTrigger:{
        trigger: "#comma",
        start: "top 90%",
        end: "top 40%",
        scrub: 4,
     }
     })
     gsap.to("#comma2", {
      y: -100,
     x: -100,
      duration: 1,
      scale: 0.8,
      markers: true,
      start: "top 100%",
      end: "top 40%",
      scrollTrigger:{
        trigger: "#comma",
        start: "top 90%",
        end: "top 40%",
        scrub: 4,
     }
     })
     gsap.to("#textls", {
      y: -80,
      duration:1,
      scale: 1.1,
      scrollTrigger:{
        trigger: "#textls",
        start: "top 100%",
        end: "top 40%",
        scrub: 3,
      }
     })
     gsap.to("#lsimg1", {
      y: -40,
      duration: 1,
      scrollTrigger:{
        trigger: "#lsimg1",
        start: "top 100%",
        end: "top 40%",
        scrub: 3,
      }
     })
  }, []);
  return (
    <div className='font-montserrat capitalize'>
      <div className="relative h-screen w-full">
        <header className='z-10 px-10 gap-x-4 py-4 flex justify-start items-center w-full'>
          <img id='logo' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" className='h-[70px]' alt="" />
          <div id='menu' className='flex gap-x-5 uppercase'>
            <h2 className='text-[16px] cursor-pointer text-white'>TOPTRACER RANGE</h2>
            <h2 className='text-[16px] cursor-pointer text-white'>Golf Lessons</h2>
            <h2 className='text-[16px] cursor-pointer text-white'>Adventure Golf</h2>
            <h2 className='text-[16px] cursor-pointer text-white'>coffee shop</h2>
            <h2 className='text-[16px] cursor-pointer text-white'>leagues</h2>
          </div>
        <div id='btn' className='flex gap-x-5'>
        <button  className= 'capitalize bg-black text-white py-2 px-5 rounded-full border-[4px] border-[#91B508] font-semibold text-xl hover:bg-[#91B508]'>book range</button>
        <button className='capitalize bg-black text-white py-2 px-5 rounded-full border-[5px] border-[#91B508] font-semibold text-xl hover:bg-[#91B508]'>book golf</button>
        </div>
        </header>

        <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src="/hero.mp4" autoPlay loop muted playsInline />
        <div className='flex flex-col h-screen justify-start gap-20  items-center'>
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

      <div className='h-[70%] aboutspages py-20 text-white flex justify-center items-center gap-x-10 px-10'>
        <div className='aboutimg'>
          <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" className='w-[220px] rounded-xl' />
        </div>
        <div id='abouttext' className='w-[50%] text-center flex flex-col gap-y-4'>
          <h1 className='text-5xl font-extrabold uppercase'>About US</h1>
          <p className='text-xl'>
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
      <div className='h-[200px] bg-[#89B11B]'>
        <div className='flex h-full justify-between items-center'>
        <img className='h-full' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt=""  />
        <h4 id='sign' className='text-3xl text-center font-semibold font-montserrat w-[50%]'>
          SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
        </h4>
        <img  className='h-full' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="" />
        </div>
      </div>
      <div className=' flex justify-center items-center gap-x-10 px-20 py-10'>
        <img  id='foodimg' className='h-[450px] w-[500px] rounded-xl object-cover' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-1002x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="" />
        <div id='foodtext' className='w-[50%] text-white flex flex-col capitalize justify-center gap-y-10 items-start'>
        <h3 className='text-4xl font-semibold'>Food And Drink</h3>
        <p className='text-[17px] text-start font-light font-mono'>Whether you’re getting ready to play, just finishing your practice session or feeling peckish on the range,
          we have a variety of food and drink options bought directly to your table or bay.

          We make sure that we cater for everyone, offering a range of vegan and gluten free options.</p>
        <button type="button" className='py-2 px-4 capitalize border-4 hover:text-black font-semibold hover:scale-95 hover:bg-[#91B508] border-[#91B508] text-xl rounded-full'>coffee Shop</button>
        </div>
      </div>
      <div className='flex justify-center items-center relative h-[400px]'>
        <img id='comma' className='h-[50px] absolute left-[150px] top-[-50px]' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="" />
        <p className='text-white text-center w-[50%] font-extrabold text-2xl'>Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.</p>
        <img id='comma2' className='h-[50px] absolute right-[160px] bottom-[-40px]' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="" />
      </div>
      <div className='flex justify-center items-center relative py-10'>
        <h1 id='textls' className='z-[-1] top-[20px]  absolute   text-[65px] font-extrabold  text-center text-black' >WHAT ARE YOU WAITING FOR?</h1>
        <div className='px-20 flex justify-center items-center gap-x-20'>
          <div id='lsimg1' className='h-[170px] w-[300px] rounded-xl flex justify-center items-center bg-[#89B11B]'>
           <h1 className='text-3xl font-semibold'>TopRacer Range</h1>
          </div>
          <div id='lsimg1' className='h-[170px] w-[300px] rounded-xl flex justify-center items-center bg-[#89B11B]'>
           <h1 className='text-3xl font-semibold'>TopRacer Range</h1>
          </div>
          <div id='lsimg1' className='h-[170px] w-[300px] rounded-xl flex justify-center items-center bg-[#89B11B]'>
           <h1 className='text-3xl font-semibold'>TopRacer Range</h1>
          </div>
        </div>
      </div>
      <footer className='bg-[#89B11B] h-[220px] gap-y-10 flex px-10  justify-center items-center flex-col'>
       <div className='flex justify-between items-center px-10 w-full'>
       <div>
        <img id='logo' src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" className='h-[70px]' alt="" />
        </div>
        <div id='menu' className='flex gap-x-5 uppercase flex-col justify-center items-start '>
            <h2 className='text-[26px] hover:text-white transition-all ease-in-out  text-black font-extrabold cursor-pointer'>TOPTRACER RANGE</h2>
            <h2 className='text-[26px] hover:text-white transition-all ease-in-out text-black font-extrabold cursor-pointer '>Crazy Golf</h2>
            <h2 className='text-[26px]  hover:text-white transition-all ease-in-out text-black font-extrabold cursor-pointer'>Café
            Golf</h2> 
          </div>
          <div>
          <h2 className='text-[26px]  hover:text-white transition-all ease-in-out text-black font-extrabold cursor-pointer '>Events</h2>
            <h2 className='text-[26px] hover:text-white transition-all ease-in-out text-black font-extrabold cursor-pointer '>Golf Lessons</h2>
            <h2 className='text-[26px]  hover:text-white transition-all ease-in-out text-black font-extrabold cursor-pointer '>Contact Us</h2>
          </div>
       </div>
          <p className='text-xl font-light font-mono text-[#353535] text-center'>Copyright © 2025 Taha Siraj. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;