import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from '../CardForm/CardForm';
const stripePromise = loadStripe('pk_test_51IeKdpCZdxoBsqSBauLtfzc8W0rkfvouq5ZQ5la7z7IzzMEuHpRWQgMUUHkXS6F7s4lMr6XcsQNU8efIOKC4vKwd00pSRMbQC2');
const PaymentSystem = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm handlePayment={handlePayment}></CardForm>
        </Elements>
    );
};

export default PaymentSystem;