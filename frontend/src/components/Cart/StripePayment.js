import React, { Fragment, useEffect, useState } from 'react'

import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment';
 

const StripePayment = () => {

    const [stripeApiKey, setStripeApiKey] = useState("");

    async function getStripeApiKey() {

        let { data } = await axios.get("/api/v1/stripeapikey");

        setStripeApiKey(data.stripeApiKey);

    };


    useEffect(() => {


        getStripeApiKey()
    }, [])


    return (
        <Fragment>


            {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                </Elements>
            )}


        </Fragment>
    )
}

export default StripePayment