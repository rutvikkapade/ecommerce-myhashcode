import CartComponent from '../components/cartComponent'

export default function Cart(props){
        return(
        <div>
            <CartComponent cartProducts={props.cartProducts} cartTotal={props.cartTotal} updateCart={(id,price)=>{props.updateCart(id,price)}} setCart={(result,cartTotal)=>{props.setCartProducts(result,cartTotal)}}/>
        </div>
    )
}