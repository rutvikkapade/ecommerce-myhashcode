import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Navbar(props){
const router=useRouter();
return(
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed", width:"100%"}}>


   <a className="navbar-brand" href="#">
      <img src="https://myhashcode.com/static/media/logo.5836bf52.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
      MyHashCode.shop
    </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link href="/">
        <a className="nav-link" >Home</a>
       </Link>
      </li>
      <li className="nav-item" >
      <Link href="/addProducts">
      <a className="nav-link">Add Product</a>
      </Link>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Products
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <button className="dropdown-item" onClick={(event)=>{
                props.setCategory(event.target.innerHTML);
                router.push('/products');
          } }>All</button>
          {
          props.categories.map(key=>

          <button key={key.category_id}  className="dropdown-item" onClick={(event)=>{
          props.setCategory(event.target.innerHTML);
          router.push('/products');
          } }>{key.category_name}</button>
          )

          }
        </div>
      </li>
      <li className="nav-item ms-auto">
      </li>
    </ul>

  </div>

</nav>
)


}