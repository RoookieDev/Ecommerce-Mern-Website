import React from 'react'

export const CatergoryCard = (props) => {
    const {colSize,icon, title} = props
  return (
    <div className= {`card ${colSize}` }>
        <img src={icon} alt="" />
        <h5>{title}</h5>
    </div>
  )
}
