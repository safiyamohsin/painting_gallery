import { Card,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './Product.css';

const Product = ({ product }) => {
  return (
    <Col sm={12} md={6} lg={4}>
    {/* <Card className='my-3 p-3 rounded'> */}
    <Card className='my-3 p-3 my-card'>
      <Link to={`/product/${product._id}`}>
        {/* <Card.Img src={product.image} variant='top' /> */}
        <Card.Img
          className="image card-image mx-auto"
          src={product.image}
          variant="top"
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className='product-title'>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>Rs. {product.price}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default Product;
