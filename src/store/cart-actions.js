import { uiActions } from "./ui-slice";

export const fetchCartData = () =>{
  return (dispatch)=>{
    const fetchData = async() =>{
      const response = await fetch('https://react-redux-27cdb-default-rtdb.firebaseio.com/cart.json')
      const data = await response.json()
      if(!response.ok){
        throw new Error
      }
    }
  }
}

export const sendCartData =(cart)=>{
  return async (dispatch)=>{
    dispatch(
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))
    );
    const sendRequest = async ()=>{
      const response = await fetch('https://react-redux-27cdb-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart)
      })
      if(!response.ok){
        throw new Error('Sending cart data failed!')
      }
    }
    
    try {
      await sendRequest()
        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sent cart data successfully!'
        }))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    }
  }
};