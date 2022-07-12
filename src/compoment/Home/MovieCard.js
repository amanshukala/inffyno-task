
import React, { useState } from 'react'
import Slider from "react-slick";
import { IoIosArrowDown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'


const MovieCard = (props) => {
    
    const settings = {
        dots: false,
        arrow: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    const navigate = useNavigate()

    return (
        <div>
            <div className=' watch_movie   overflow-hidden  z-[67] '>
                <div className='flex items-center justify-between'>

                    {props.movietype === "upcoming" && (<h1 className='text-[#FFFFFF] text-[18px] font-bold mt-[26px] ml-[23px]'>MOVIES YOU MUST WATCH</h1>)}
                    {props.movietype === "top_rated" && (<h1 className='text-[#FFFFFF] text-[18px] font-bold mt-[26px] ml-[23px]'>RECOMMENDED FOR YOU</h1>)}
                    {props.movietype === "now_playing" && (<h1 className='text-[#FFFFFF] text-[18px] font-bold mt-[26px] ml-[23px]'>BOLLYWOOD CLASSICS</h1>)}


                    {props.movietype === "upcoming" && (<button className='rounded-[30px] bg-[#5C5C5C] py-[11px] pl-[28px] mt-[12px] 
                pr-[18px] flex items-center text-[16px] font-bold
              text-[white]'>FILTER <span className='ml-[18px] '><IoIosArrowDown /></span></button>)}

                </div>
                <div className='ml-[23px]'>
                    <Slider {...settings}>
                        {props.movielist.map((p, key) => {
                            return (

                                <div key={p.id} className='mt-[21px] ' onClick={() => { navigate(`/watch/${p.id}`) }}>
                                    <img src={`https://image.tmdb.org/t/p/w185/${p.poster_path}`} alt="" className='rounded-[7px] w-[168px] max-w-none h-auto hover:w-[200px]' />

                                    <div className='mt-[10p] flex flex-col gap-y-[5px] '>
                                        <p className='text-[18px] text-[#FFFFFF] font-bold overflow-hidden whitespace-nowrap max-w-[150px]
                                max-h-[20px] text-ellipsis'>{p.title}</p>
                                        <p className='text-[#AFAFAF]'>{new Date(p.release_date).getFullYear()}</p>

                                        <div className='flex gap-x-[89px]'>
                                            <div className='flex  gap-x-[6px]'>
                                                <img src="/image/IM.svg" alt='' className='w-[28px] h-[14px]' />
                                                <p className='text-[#FFC907] text-[11px] font-bold'>{p.vote_average}</p>
                                            </div>
                                            <div className='flex gap-x-[6px]'>
                                                <img src="/image/eye.svg" alt='' className='w-[17px] h-[16px]' />
                                                <button onClick={() => { (props.setMovielist({...props.movielist ,likes: props.movielist.likes ? true : true}))}}>
                                                {props.movielist.likes ? "" :<img src="/image/heart.svg" alt='' className='w-[17px] h-[16px]' />}
                                            </button>
                                            </div>


                                        </div>
                                    </div>

                                </div>

                            )
                        })}
                        
                    </Slider>
                

                </div>
                

            </div>

        </div>
    )
}

export default MovieCard;