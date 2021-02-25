import React from 'react';
import FieldLabel from '../../components/Label/index';

import Head from '../../components/header/index';
import Footer from '../../components/footer/index';


import CustomTextInput from '../../components/FormComponents/TextInput';



function Resetpassword() {
  return (
    <div>

    <Head />

      <div class="cotainer">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">SET_PASSWORD</div>
              <div class="card-body">
                <form action="" method="">

                

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

                {/* rendering the newpassword field */}
                <div class="form-group row">
                  <FieldLabel
                    classStyle="col-md-4 col-form-label text-md-right"
                    textLabel={'Newpassword'}
                  />
                  <div class="col-md-6">
                    <CustomTextInput
                      type="password"
                      name="newpassword"
                    />
                  </div>
                </div>

                {/* rendering the confirmpassword field */}
                <div class="form-group row">
                  <FieldLabel
                    classStyle="col-md-4 col-form-label text-md-right"
                    textLabel={'Confirmpassword'}
                  />
                  <div class="col-md-6">
                    <CustomTextInput
                      type="password"
                      name="confirmpassword"
                    />
                  </div>
                </div>

                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                      RESET
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

export default Resetpassword;
