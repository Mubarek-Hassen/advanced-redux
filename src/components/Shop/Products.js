import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [{
  id: 'p1', 
  price: 6, 
  title: 'My first book', 
  description: 'The first book i wrote.'
},
{
  id: 'p2', 
  price: 5, 
  title: 'My second book', 
  description: 'The second book i ever wrote.'
},];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(product =><ProductItem
          id= {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          key= {product.id}
        /> )}
        
      </ul>
    </section>
  );
};

export default Products;
