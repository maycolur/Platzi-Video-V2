import React from 'react'
import VolumeIcon from '../../icons/components/Volume'
import './volume.css'

const Volume = (props) => (
  <div className="Volume">
    <VolumeIcon 
      color="white" 
      size="20"
    />
    <div className="Volume-range">
      <input 
        type="range"
        min="0"
        max="1"
        step={.05}
        onChange={props.handleVolume}
      />
    </div>
  </div>
)

export default Volume