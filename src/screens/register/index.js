import React from 'react';

import FieldLabel from '../../components/Label/index';
import Head from '../../components/header/index';
import Footer from '../../components/footer/index';


import CustomTextInput from '../../components/FormComponents/TextInput';

function Register() {
  return (
    <div>
      <Head />
      <div class="cotainer">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header" style={{backgroundColor:"green",textAlign:"center",fontSize:"30px"}}>Register</div>
              <div class="card-body" style={{background:"#b5e7a0"}}>
                <form action="" method="">

                {/* rendering the username field */}
                <div class="form-group row">
                  <FieldLabel
                    classStyle="col-md-4 col-form-label text-md-right"
                    textLabel={'Username'}
                  />
                  <div class="col-md-6">
                    <CustomTextInput
                      type="text"
                      name="username"
                    />
                  </div>
                </div>

                 {/* rendering the email field */}
                <div class="form-group row">
                  <FieldLabel
                    classStyle="col-md-4 col-form-label text-md-right"
                    textLabel={'E-Mail Address'}
                  />
                  <div class="col-md-6">
                    <CustomTextInput
                      type="email"
                      name="email-address"
                    />
                  </div>
                </div>

                

                {/* rendering the age field */}
                <div class="form-group row">
                  <FieldLabel
                    classStyle="col-md-4 col-form-label text-md-right"
                    textLabel={'Age'}
                  />
                  <div class="col-md-6">
                    <CustomTextInput
                      type="text"
                      name="age"
                    />
                  </div>
                </div>

                {/* rendering the education field */}
                {/* <div class="form-group row">
                  <FieldLabel
                    classStyle="col-md-4 col-form-label text-md-right"
                    textLabel={'Education'}
                  />
                  <div class="col-md-6">
                    <CustomTextInput
                      type="text"
                      name="education"
                    />
                  </div>
                </div> */}
                
                  {/* rendering the password input field */}
                <div class="form-group row">
                  <FieldLabel
                    classStyle="col-md-4 col-form-label text-md-right"
                    textLabel={'Password'}
                  />
                  <div class="col-md-6">
                    <CustomTextInput
                      type="password"
                      name="password"
                    />
                  </div>
                </div>

                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                      Register
                                </button>
                    
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  );
}
export default Register;

