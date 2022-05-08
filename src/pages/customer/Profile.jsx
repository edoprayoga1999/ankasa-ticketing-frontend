import React from 'react';

import Navbar from '../../components/customer/Navbar';
import Footer from '../../components/customer/Footer';
import style from '../../assets/styles/input.module.css';
const Profile = () => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{ width: '100%', height: '85vh', backgroundColor: '#F5F6FA', display: 'flex' }}>
        <div className="leftArea" style={{ width: '30%', height: '100%', display: 'flex' }}>
          <div
            style={{
              height: '80%',
              width: '85%',
              border: 'none',
              borderRadius: '15px',
              backgroundColor: '#FFFFFF',
              marginTop: '35px',
              marginLeft: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <div
              style={{
                height: '125px',
                width: '125px',
                backgroundColor: '#FFF',
                border: '3px solid #2395FF',
                borderRadius: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
              <div
                style={{
                  height: '105px',
                  width: '105px',
                  backgroundColor: '#FFF',
                  border: 'none',
                  borderRadius: '100px',
                  backgroundImage:
                    'url("https://s3-alpha-sig.figma.com/img/877c/276f/911c515dd21c49df1ca8a64e06d35f54?Expires=1652054400&Signature=AID3ccOOFb1x22-0KA4Gnir60QdfFsFY7TJhcd3iFWvh2dI1yhzdocXZfRwzbtzfMZo-luUc1Ge3fkxBskwZrRUwwtJWyZjKthp-npdd48i-v4j0cWfppmLiQsGs5P3sj1V9T7r9RGR6gwRy~6Pr88vZomOWgiN1QFTwerUFfYE7zFg92vYB9qSrK95E9EFyf7tUGBevKL2z9P4p3ORxTd-QEvYKw9KWnrE~GTn2xFY~gG097Ye4jawTjihKSmiT8hCscE4S3otAhgsEmxfIZp3WA5i4IQSlvJ6qivbPGWxmI68poInDUtakdznCDkpICSYOuzaro5D87q-nTyXajw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}></div>
            </div>
            <button
              type="button"
              style={{
                width: '135px',
                height: '40px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #2395FF',
                color: '#2395FF',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '15px',
                marginBottom: '20px'
              }}>
              Select Photo
            </button>
            <h5 style={{ fontWeight: 'bold' }}>Mike Kowalski</h5>
            <small style={{ color: '#6B6B6B', marginBottom: '20px' }}>Medan, Indonesia</small>
            <div style={{ display: 'flex', width: '80%' }}>
              <h6
                style={{
                  marginLeft: '0px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Cards
              </h6>
              <h6
                style={{
                  marginLeft: 'auto',
                  marginRight: '0px',
                  color: '#2395FF',
                  fontSize: '14px'
                }}>
                + Add
              </h6>
            </div>
            <div
              style={{
                width: '80%',
                height: '60px',
                backgroundColor: '#2395FF',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px 25px 10px 25px',
                marginBottom: '25px'
              }}>
              <h6 style={{ letterSpacing: '1.5px', fontSize: '14px', marginBottom: '0px' }}>
                4441 1235 5512 5551
              </h6>
              <div style={{ display: 'flex', width: '100%', marginTop: 'auto' }}>
                <small
                  style={{
                    marginLeft: '0px',
                    marginRight: 'auto',
                    color: '#AEFAFF',
                    fontSize: '12px'
                  }}>
                  X Card
                </small>
                <small
                  style={{
                    marginLeft: 'auto',
                    marginRight: '0px',
                    color: '#AEFAFF',
                    fontSize: '12px'
                  }}>
                  $ 1,440.2
                </small>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '70%',
                alignItems: 'center',
                marginBottom: '30px',
                color: '#2395FF'
              }}>
              <i className="fa-solid fa-circle-user" style={{ marginLeft: '0px' }}></i>
              <small
                style={{
                  marginLeft: '30px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Profile
              </small>
              <i
                className="fa-solid fa-angle-right"
                style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
            </div>
            <div
              style={{
                display: 'flex',
                width: '70%',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
              <i className="fa-solid fa-star" style={{ marginLeft: '0px' }}></i>
              <small
                style={{
                  marginLeft: '30px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                My Review
              </small>
              <i
                className="fa-solid fa-angle-right"
                style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
            </div>
            <div
              style={{
                display: 'flex',
                width: '70%',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
              <i className="fa-solid fa-gear" style={{ marginLeft: '0px' }}></i>
              <small
                style={{
                  marginLeft: '30px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Settings
              </small>
              <i
                className="fa-solid fa-angle-right"
                style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
            </div>
            <div
              style={{
                display: 'flex',
                width: '70%',
                alignItems: 'center',
                color: '#F24545'
              }}>
              <i className="fa-solid fa-right-from-bracket" style={{ marginLeft: '0px' }}></i>
              <small
                style={{
                  marginLeft: '30px',
                  marginRight: 'auto',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                Logout
              </small>
              <i
                className="fa-solid fa-angle-right"
                style={{ marginLeft: 'auto', marginRight: '0px' }}></i>
            </div>
          </div>
        </div>
        <div
          className="rightArea"
          style={{
            width: '70%',
            height: '100%',
            display: 'flex'
          }}>
          <div
            style={{
              height: '75%',
              width: '95%',
              border: 'none',
              borderRadius: '15px',
              backgroundColor: '#FFFFFF',
              marginTop: '35px',
              display: 'flex',
              flexDirection: 'column',
              padding: '30px 25px'
            }}>
            <small
              style={{
                color: '#2395FF',
                letterSpacing: '0.3em',
                fontWeight: '500',
                marginBottom: '7px'
              }}>
              PROFILE
            </small>
            <h4 style={{ fontWeight: '600', marginBottom: '30px' }}>Profile</h4>
            <div style={{ width: '100%', display: 'flex', height: '100px' }}>
              <div
                style={{
                  width: '50%',
                  paddingRight: '25px'
                }}>
                <h6 style={{ fontWeight: '600' }}>Contact</h6>
                <small style={{ color: '#9B96AB' }}>Email</small>
                <input
                  type="text"
                  className={style.inputForm}
                  name="email"
                  placeholder="Email"
                  style={{
                    width: '100%',
                    height: '40px',
                    border: 'none',
                    borderBottom: '2px solid #D2C2FF',
                    marginBottom: '30px'
                  }}
                />
                <small style={{ color: '#9B96AB' }}>Phone Number</small>
                <input
                  type="text"
                  className={style.inputForm}
                  name="phone"
                  placeholder="Phone Number"
                  style={{
                    width: '100%',
                    height: '40px',
                    border: 'none',
                    borderBottom: '2px solid #D2C2FF',
                    marginBottom: '30px'
                  }}
                />
                <div
                  style={{
                    color: '#2395FF',
                    width: '100%',
                    display: 'flex'
                  }}>
                  <h6
                    style={{
                      fontWeight: '600',
                      marginRight: '25px',
                      marginLeft: 'auto'
                    }}>
                    Account Settings
                  </h6>
                  <i
                    className="fa-solid fa-angle-right"
                    style={{ marginLeft: '0px', marginRight: '0px', paddingTop: '2px' }}></i>
                </div>
              </div>
              <div
                style={{
                  width: '50%',
                  paddingLeft: '0px'
                }}>
                <h6 style={{ fontWeight: '600' }}>Biodata</h6>
                <small style={{ color: '#9B96AB' }}>Username</small>
                <input
                  type="text"
                  className={style.inputForm}
                  name="username"
                  placeholder="Username"
                  style={{
                    width: '100%',
                    height: '40px',
                    border: 'none',
                    borderBottom: '2px solid #D2C2FF',
                    marginBottom: '30px'
                  }}
                />
                <small style={{ color: '#9B96AB' }}>City</small>
                <input
                  type="text"
                  className={style.inputForm}
                  name="city"
                  placeholder="City"
                  style={{
                    width: '100%',
                    height: '40px',
                    border: 'none',
                    borderBottom: '2px solid #D2C2FF',
                    marginBottom: '30px'
                  }}
                />
                <small style={{ color: '#9B96AB' }}>Address</small>
                <input
                  type="text"
                  className={style.inputForm}
                  name="address"
                  placeholder="Address"
                  style={{
                    width: '100%',
                    height: '40px',
                    border: 'none',
                    borderBottom: '2px solid #D2C2FF',
                    marginBottom: '30px'
                  }}
                />
                <small style={{ color: '#9B96AB' }}>Post Code</small>
                <input
                  type="number"
                  className={style.inputForm}
                  name="postalcode"
                  placeholder="Post Code"
                  style={{
                    width: '100%',
                    height: '40px',
                    border: 'none',
                    borderBottom: '2px solid #D2C2FF',
                    marginBottom: '30px'
                  }}
                />
                <div style={{ width: '100%', display: 'flex' }}>
                  <input
                    type="button"
                    value="Save"
                    style={{
                      width: '150px',
                      height: '50px',
                      marginLeft: 'auto',
                      marginRight: '0px',
                      backgroundColor: '#2395FF',
                      color: 'white',
                      borderRadius: '10px',
                      border: 'none',
                      fontWeight: 'bold'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;