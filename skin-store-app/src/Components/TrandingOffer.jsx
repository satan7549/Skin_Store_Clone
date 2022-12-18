import { Heading } from '@chakra-ui/react';
import React from 'react'
import {trandingOffer} from "../data/DiscoverHolidayfun"
import "../style/TrandingOffer.css"

export const TrandingOffer = () => {
  return ( 
    <div className="mainTrandingOffer">
    <Heading fontWeight="bolder">Tranding Offer</Heading>
    <div className="trandingOffer">
      {trandingOffer.map((el,i) => {
        return (
          <div key={i}>
            <img src={el.src} />
            <h4>{el.h}</h4>
            <p>{el.p}</p>
            <button>Shop Now</button>
          </div>
        );
      })}
    </div>
  </div>
  )
}
