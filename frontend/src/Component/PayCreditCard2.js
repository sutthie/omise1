import React, { Component } from "react";
import Script from "react-load-script";
import "./PayCreditCard.css";

let OmiseCard;

export default class PaybyCreditCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // OmiseObj: null,
  //   };
  // }

  creditCardConfig = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });

    OmiseCard.configureButton("#button-pay-credit");
    OmiseCard.attach();
  };

  handleLoad = () => {
    // this.setState({
    //   OmiseObj: window.OmiseCard,
    // });
    OmiseCard = window.OmiseCard;
    console.log(OmiseCard);

    OmiseCard.configure({
      publicKey: "YOUR_PUBLIC_KEY",
      currency: "thb",
      frameLabel: "SJ Bike",
      buttonLabel: "จ่ายออนไลน์",
      submitLabel: "จ่ายเลยตอนนี้",
    });
  };

  handlePay = (e) => {
    e.preventDefault();
    this.creditCardConfig();
  };

  render() {
    return (
      <div className='PayCreditCard-Body p-2'>
        <Script url='https://cdn.omise.co/omise.js' onLoad={this.handleLoad} />
        <form>
          <div className='row'>
            <div className='col-md-6'>
              <div className='h5'>Test Pay By Credit Card</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <button
                  id='button-pay-credit'
                  type='button'
                  className='btn btn-primary'
                  onClick={this.handlePay}
                >
                  Pay by Credit Card
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
