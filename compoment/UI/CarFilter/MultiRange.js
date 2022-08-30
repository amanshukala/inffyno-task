import React,{useState} from 'react';

import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

const MultiRange= ({setRange,defaultValue ,min ,max ,step}) => {

    const [multiRange, setMultiRange] = useState(defaultValue);
  return (
    <div>
    
      <Slider
        color="orange"
        inverted={false}
        min={min} max={max} step={step}
        range
        allowCross={false}
        onChange={(e) => {setMultiRange(e) ,setRange(e)}}
        defaultValue={multiRange}
      />
    </div>
  )
}

export default MultiRange;