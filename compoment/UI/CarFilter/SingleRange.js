import React,{useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const SingleRange = ({setRange,defaultValue ,min ,max ,step}) => {

    const [multiRange, setMultiRange] = useState(defaultValue);
  return (
    <div>
   
      <Slider
        color="orange"
        inverted={false}
        min={min} max={max} step={step}
        allowCross={false}
        onChange={(e) => {setMultiRange(e) ,setRange(e)}}
        defaultValue={multiRange}
      />
    </div>
  )
}

export default SingleRange