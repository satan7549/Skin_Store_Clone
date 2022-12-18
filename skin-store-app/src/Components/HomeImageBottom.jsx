import React from 'react'
import "../style/HomeImageBottom.css"
const img=[
    "https://static.thcdn.com/images/large/webp/widgets/121-us/36/original-Skinstore_August_Referral_-_Untitled_Page_%282%29-022536.png",
    "https://static.thcdn.com/images/large/webp/widgets/121-us/37/original-0308-STDCRE32346-SS-AH-SkinStore-Concierge-Banners-770x200-084637.jpg"
]
 const HomeImageBottom = () => {
  return (
    <div className='HomeImageBottom-main-div' >
        {
            img.map((ele,i)=><img key={i} src={ele} alt={i} />)
        }
        
    </div>
  )
}

export default HomeImageBottom