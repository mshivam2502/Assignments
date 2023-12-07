import Product from "./Product"
// import { useState } from "react"

export default function Productlist(){
    let productlist=[
        {id:"1",name:"Sword Art online",price:500,url:"https://img.flawlessfiles.com/_r/300x400/100/90/dc/90dca175561e61180622bc79218104cb/90dca175561e61180622bc79218104cb.jpg"},
        {id:"2",name:"Black Clover",price:900,url:"https://img.flawlessfiles.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg"},
        {id:"3",name:"Eminence in Shadow",price:650,url:"https://img.flawlessfiles.com/_r/300x400/100/bc/a4/bca4a71e271a30fb1b44d33d56db8f8f/bca4a71e271a30fb1b44d33d56db8f8f.jpg"},
       ]

    
    return(
        <div className="productlist">
            {
                productlist.map((productli)=>{
                    return(
                        <Product name={productli.name} price={productli.price} url={productli.url} key={productli.id} />
                            
                        
                    )
                }

                )

            }

        
           
        
        </div>
    )
}