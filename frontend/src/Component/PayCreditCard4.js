import React, { useState, useEffect } from "react";
import Script from "react-load-script";
import "./PayCreditCard.css";

const PaybyCreditCard = () => {
  const [OmiseObj, GetOmiseCard] = useState(null);

  useEffect(() => {
    console.log({ OmiseObj });
    // console.log(window.OmiseCard);
  });

  return (
    <div className='PayCreditCard-Body p-2'>
      <Script
        url='https://cdn.omise.co/omise.js'
        onLoad={() => GetOmiseCard(window.OmiseCard)}
      />
      <form>
        <div className='row'>
          <div className='col-md-6'>
            <div className='h5'>Test Pay By Credit Card </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <button type='button' className='btn btn-primary'>
                Pay by Credit Card
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaybyCreditCard;
