import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



let image = [
  "https://www.rent.com/blog/wp-content/uploads/2020/07/house_leasing_hero.jpg",
  "https://s.oneroof.co.nz/image/53/ce/53ce55704cfc683218b535831351ecbf.png?x-oss-process=image/quality,q_80",
  
  "https://static.asianpaints.com/content/dam/asian_paints/services/sps-painting-service-banner-new.jpg.transform/cc-width-1366-height-450/image.webp",
  "https://assets.thehansindia.com/h-upload/2020/06/30/980663-corpentor.webp",
  "https://pomplumbing.ca/wp-content/uploads/elementor/thumbs/commercial-plumber-1-pxpcknexr6zd5msyxs40fzfq4hao238vf8ppayn62w.jpeg",
  "https://www.ompackersnmovers.com/wp-content/uploads/2022/04/OPM-JAIpur.png",
]


const HomeTop = () => {
  return ( <Carousel 
             autoPlay={true}
             showArrows={true}
             showThumbs={false}
             infiniteLoop={true}
             interval={2500}
             transitionTime={700}
           >
            {image.map((el) =>{
             return <div style={{height:"30rem",width:"100%",padding:"1rem 1rem 0 1rem"}} >
                  <img src={el} alt="pic" style={{height:"100%",width:"100%"}}/>
              </div>
            })}
          </Carousel>
  )
}

export default HomeTop