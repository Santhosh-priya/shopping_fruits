import React from 'react'
import style from './footer.module.sass'

const Footer = () => {
  return (
    <div>
  
        <div className={style.hollnav}>
            <div className={style.nav1}>NEVER MISS AN OFFERS</div>
            <div className={style.nav2}>Subscribe now to receive offers & gift vouchers directly in your inbox.</div>
            <div className={style.inputbox}>
                <input   className={style.nav3} type='text' placeholder='Enter Your Email Adress'/>
          
              <button className={style.nav4} >SUBSCRIBE</button>
            </div>

            <div className={style.last}>

            <div>Exotic Fruits |</div>
            <div> Premium Mangoes  |</div>
            <div>Imported Fruits  |</div>
            <div> Fresh Berries |</div>
            <div> Seasonal Fruits|</div>
          
            </div>

            <div className={style.last}>

            <div>Shipping Policy  |</div>
            <div> Privacy Policy  |</div>
            <div> Refund Policy|</div>
            <div>Terms of Service|</div>
            
          
            </div>
            

 

            
        </div>
     
      
    </div>
  )
}

export default Footer
