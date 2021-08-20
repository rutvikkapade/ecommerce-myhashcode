import{useState,useEffect} from 'react';
import router, { useRouter } from 'next/router';




export default function AllProductsScreen(props){
return(

<div className="product-container">
    <center><div className="product-card-holder">
      {
      props.products.map(key=>
      <div key={key.idproducts} className="product-card">
           <center><div key={key.idproducts+100} className="product-image-holder">
            <img key={key.idproducts+200} src={key.productImg}  className="product-image"/>
           </div></center>
            <br/>
            <h4 key={key.idproducts+300} className="product-name">{key.name}</h4>
            <h5 key={key.idproducts+400} className="product-brand">By {key.brand}</h5>
            <h5 key={key.idproducts+500} className="product-price">Rs {key.price}</h5>
            <h6 key={key.idproducts+600} className="product-type">Type : {key.productType}</h6>
            <label key={key.idproducts+700} className="product-rating">Rated {key.rating}</label>
            <center><button key={key.idproducts+900}  className="buy-now btn btn-warning" onClick={(event)=>{
                    var productObj={
                        product_id : Math.trunc(Math.random()*999),
                        product_image : key.productImg,
                        product_name : key.name,
                        product_brand : key.brand,
                        product_price : key.price,
                        product_rating : key.rating,
                    }
                  props.addToCart(productObj,parseInt(key.price));
                  router.push('/cart');

            }}>Buy Now</button></center>
            <center><button key={key.idproducts+1000} className="add-to-cart btn btn-primary" onClick={(event)=>{
                var productObj={
                    product_id : Math.trunc(Math.random()*999),
                    product_image : key.productImg,
                    product_name : key.name,
                    product_brand : key.brand,
                    product_price : key.price,
                    product_rating : key.rating,
                }
                alert(product_name+' added to cart ');
              props.addToCart(productObj,parseInt(key.price));

            } } >Add to Cart</button></center>
        </div>
        )

        }
    </div></center>
</div>

)


}