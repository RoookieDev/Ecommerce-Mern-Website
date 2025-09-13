import React, { useEffect, useState } from 'react'

// import product file
import products from '../../../assets/json_data/headphone_prd.json'

// CSS LInk
import '../../../assets/css/ProductStyle.css'

import { ProductTitle } from './ProductTitle'
import { ProductCard } from './ProductCard'
import axios from 'axios'

export const ProductPage = () => {
  let col_size = 'col-md-4'
  // Get token
  const token = localStorage.getItem('token')

  
  // get cartData
  // useEffect(()=>{
  //   axios.post('http://localhost:3001/api/getCartItem',{token,prd},{
  //     headers:{
  //       Authorization:`Bearer ${token}`
  //     }
  //   })
  //   .then(res=> console.log(res))
  //   .catch(err=> console.log(err))
  // },[])



  // paging
  const[currentPage,setCurrentpage] = useState(1);
  const[productPerPage,setProductPerPage] = useState(6);
  
  const lastPageIndex = currentPage * productPerPage;
  const firstPageIndex = lastPageIndex - productPerPage;

  const currentProduct =  products.slice(firstPageIndex,lastPageIndex)

  // filter data by company name
  const beat = products.filter(headphone => headphone.name.includes('Air')).slice(firstPageIndex,lastPageIndex);



  return (
    <div className='ProductPage'>
      
      <div className="col-md-11 mx-auto">
        <ProductTitle/>
        <div className="row">
        {
          beat.map(prd=> {
            return(<ProductCard key={prd.id} col_size={col_size} img={prd.image} name={prd.name} price={prd.actual_price} rating={prd.ratings} id={prd.id}/>)
          })
        }
      </div>
      </div>
    </div>
  )
}
