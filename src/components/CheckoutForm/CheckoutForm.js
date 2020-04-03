import React from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = (props) => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentFinished, setPaymentFinished] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error){
        setPaymentError(error.message);
        setPaymentFinished(null);
    }
    else{
        setPaymentFinished(paymentMethod);
        const payment = {id: paymentMethod.id, last4: paymentMethod.card.last4}
        props.handlePlaceOrder(payment);
        setPaymentError(null);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {
          paymentError && <p style={{color:'red'}}>{paymentError}</p>
      }
      {
          paymentFinished && <p style={{color:'green'}}>Payment Successfull</p>
      }
    </form>
  );
};

export default CheckoutForm;