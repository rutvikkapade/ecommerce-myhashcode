import {useState,useEffect} from 'react';

export default function ProductForm(props){

const[currCategory,setCurrCategory]=useState('');
const[productTypes,setProductTypes]=useState([]);
const[productName,setProductName]=useState('');
const[productPrice,setProductPrice]=useState('');
const[productBrand,setProductBrand]=useState('');
const[productType,setProductType]=useState('');
const[imageUrl,setImageUrl]=useState('');
return(
<div>
<form className="form-group" onSubmit={(event)=>{
event.preventDefault();
fetch('https://ecommerce-myhashcode-server.herokuapp.com/sendData',{
method : 'post',
 mode : 'cors',
 headers : {
    'content-type' : 'application/json',
   },
    body : JSON.stringify({
    "productName" : productName,
    "productPrice" : productPrice,
    "productBrand" : productBrand,
    "productCategory" : currCategory,
    "productType" : productType,
    "imageUrl" : imageUrl,
    })
})
}} >
<label>Product Name : <input name="productName" id="product-name" className="form-control" onChange={(event)=>{setProductName(event.target.value)} } type="text"/></label>
<br/>
<label>Product Price : <input name="productPrice" id="product-price" onChange={(event)=>{setProductPrice(event.target.value)} } type="text"/></label>
<br/>
<label>Brand : <input name="productBrand" id="product-brand" onChange={(event)=>{setProductBrand(event.target.value)} } type="text"/></label>
<br/>
<label>Image Url : <input name="imageUrl" id="image-url" onChange={(event)=>{setImageUrl(event.target.value)}} type="text"/></label>
<br/>
<label>Category :
<select id="product-category" name="categories" onChange={
async(event)=>{
setCurrCategory(event.target.value);
const result=await fetch('https://ecommerce-myhashcode-server.herokuapp.com/getProductType',{
         method : 'post',
         mode : 'cors',
         headers : {
            'content-type' : 'application/json',
             },
        body : JSON.stringify({"category" : event.target.value}) ,
});
const data=await result.json();
setProductTypes(data);
}
}>
<option value={null} key="999">Select Product Category</option>
{props.categories.map(key=>
<option key={key.category_id} value={key.category_name}>{key.category_name}</option>
)}
</select>
</label>
<br/>
<label>Product Type :
<select name="productType" id="product-type" onChange={(event)=>{
setProductType(event.target.value);
}}>
<option value={null}  key="899">Select Product Type</option>
{
productTypes.map(key=>
<option key={key.idproduct_type+100} value={key.product_type_name} >{key.product_type_name}</option>
)
}
</select>
</label>
<br/>
<input type="submit"/>
</form>
</div>
)
}

