import React from 'react'

const Footer = () => {
  return (
    <div className='bg-back-color'>
          <div className=' mx-auto  max-w-[1024px]  w-[100%]
    flex flex-col justify-center '>
        <div className='my-[32px] mx-auto'>
            <img src="https://www.fancode.com/b9a4bc578a5a1e8c7703327bc58b108f.svg"
            className='w-[144px]'
            alt=""/>
        </div>
        <div>
            <p className='text-[grey] text-[18px] mb-[23px] text-center'>Connect With Us</p>
            <div className='flex gap-x-[24px] mx-auto max-w-max'>
                
            <img src="https://fancode.com/skillup-uploads/icons/twitter_icon.svg" alt=''/>
            <img src="https://fancode.com/skillup-uploads/icons/insta_icon.svg" alt=''/>
            <img src="https://fancode.com/skillup-uploads/icons/fb_icon.svg" alt=''/>
            </div>
        </div>
        <div className=" px-[32px] mt-[24px] flex justify-center items-center gap-[24px]">
            <div className='text-center'>
              <p className="text-white">
                Corporate Office: ONE BKC, Tower A, 12th &amp; 14th Floor, Unit
                1201 &amp; 1202 and 1401 &amp; 1402, Plot C-66, G Block, Bandra
                Kurla Complex, Bandra (East), Mumbai, Maharashtra-400051
              </p>
            </div>
            <div>
              <p>
                <a  className="text-white">Careers</a>
                <span className="text-white"> | </span>
                <a className="text-white">Help Desk</a>
                <span className="text-white"> | </span>
                <a className="text-white">T&Cs </a>
                <span className="text-white"> | </span>
                <a className="text-white">Privacy Policy </a>
                <span className="text-white"> </span>
                <a className="text-white"> | About Us </a>
                <span className="text-white"> | </span>
                <a className="text-white">IND vs WI </a>
              </p>
            </div>
          </div>

    </div>
    </div>

  )
}

export default Footer