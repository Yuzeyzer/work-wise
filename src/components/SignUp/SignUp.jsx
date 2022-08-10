import React, { useState } from "react";
import { useSignup } from "hooks/useSignup";

export const SignUp = ({ children }) => {
  const { signup } = useSignup();
  const [form, setForm] = useState({
    username: "",
    category: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!confirmed) return;

    await signup(form);
  };

  return (
    <div className="login-sec">
      {children && children}
      <div className="sign_in_sec">
        <div className="signup-tab">
          <i className="fa fa-long-arrow-left"></i>
          <h2>johndoe@example.com</h2>
          <ul>
            <li className="current">
              <a href="#" title="">
                User
              </a>
            </li>
            <li>
              <a href="#" title="">
                Company
              </a>
            </li>
          </ul>
        </div>
        <div className="dff-tab current">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                  />
                  <i className="la la-user"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="country"
                    onChange={handleChange}
                    placeholder="Country"
                  />
                  <i className="la la-globe"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <select onChange={handleChange} name="category">
                    <option>Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                  </select>
                  <i className="la la-dropbox"></i>
                  <span>
                    <i className="fa fa-ellipsis-h"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Repeat Password"
                    onChange={handleChange}
                  />
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="checky-sec st2">
                  <div className="fgt-sec">
                    <input
                      type="checkbox"
                      name="cc"
                      id="c2"
                      onChange={(e) => setConfirmed(e.target.value)}
                      value={confirmed}
                    />
                    <label htmlFor="c2">
                      <span></span>
                    </label>
                    <small>
                      Yes, I understand and agree to the workwise Terms &
                      Conditions.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <button type="submit" value="submit">
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="dff-tab" id="tab-4">
          <form>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="text"
                    name="company-name"
                    placeholder="Company Name"
                  />
                  <i className="la la-building"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text" name="country" placeholder="Country" />
                  <i className="la la-globe"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input
                    type="password"
                    name="repeat-password"
                    placeholder="Repeat Password"
                  />
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="checky-sec st2">
                  <div className="fgt-sec">
                    <input type="checkbox" name="cc" id="c3" />
                    <label htmlFor="c3">
                      <span></span>
                    </label>
                    <small>
                      Yes, I understand and agree to the workwise Terms &
                      Conditions.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <button type="submit" value="submit">
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
