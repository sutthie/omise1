import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Message.css";

export default class MsgPage extends Component {
  render() {
    return (
      <section className='Msg-Body'>
        <div className='p-2'>
          <h3 className='text-center fontSans18Yellow '>{this.props.msg}</h3>
        </div>
      </section>
    );
  }
}
