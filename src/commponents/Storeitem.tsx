type StoreItemProp = {
    id:number,
    name:string,
    price:number,
    imgUrl:string

}
import { Card, } from 'react-bootstrap'
import {formatCurrency} from '../ulties/formatCurrey'

const Storeitem = ({id,name,price,imgUrl}:StoreItemProp) => {
  return (
    <div>
        <Card className='h-100'>
            <Card.Img
            variant='top'
            src={imgUrl}
            height='200px'
           style={{ objectFit:'cover'}}/>

            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-space-between aligin-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>

                </div>

            </Card.Body>

        </Card>
    </div>
  )
}

export default Storeitem