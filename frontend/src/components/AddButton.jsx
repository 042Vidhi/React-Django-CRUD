import React from 'react'

export default function MobileAddButton() {
  const handleClick = () => { 
    window.location.href = '/notes/create';
  }

  return (
    <>
    <div  className='lg:hidden rounded-full bg-yellow-400 flex justify-center  fixed bottom-6 right-6 h-8 w-8 md:h-10 md:w-10 font-bold text-xl md:text-2xl text-slate-50'  onClick={handleClick}>+</div>
    <div className='hidden lg:block rounded-lg bg-yellow-400  text-center fixed top-10 right-6  w-24 py-2  font-medium text-xl cursor-pointer text-slate-50' onClick={handleClick}>
      Add +
    </div>
    </>
  )
}
