import React from 'react'


// import image
import jbl_1 from '../../../assets/images/png/headphone/jbl_b1.png'
import jbl_2 from '../../../assets/images/png/headphone/jbl_3.png'
import jbl_3 from '../../../assets/images/png/headphone/jbl_b2.png'
import jbl_4 from '../../../assets/images/png/headphone/jbl_4.png'

// importing CSS
import '../../../assets/css/GridLayoutStyle.css'

// Importing Component
import { GridBox } from './GridBox'


export const GridLayout = () => {
  return (
    <div className='gridLayoutPage'>
        <div className="container-fluid containers">
            <GridBox title={'JBL Tune'} imgSrc={jbl_1} model={'510BT'} para={'The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached.'}/>
            <GridBox title={'JBL WAVE'} imgSrc={jbl_2} model={'Flex 2'} para={'the Wave Flex 2 shine for their comfortable ergonomic design'}/>
            <GridBox title={'JBL TOUR'} imgSrc={jbl_3} model={'One M2'} para={'JBL Tour One M2’s True Adaptive Noise Cancelling technology tunes out distractions so you can enjoy your favorite playlists'}/>
            <GridBox title={'JBL LIVE'} imgSrc={jbl_4} model={'770NC'} para={"JBL Live 770NC headphones deliver powerful JBL Signature Sound in a comfortable over-ear headband style"}/>
        </div>
    </div>
  )
}
