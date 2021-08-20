import '../styles/globals.css'
import Head from "next/head"
import {useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import '../styles/products.css'
import '../styles/productCard.css'
import '../styles/cartImage.css'
import '../styles/cartPopUp.css'
import Spacer from '../components/spacer'
import Link from 'next/link'
import router from 'next/router'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carousel.css'
import '../styles/instructions.css'

function MyApp({ Component, pageProps }) {
const[categories,setCategories]=useState([]);
const[currCategory,setCurrCategory]=useState('All');
const[products,setProducts]=useState([]);
const[cart,setCartProducts]=useState([]);
const[cartTotal,setCartTotal]=useState(0);
const[productAdded,setProductAdded]=useState(0);

useEffect(async()=>{

const res=await fetch('https://ecommerce-myhashcode-server.herokuapp.com/getCategories').then(res=>res.json()).then((result)=>{setCategories(result);} );

const resTwo=await fetch('https://ecommerce-myhashcode-server.herokuapp.com/getProducts',{
mode : 'cors',
method : 'post',
headers  : {
'content-type' : 'application/json',
},
body : JSON.stringify({
"data" : currCategory,
}),
}).then(res=>res.json()).then((result)=>{setProducts(result); });

},[currCategory,cartTotal]);
  return (
  <div>
  <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"/>
  </Head>
  <Script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></Script>
<Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></Script>
<Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></Script>
<Script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></Script>
  <Navbar categories={categories} setCategory={(result)=>{setCurrCategory(result);} } renderMenuOnMount={true}/>
  <Spacer/>
  <div className="product-cart" style={ cart.length==0?{backgroundColor : "#EDEDED"
}:{backgroundColor : "#00A2FF"} }  onClick={(event)=>{
} }>
<Link href="/cart">
  <img className="cart-image" src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-shopping-cart-icon-shopping-cart.png" ></img>
 </Link>
  <div className="cart-notification" style={ cart.length==0?{backgroundColor : "transparent"} : {backgroundColor: "red" }   } ></div>
  </div>
  <Component {...pageProps} setCategory={(result)=>{setCurrCategory(result);}} products={products}  addToCart={(result,price)=>{setCartProducts(old=>[...old,result]); setCartTotal(cartTotal+price)}}   updateCart={(id,price)=>{ console.log(id); cart.splice(id,1); setCartTotal(cartTotal-price); router.push('/cart')  }} cartProducts={cart} cartTotal={cartTotal} /> 
  </div>
  )
}

export default MyApp
