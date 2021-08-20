import ProductForm from '../components/addProduct';
import {useEffect,useState} from 'react';
export default function AddProductScreen(){
const[categories,setCategories]=useState([]);
useEffect(()=>{
fetch('https://ecommerce-myhashcode-server.herokuapp.com/getCategories',{
headers: {
 'Content-Type': 'application/json',
        'Accept': 'application/json'
}
}).then(res=>res.json()).then(result=>setCategories(result));
},[]);

return(
<div>
<ProductForm categories={categories}/>
</div>
)
}
