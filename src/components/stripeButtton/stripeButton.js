import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I2rqyDBxjURfzfb7wTEUlwFIcWvcGxe7BtPi3bgmGbThXGxyPzbngxmOZkAfVgx9xHsCVUwEfaVOokd2Xsd1lTW00klfIkAUv'

    const onToken = () => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="On Door Clothing Ltd."
            billingAddress
            shippingAddress
            discription={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton