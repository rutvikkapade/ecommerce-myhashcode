
import Carousel from '../components/carousel'
import Instructions  from '../components/instructions'
export default function Home(props) {

  return (
    <div>
      <Carousel/>
      <br/>
      <Instructions setCategory={(result)=>{props.setCategory(result)}}></Instructions>
      
    </div>
  )
}
