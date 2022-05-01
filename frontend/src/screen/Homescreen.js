import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import { listproducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productlist = useSelector((state) => state.productlist)
  const {loading, error, products} = productlist
  useEffect(() => {
 dispatch(listproducts())  
 }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading?(
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) :<Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row> }
      
    </>
  )
}
export default HomeScreen
