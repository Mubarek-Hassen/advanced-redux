import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { Fragment,useEffect } from 'react'
import { uiActions } from './store/ui-slice'
import Notification from './components/UI/Notification';

let isInitial = true;


function App() {
  const showCart = useSelector(state=>state.ui.cartIsVisible);
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state=> state.ui.notification)

  useEffect(()=>{
    const sendCartData = async ()=>{
      
    };
    
    if(isInitial){
      isInitial = false
      return;
    }

    sendCartData().catch(error=>{

    })
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification 
      status={notification.status} 
      title={notification.title}
      message={notification.message}
      />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
