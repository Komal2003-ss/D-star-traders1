 import React, { useState } from 'react'

//  import MyBtn from './MyBtn';
 import Menu from './Menu';

export default function ShoeItem(){


    const [items,setItems] = useState(Menu);

    const filterItem = (cateItem) => {
        const updatedItems = Menu.filter((curElem) =>{
              return curElem.category === cateItem;
              
        });
        setItems(updatedItems);
    
      }
  return (
    <>
   
        <div className='container'>
        <div className='my-3'>
            <h1 className='text-center text-white'>D Star Traders</h1>
            {/* <MyBtn/> */}
            <div className='text-center my-3'>
            <span className='m-3'><button  className="mybtn btn btn-success" onClick={()=>filterItem('man')}>Man Leather Shoes</button></span>
            <span className='m-3'><button className="mybtn btn btn-success" onClick={()=>filterItem("women")}>Women Sandals</button></span>
            <span className='m-3'><button className="mybtn btn btn-success" onClick={()=>filterItem("loafer")}>Loafer</button></span>
            <span className='my-3'><button className="mybtn btn btn-success" onClick={()=>filterItem("mslipper")}>Man Slipper</button></span>
            </div>

        </div>
            <div className='row'>
            {
                items.map((elem)=>{
                    const {image,name,price} = elem;

                    return(
                        <div className='col-lg-3 col-12  mb-3'>
                    <div className="card card_img">
                       <a href={image} rel="noreferrer" target='_blank' ><img src={image}  alt="..." target="_blank" height="100%" width="100%" /></a> 
                       
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p class="card-text">{price}</p>
                            <a href="/" className="btn btn-primary">Show More</a>
                        </div>
                    </div>
                </div>
                    )
                })
            }
                
               
            </div>
        </div>
    </>
  )
}
