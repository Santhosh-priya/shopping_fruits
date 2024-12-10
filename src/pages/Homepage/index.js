import React, { useState } from 'react'
import style from './Homepage.module.sass'
import sliderimg1 from '../../imgs/slide1.jfif'
import sliderimg2 from '../../imgs/slide2.jfif'
import sliderimg3 from '../../imgs/slide3.jfif'

import img1 from '../../imgs/img1.jfif'
import card1img2 from '../../imgs/card1img2.jfif'
import card1img3 from '../../imgs/card1img3.jfif'
import card1img4 from '../../imgs/card1img4.jfif'
import card2img1 from '../../imgs/card2img1.jfif'
import card2img2 from '../../imgs/card2img2.jfif'
import card2img3 from '../../imgs/card2img3.jfif'
import card2img4 from '../../imgs/card2img4.jfif'
import dealimg1 from '../../imgs/dealimg1.png'
import dealimg2 from '../../imgs/dealimg2.png'
import dealimg3 from '../../imgs/dealimg3.png'
import card4img1 from '../../imgs/card4img1.jfif'
import card4img2 from '../../imgs/card4img2.jfif'
import card4img3 from '../../imgs/card4img3.jfif'
import card4img4 from '../../imgs/card4img4.jfif'
import card5img1 from '../../imgs/card5img1 (2).jfif'
import card5img2 from '../../imgs/card5img2 (2).jfif'
import card6img1 from '../../imgs/card6img1.jfif'
import card6img2 from '../../imgs/card6img2.jfif'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Homepage = () => {

const card =[
  {
    img: img1,
    para1: 'Fresh Raspberry', 
    para2: '125 Grams',
    para3: 'Rs.200'
  },
  {
    img: card1img2,
    para1: 'pomegranate', 
    para2: '125 Grams',
    para3: 'Rs.200'
  },
  {
    img: card1img3,
    para1: 'Orange', 
    para2: '125 Grams',
    para3: 'Rs.200'
  },
  {
    img: card1img4,
    para1: 'Apple', 
    para2: '125 Grams',
    para3: 'Rs.200'
  }
]
const card2 =[
  {
    img: card2img1,
    para1: 'Green Graps', 
    para2: '125 Grams',
    para3: 'Rs.200'
  },
  {
    img: card2img2,
    para1: 'Pears', 
    para2: '100 Grams',
    para3: 'Rs.250'
  },
  {
    img: card2img3,
    para1: 'Banana', 
    para2: '125 Grams',
    para3: 'Rs.200'
  },
  {
    img: card2img4,
    para1: 'Fig Fruits', 
    para2: '125 Grams',
    para3: 'Rs.200'
  },
 
]

const card3=[
  {
    img: dealimg1,
    para1: 'Premium',
    para2: 'Juicy Fruits',
    para3: 'Shop Now',
  },
  {
    img: dealimg2,
    para1: 'Premium',
    para2: 'Juicy Fruits',
    para3: 'Shop Now'
  },
  {
    img: dealimg3,
    para1: 'Premium',
    para2: 'Juicy Fruits',
    para3: 'Shop Now'
  }
]
const card4=[
  {
    img: card4img1,
    para1: '24X7 SUPPORT ASSISTANCE',
    para2: 'Call|Whats App|Messenger'
  },
  {
    img: card4img2,
    para1: 'FREE GIFT VOUCHOR',
    para2: 'Valid on next purchase'
  },
  {
    img: card4img3,
    para1: 'FREE 24 HOURS DELIVERY',
    para2: 'Mumbai | Thane | Navi Mumbai'
  },
  {
    img: card4img4,
    para1: 'GUARANTEEN EXCANGE ',
    para2: 'Exchang whith 24 hours'
  }
]
const card5=[
  {
    img: card5img1,
    para1: "Fresh Graps",
    para2: "Rs.200"

  },
  {
    img: card5img2,
    para1: "Fresh blueberry",
    para2: "Rs.200"

  },
  {
    img: card6img1,
    para1: "Fresh Guava.",
    para2: "Rs.200"

  },
  {
    img: card6img2,
    para1: "Fresh Apple",
    para2: "Rs.200"

  },
  


]


  const [isShown, setIsShown] = useState(false);

 return (
  
    <div>
      {/* <div>
      <center><img src={sliderimg1} alt="" className={style.homeimg}  /></center>
      </div> */}

<Carousel   autoPlay={true} showThumbs={false} transitionTime={1000}infiniteLoop={true}>
                <div>
                    <img src={sliderimg1} alt='no img' className={style.homeimg} />
                    
                </div>
                <div>
                <img src={sliderimg2} alt='no img' className={style.homeimg}/>
                    
                </div>
                <div>
                <img src={sliderimg3} alt='no img' className={style.homeimg}/>
                  
                </div>
            </Carousel>


      <div>

        <div className={style.home1}>LATESTS FRUITS</div>

      </div>

       <div className={style.card}    
       
       onMouseEnter={() => setIsShown(true)}
       onMouseLeave={() => setIsShown(false)} > 
      
        {card.map((x,index)=>(
          <div key={index} className={style.boxs1}>
        
          <img src={x.img} alt="" className={style.box1}/>
       

        <div>
          <div>{x.para1}</div>
          <div>{x.para2}</div>
          <div>{x.para3}</div>

        </div>
        
      </div>
        ))}
      </div>


      {isShown && (
        <div>
          fdsg
        </div>




    )}





      <div className={style.home1}>PREMIUM FRUITS</div>

      <div className={style.card}>  
        {card2.map((x,index)=>(
          <div key={index} className={style.boxs1}>
        <div>
          <img src={x.img} alt="" className={style.box1}/>
        </div>

        <div>
          <div>{x.para1}</div>
          <div>{x.para2}</div>
          <div>{x.para3}</div>

        </div>
        
      </div>
        ))}
      </div>


            <div className={style.home1}>DEAL OF THA DAY</div>
             <div className={style.card3}>
              {card3.map((x,index)=>(
            <div key={index} className={style.deal1}>
              <div   className={style.deal}>
                <img className={style.card3img1}src={x.img} alt=""/>
                
              </div>

              <div className={style.dealbox1}>
                <div className={style.pre}>{x.para1}</div>
                <div className={style.fru}>{x.para2}</div>
                <button className={style.shop}>{x.para3}</button>
              </div>
            </div>
              ))}
            </div>

           
            <div className={style.card4hole}>
              {card4.map((x,index)=>(
            <div key={index} className={style.card4}>
              
              <img className={style.card4img1} src={x.img} alt=""/>
              
              
              <div className={style.card4para1} >{x.para1}</div>
              <div  className={style.card4para2}>{x.para2}</div>
            </div>
              ))}
            </div>

            <div className={style.home1}>PREMIUM IMPORTED FRUITS</div>

            <div className={style.card5}>
              {card5.map((x,index)=>(
            <div key={index} className={style.hole5}>
             
             <div>
               <img className={style.card51img} src={x.img} alt=""/>
             </div>

             <div>
              <div className={style.card5para1}>{x.para1}</div>
              <div className={style.card5para2}>{x.para2}</div>
             </div>
             

            </div>
              ))}
            </div>







    </div>

   
  )
}

export default Homepage

