"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const GetaCallBack = () => {

  useEffect(() => {
    // Re-load the main script to initialize animations and plugins on route change
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);


  return (

    <>


      <section
        className="breadcrumb1"
        style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-01.png)" }}
      >
        <div className="breadcrumb1__padding">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="breadcrumb1__content text-center">
                  <h3 className="breadcrumb1__title">  Get a Call Back  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Get a Call Back </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="contact1 mt-100">
        <div className="content_box_120 pt-0">
          <div className="contact1__wrapper">
            <div className="container_m_30 container_l">
              <div className="row">
                <div className="col-xl-6 col_padding">
                  <img className="rounded-4" src="/assets/img/contact/Get-a-Call-Back.jpg" alt="Image" />
                </div>
                <div className="col-xl-6 col_padding d-flex align-items-center">
                  <div className="contact1__form1 bg-body-secondary p-50 rounded-4">
                    <div className="heading1 mb-30">

                      <h2 className="fw-bold mb-2">
                        Expert support, when you need it
                      </h2>
                      <p className="fs-6 lh-base"> Fill in your details and one of our experts will reach out to you with the right solutions. </p>
                    </div>
                    <div className="contact1__form_wrapper">
                      <form>
                        <div className="row">
                          <div className="col-sm-12">
                            <input className="form-control rounded-2" type="text" name="name" placeholder="Your Name"
                            />
                          </div>
                          <div className="col-sm-12">
                            <input className="form-control rounded-2" type="email"
                              name="email" placeholder="Your Email" />
                          </div>
                          <div className="col-sm-12">
                            <input className="form-control rounded-2" type="text"
                              name="phone-number" placeholder="Your Phone No" />
                          </div>
                          <div className="col-sm-12">
                            <input className="form-control rounded-2" type="text"
                              name="subject" placeholder="Product"
                            />
                          </div>

                          <div className="col-sm-12">
                            <input className="form-control rounded-2" type="text"
                              name="subject" placeholder="Organisation" />
                          </div>

                          <div className="col-sm-12">
                            <div className="fs-7 mb-2"> How did you come to know about Sandor ? </div>
                            <select className="form-control rounded-2 h56" name="source" defaultValue="Select Options">
                              <option value="Select Options" disabled>Select Options</option>
                              <option value="Facebook">Facebook</option>
                              <option value="Linkedin">Linkedin</option>
                              <option value="Quora">Quora</option>
                              <option value="Others-Please specify">Others-Please specify</option>
                            </select>
                          </div>
                          <div className="col-sm-12">
                            <a className="btn3 mt-15">
                              Submit <i data-feather="arrow-right" />
                            </a>
                          </div>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>


  );

};

export default GetaCallBack;
