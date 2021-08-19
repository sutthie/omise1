import React, { Component } from "react";
import Script from "react-load-script";
import axios from "axios";
// import history from "../history";
import "./PayCreditCard.css";

let OmiseCard;
const amount = 80000;

export default class PaybyCreditCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // OmiseObj: null,
  //   };
  // }
  state = {
    charge: undefined,
  };

  createCreditCharge = async (email, name, amount, token) => {
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:8080/checkout-credit-card",
        data: {
          email: email,
          name: name,
          amount: amount,
          token: token,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }); //console.log("res : ", res);
      const resData = res.data;

      this.setState({ charge: resData });
      console.log("Data Return : ", resData);

      // history.push("/message");

      // history.push("/message", {
      //   msg: "Pay by Credit Card Complete",
      // });

      // history.push({
      //   pathname: "/message",
      //   state: { msg: "Pay by Credit Card Complete" },
      // });
    } catch (err) {
      console.log(err);
    }

    //console.log("Data Return async : " + this.state.charge);
  };

  OmiseRxToken = () => {
    OmiseCard.open({
      amount: amount, // unit satang
      // submitFormTarget: "#checkout-form",
      onCreateTokenSuccess: (token) => {
        //console.log(token);
        //alert(token);
        var email = "sutthie@hotmail.com";
        var name = "Sutthie Jullakatuppa";
        //amount
        //token
        this.createCreditCharge(email, name, amount, token);
        //console.log("Data Return : " + this.state.charge);
        //redirect page
      },
      onFormClosed: () => {
        /* Handler on form closure. */
      },
    });
  };

  // creditCardConfig = () => {
  //   // OmiseCard.attach();
  //   this.OmiseRxToken();
  // };

  handleLoad = () => {
    // this.setState({
    //   OmiseObj: window.OmiseCard,
    // });
    OmiseCard = window.OmiseCard;
    console.log(OmiseCard);

    OmiseCard.configure({
      publicKey: "pkey_test_5o400kb465azjwb5b5a",
      currency: "thb",
      frameLabel: "SJ Bike",
      buttonLabel: "จ่ายออนไลน์",
      submitLabel: "จ่ายเลยตอนนี้",

      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });

    OmiseCard.configureButton("#button-pay-credit");
    OmiseCard.attach();
  };

  handlePay = (e) => {
    e.preventDefault();
    // this.creditCardConfig();
    this.OmiseRxToken();
  };

  render() {
    const { charge } = this.state;
    //console.log("this.state :", this.state);
    //console.log("this.state.charge : ", this.state.charge);
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
          {charge && (
            <div className='row'>
              <div className='col-md-6'>
                <div className='h5'>
                  ขอบคุณสำหรับการสั่งซื้อสินค้า จำนวน {charge.amount} บาท
                </div>
                <div className='h4'>สถานะการจ่าย {charge.status}</div>
              </div>
            </div>
          )}
        </form>
        {/* <div>Return {this.state.charge} </div> */}
      </div>
    );
  }
}
