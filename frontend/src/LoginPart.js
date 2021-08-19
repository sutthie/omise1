import React, { useState } from "react";
import "./Login.css";
import logo from "./logo.svg";

const LoginPart = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const onChangeText = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("UserName :" + state.username);
  };

  const handleReset = (e) => {
    e.preventDefault();
    alert("Click Reset Button");
  };

  return (
    <div className='Login-Body'>
      <div className='container register'>
        <div className='row'>
          <div className='col-md-3 register-left'>
            <img src={logo} alt='logo' />
            <h3>ขอต้อนรับ เว็บ กคง.สส.ทหาร</h3>
            <p>สมาชิกมีสิทธิดังนี้</p>
          </div>
          <div className='col-md-6 register-right'>
            <div className='tab-content' id='myTabContent'>
              <div
                className='tab-pane fade show active'
                id='home'
                role='tabpanel'
                aria-labelledby='home-tab'
              >
                <h3 className='register-heading'>พิสูจน์สิทธิ์การใช้งาน</h3>
                <div className='row register-form'>
                  <div className='col-md-6'>
                    <div className='form-group w-60'>
                      <input
                        id='username'
                        type='text'
                        className='form-control'
                        placeholder='UserName'
                        value={state.username}
                        onChange={onChangeText}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group w-60'>
                      <input
                        id='password'
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        value={state.password}
                        onChange={onChangeText}
                      />
                    </div>
                    {/* <button onClick={props.handleReset}>Reset</button> */}
                    {/* <br /><button onClick={props.handleSubmit} className='btn btn-primary'>เข้าระบบ</button> */}
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <input
                        type='submit'
                        className='btnRegister'
                        value='เข้าระบบ'
                        onClick={handleSubmit}
                      />
                      <input
                        type='reset'
                        className='btnReset'
                        value='Reset'
                        onClick={handleReset}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LoginPart;
