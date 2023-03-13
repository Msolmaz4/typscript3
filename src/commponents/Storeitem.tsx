type StoreItemProp = {
    id:number,
    name:string,
    price:number,
    imgUrl:string

}
import { Card} from 'react-bootstrap'


const Storeitem = ({id,name,price,imgUrl}:StoreItemProp) => {
  return (
    <div>
        <Card>
            <Card.Img
            variant='top'
            src={imgUrl}
            height='200px'
           style={{ objectFit:'cover'}}

            >

            </Card.Img>

        </Card>
    </div>
  )
}

export default Storeitem