import React from "react";
import './header.css'
import './main'
import Vector from '../assets/icon/Vector.png'
 import vecto  from '../assets/icon/2.png'
 import yulduz  from '../assets/icon/3.png'
 import lak from '../assets/icon/lak.png'
 import man  from '../assets/img/manzara.jpg'
 import Header from './main'
function Hed(){
    let obj=[
        {id:1,img:`${man}`,ctiy:"Enjoy Beauty place in Bali City",img2:`${Vector}`,tyme:'10 Day’s',img_2:`${vecto}`,person:"8 person",img_3:`${yulduz}`,km:'4.8 (2.5k Review)',img_lak:`${lak}`,joy:"Bali, indonesha",btn:'$1200'},
        {id:2,img:`${man}`,ctiy:"Enjoy Beauty place in Bali City",img2:`${Vector}`,tyme:'10 Day’s',img_2:`${vecto}`,person:"8 person",img_3:`${yulduz}`,km:'4.8 (2.5k Review)',img_lak:`${lak}`,joy:"Bali, indonesha",btn:'$1200'},
        {id:3,img:`${man}`,ctiy:"Enjoy Beauty place in Bali City",img2:`${Vector}`,tyme:'10 Day’s',img_2:`${vecto}`,person:"8 person",img_3:`${yulduz}`,km:'4.8 (2.5k Review)',img_lak:`${lak}`,joy:"Bali, indonesha",btn:'$1200'},
        {id:4,img:`${man}`,ctiy:"Enjoy Beauty place in Bali City",img2:`${Vector}`,tyme:'10 Day’s',img_2:`${vecto}`,person:"8 person",img_3:`${yulduz}`,km:'4.8 (2.5k Review)',img_lak:`${lak}`,joy:"Bali, indonesha",btn:'$1200'},
        {id:5,img:`${man}`,ctiy:"Enjoy Beauty place in Bali City",img2:`${Vector}`,tyme:'10 Day’s',img_2:`${vecto}`,person:"8 person",img_3:`${yulduz}`,km:'4.8 (2.5k Review)',img_lak:`${lak}`,joy:"Bali, indonesha",btn:'$1200'},
        {id:6,img:`${man}`,ctiy:"Enjoy Beauty place in Bali City",img2:`${Vector}`,tyme:'10 Day’s',img_2:`${vecto}`,person:"8 person",img_3:`${yulduz}`,km:'4.8 (2.5k Review)',img_lak:`${lak}`,joy:"Bali, indonesha",btn:'$1200'},
]
    return (
        <div className="header2">
        {
             obj.map((v)=>{
              return <Header key={obj.id}>{v}</Header>
             })
        }
     </div>
    )
}

export default Hed