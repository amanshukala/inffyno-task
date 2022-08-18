import React,{useState} from 'react'
import Modal from './modal';
import Carcard from './UI/carcard';
import CarFilter from "./UI/carfilter";

const Home = () => {

 const [showModal, setShowModal] = useState(false);

 

  return (
    <div className='  bg-[#FAFAFC] px-[64px]'>
      <div className = "pt-[36px] relative">
          <div className='flex justify-between items-center index-0'>
                <div>
                    <p className='text-[#8F90A6] text-[12px] font-bold uppercase'>Used cars for sale</p>
                    <p className='text-[#28293D] font-bold
                    text-[32px] '>Showing 1,234 cars</p>
                </div>
                <div>
                    <button className ="bg-[black] rounded-[10px] py-[6px]
                    px-[24px] text-white font-bold" >My Garage</button>
                </div>
          </div>
          <div className='mt-[36px]  flex gap-x-[24px] index-0 '>
                <div>
                  <CarFilter /> 
                </div >
                <div className =" w-[984px] h-max"> 
                  <Carcard  setShowModal={setShowModal} />
                   
                </div>
              

          </div>
          <div className = "absolute index-1 left-0 top-[-129px]">
            {showModal && <Modal  onClose={() => setShowModal(false)}
                show={showModal}/>}
          </div>
         

      </div>
    



{/* 
        <div className='ml-[508px] mr-[172px] flex flex-col gap-y-[12px] mt-[40px'>
      <p className = "text-[28px] font-bold text-center text-[#28293D]">Why Autodigg?</p>
      
        
      <p className ="text-[#8F90A6] text-[14px] font-bold 
      max-w-[760px] text-center leading-[20px] whitespace-pre-wrap">Amet minim mollit non deserunt ullamco est sit aliqua 
        dolor do amet sint. Velit officia consequat duis enim velit mollit.
         Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      
    </div> */}
    </div>
  )
}

export default Home