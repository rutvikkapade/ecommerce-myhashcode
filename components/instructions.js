import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Instructions(props){
const router=useRouter();
    return(
    <div className="instructionsHolder">
        <Link href="/addProducts">
        <button  type="button" className="btn btn-outline-primary">Populate The Store with Products</button>
        </Link>
        <br/>
        <br/>
        <div>
        <Link href='/products'>
        <button type="button" className="btn btn-outline-dark" onClick={(event)=>{
                props.setCategory('All');
                router.push('/products');
          } }>View All Products Listed on App</button>
        </Link>
        <span className="infoSmall">*use the products dropdown to list products Category Wise</span>
        </div>
        
    </div>
    )

}