import generateHash from 'random-hash'
import {useState} from 'react'
import router, { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';

function CartIsEmpty(){
    return(
        <center><div className="cartIsEmpty">
            <img height="30" width="30" src="https://freepngimg.com/thumb/sad_emoji/36875-1-sad-emoji-hd.png" className="cartIsEmptyImg"/>
            <label>Your Cart is Empty</label>
        </div></center>
    )
}
function Nothing(){
    return(
       <div>

       </div> 
    )
}
function cartProduct(key,index,removeProduct){
  var keyid= generateHash(14);
return(  

  <center key={keyid+generateHash(8)}><div key={keyid+generateHash(8)} className="mainContainer">
       <div key={keyid+generateHash(8)} className="one">
           <div key={keyid+generateHash(8)} className="imageHolder">
                <img key={keyid+generateHash(8)} className="productImage" src={key.product_image} />
           </div>
           <div  key={keyid+generateHash(8)} className="productInfo">
               <div key={keyid+generateHash(8)} className="productInfoHolder">
                <h4 key={keyid+generateHash(8)} className="productName">{key.product_name} </h4>
               <h5 key={keyid+generateHash(8)} className="productBrand">By {key.product_brand} </h5>
                <h6 key={keyid+generateHash(8)} className="productRating">{key.product_rating} </h6>
                </div>
           </div>
       </div>
       <div key={keyid+generateHash(8)} className="two">
           <div key={keyid+generateHash(8)} className="priceHolder">
           <label>Rs<h3 key={keyid+generateHash(8)} id={"productPrice"+index} className="productPrice">{key.product_price}</h3></label>
           </div>
           <div key={keyid+generateHash(8)} className="removeHolder" value={key.product_price}>
                <button key={keyid+generateHash(8)} id={index} className="removeProduct btn btn-outline-danger" onClick={(event)=>{
                removeProduct(event.target.id,parseInt(document.getElementById('productPrice'+event.target.id).innerHTML));
                
           }}>Remove Product</button>
           </div>
       </div>
   </div></center>
)
}

export default function CartComponent(props){

    var index=0;
    const removeProduct=async(id,price)=>{
        props.updateCart(id,price);
    }

return(<div>
    <center> <div className="totalMoni">
    <h3>Sum Total Rs : {props.cartTotal}</h3>
    </div></center>
    {
        props.cartProducts.length==0?<CartIsEmpty/>:<Nothing/>
    }
   <div  className="cart-popup">
    {props.cartProducts.map(key=>cartProduct(key,index++,removeProduct))}
   
    
   </div>
   
</div>)

}