type StoreItemProp = {
    id:number,
    name:string,
    price:number,
    imgUrl:string

}
import { Card, } from 'react-bootstrap'


const Storeitem = ({id,name,price,imgUrl}:StoreItemProp) => {
  return (
    <div>
        <Card>
            <Card.Img
            variant='top'
            src={imgUrl}
            height='200px'
           style={{ objectFit:'cover'}}/>

            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-space-between aligin-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{price}</span>
                </Card.Title>

            </Card.Body>

        </Card>
    </div>
  )
}

export default Storeitem