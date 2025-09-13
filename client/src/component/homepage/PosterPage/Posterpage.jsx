import React from 'react'

// css Import 
import '../../../assets/css/PosterStyle.css'

import { PosterImage } from './PosterImage'
import { PosterText } from './PosterText'

export const Posterpage = () => {
  return (
    <div className='posterpage'>
        <div className="container col-md-10">
            <div className="row">
                <PosterImage/>
                <PosterText/>
            </div>
            {/* row end here */}
        </div>
        {/* container end here */}
    </div>
    // posterPage end here
  )
}
