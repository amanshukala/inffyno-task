import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player';

const MovieTrailer = () => {
    let { video_id } = useParams();
    let navigate =useNavigate();

    return (<>
        <button className='absolute' onClick={()=>{navigate(-1)}}>
            <img src="/image/aerrow-left.svg" alt="" className='w-[40px] h-[40px]'/>
        </button>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${video_id}`}
            className='react-player'

            playing
            height="100%"
            width="100%"
            controls={true} />

    </>



    )
}

export default MovieTrailer