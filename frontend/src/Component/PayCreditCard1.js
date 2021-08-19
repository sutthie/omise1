import React, { Component } from "react";
import Script from "react-load-script";
import "./PayCreditCard.css";

export default class PaybyCreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OmiseObj: null,
    };
  }

  handleLoad = () => {
    this.setState({
      OmiseObj: window.OmiseCard,
    });

    console.log(window.OmiseCard);
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
                <button type='button' className='btn btn-primary'>
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
