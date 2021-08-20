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
<center><div className="formHolder" style={{width:"90%",padding:"10px"}}>

<form style={{textAlign:"left"}} onSubmit={async(event)=>{
event.preventDefault();
const resp=await fetch('https://ecommerce-myhashcode-server.herokuapp.com/sendData',{
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
<div className="form-group">
    <label for="product-name">Product Name : </label>
    <input type="text" className="form-control" id="product-name" onChange={(event)=>{setProductName(event.target.value)} } aria-describedby="productHelp" placeholder="Enter Product Name"/>
    <small id="productHelp" class="form-text text-muted">Remember You can add same products multiple time as a seller,no primary key on product name.</small>
  </div>
<div className="form-group">
<label for="product-price">Product Price :</label>
<input name="productPrice" className="form-control" id="product-price" placeholder="Enter Product Price" onChange={(event)=>{setProductPrice(event.target.value)} } type="text"/>
</div>
<div className="form-group">
<label for="product-brand">Brand :</label>
<input placeholder="Enter Brand Name"  className="form-control" name="productBrand" id="product-brand" onChange={(event)=>{setProductBrand(event.target.value)} } type="text"/>
</div>
<div className="form-group">
<label for="image-url">Image Url : </label>
<input placeholder="Enter Image URL" className="form-control" name="imageUrl" id="image-url" onChange={(event)=>{setImageUrl(event.target.value)}} type="text"/>
</div>
<div className="form-group">
<label for="product-category">Category :</label>
<select className="form-control" id="product-category" name="categories" onChange={
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
</div>
<div className="form-group">
<label for="product-type">Product Type :</label>
<select name="productType" className="form-control" id="product-type" onChange={(event)=>{
setProductType(event.target.value);
}}>
<option value={null}  key="899">Select Product Type</option>
{
productTypes.map(key=>
<option key={key.idproduct_type+100} value={key.product_type_name} >{key.product_type_name}</option>
)
}
</select>
</div>
<br/>
<input  className="btn btn-primary" value="Add Product" type="submit"/>
</form>

</div></center>
)
}

