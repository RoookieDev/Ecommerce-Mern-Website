import React from 'react'
import { Textpage } from './Textpage'


// css import
import '../../../assets/css/ContentStyle.css'
import { ImageBox } from './ImageBox'
export const ContentPage = () => {
  return (
    <div className='contentPage'>
        <div className="container">
          <div className="row">
            <Textpage/>
            <ImageBox/>
        </div>
        {/* row end here */}
        </div>
    </div>
    // contentPage
  )
}
