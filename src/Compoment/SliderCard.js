import React from 'react'

const SliderCard = (props) => {
  return (
    <div className={ props.type ==="Features Matchhes" ? " bg-header-card-color pt-[60px]  h-[150px] pl-[163px]" : "ml-[163px]"} >

        <div>
            {props.type ==="Features Matchhes" && <h1 className='mb-[16px] pt-[30px] pl-[111px] text-[20px] font-semibold text-white'>Features Matchhes</h1>}
            {props.type ==="IND Tour of ENG" && <h1 className='mb-[16px] text-[20px] pl-[111px] font-semibold text-black'>IND Tour of ENG</h1>}
            {props.type ==="Kiwis Take 2-0 Lead" && <h1 className='mb-[16px] text-[20px] pl-[111px] font-semibold text-black'>Kiwis Take 2-0 Lead</h1>}

        </div>
    </div>
  )
}

export default SliderCard