import React from 'react'
import {Col ,Row} from 'react-bootstrap'
import Storeitem from '../commponents/Storeitem'
import storeItems from '../data/items.json'

const Store = () => {
  return (
    <div>
  <h1>store</h1>
  
   <Row md={2} xs={1} lg={3} className='g-3'>
    {storeItems.map(items=>(
      <Col key={items.id}>
      <Storeitem {...items} />
      </Col>
    ))}
   </Row>
  

    </div>
  )
}

export default Store