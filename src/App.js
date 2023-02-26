import { useState,useEffect } from 'react';
import './App.css';

function App() {
const[quote,setQuote]=useState("")

// Fetching Quote
function getQuote(){
  fetch("https://api.quotable.io/random")
  .then(res=>res.json())
  .then(res=>{
    setQuote(res)
  })
}
// Copy quote
function copyQuote(){
  navigator.clipboard.writeText(quote.content)
}

function speakQuote(){
let utterance=new SpeechSynthesisUtterance(quote.content) ;
speechSynthesis.speak(utterance);
}

useEffect(() => {
      getQuote();
}, []);



  return (
 <>
 <div className='flex flex-col h-screen justify-center items-center  bg-gray-700'>
 <div className="box mx-auto text-white w-5/6 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 h-auto  pb-0  bg-indigo-500 shadow-lg shadow-neutral-500  rounded-lg">
  <div className='pb-4 mr-4 ml-4 py-4' >
    <div className='flex item-center text-center justify-center'> 
     <p className='italic pb-2 font-semibold 2xl:text-lg xl:text-lg'>"{quote.content}"</p>
    </div>
    <div className='flex item-center justify-center text-right mx-auto'>
     <p className='italic text-sm 2xl:text-md xl:text-md'>-- {quote.author}</p>
    </div>
  </div>

  <div className='flex justify-between ml-4 mr-4 pb-4'>
   <button className='bg-white border-2 border-white text-indigo-500  rounded-full w-10 h-10 p-2 item-center text-sm font-semibold' onClick={copyQuote} onMouseOver="Copy Quote"> <img src="copy.png" alt='Copy' onClick={copyQuote} className='w-5 h-5' ></img> </button>
   
   <button className='bg-white border-2 border-white text-indigo-500  rounded-full p-2  text-sm font-semibold' onClick={speakQuote}><img src="sound.png" alt='Copy' onClick={speakQuote} className='w-5 h-5' ></img></button>
  </div>
  <div>
  <button className='w-full bg-white border-2 border-white text-indigo-500  rounded-b-lg p-2 pl-2 pr-2  font-semibold' onClick={getQuote}>New Quote</button>
  </div>
  </div>
  </div>
 
 </>
  );
}

export default App;
