"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const Contactus = () => {

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
                  <h3 className="breadcrumb1__title"> Contact Us </h3>
                  <div className="breadcrumb1__list">
                    <span>
<<<<<<< HEAD
                      <Link href="/">
=======
                      <Link href="/home">
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Contact Us </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="process2">
        <div className="content_box_120_90">
          <div className="container_m_30 container_l">
            <div className="row mb-55">
              <div className="col-xl-12 col_padding">
                <div className="heading1">
                  {/* <h4 className="heading1__subtitle mb-10">Contact Information</h4> */}
<<<<<<< HEAD
                  <h2 className="heading1__title mb-2">
                    Sandor Medicaids Pvt. Ltd.
                  </h2>
                  <h5> Please use the following information to contact us or simply complete the form </h5>
=======
                  <h2 className="heading1__title">
                    Sandor Medicaids Pvt. Ltd.,
                  </h2>
                  <h6> Please use the following information to contact us or simply complete the form </h6>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                </div>
              </div>
            </div>
            <div className="process2__wrapper">
              <div className="row">
                <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
                  <div className="process2__item">
                    <div className="process2__item_thumb">
<<<<<<< HEAD
                      <img src="/assets/img/png-icon/png-icon-70.png" alt="Image" />
=======
                      <Image src="/assets/img/png-icon/png-icon-70.png" alt="Image" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <span>01</span>
                    </div>
                    <div className="process2__item_content">
                      <h5>Phone</h5>
<<<<<<< HEAD
                      <p className="m-0"> 040-23357048  </p>
                      <p className="m-0"> Toll Free Number </p>
=======
                      <p className="m-0"> 040-2335 7048/49/50/51 040-2335 4824 </p>
                      <p className="m-0"> Toll Free Number:
                        1800 425 9515 </p>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
                  <div className="process2__item">
                    <div className="process2__item_thumb">
<<<<<<< HEAD
                      <img src="/assets/img/png-icon/png-icon-71.png" alt="Image" />
=======
                      <Image src="/assets/img/png-icon/png-icon-71.png" alt="Image" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <span>02</span>
                    </div>
                    <div className="process2__item_content">
                      <h5>Email</h5>
                      <p className="m-0"> Fax : 040-23357046 </p>
<<<<<<< HEAD
                      <p className="m-0"> Email :  <a href="mailto:info@sandor.co.in" className="acolor">info@sandor.co.in</a> </p>
=======
                      <p className="m-0"> Email : info@sandor.co.in </p>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
                  <div className="process2__item">
                    <div className="process2__item_thumb">
<<<<<<< HEAD
                      <img src="/assets/img/png-icon/png-icon-72.png" alt="Image" />
=======
                      <Image src="/assets/img/png-icon/png-icon-72.png" alt="Image" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <span>03</span>
                    </div>
                    <div className="process2__item_content">
                      <h5>Location</h5>
<<<<<<< HEAD
                      <p className="m-0"> 471, Road No. 87, Paramount Hills, Jubilee Hills, Hyderabad, Telangana 500096 </p>

=======
                      <p className="m-0">8-2-326/5, Road No. 3, Banjara Hills,</p>
                      <p className="m-0"> Hyderabad-500034  </p>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


<section className="contact1">
  <div className="content_box_120 pt-0">
    <div className="contact1__wrapper">
      <div className="contact1__thumb">
<<<<<<< HEAD
        <img src="/assets/img/contact/contact-02.png" alt="Image" />
=======
        <Image src="/assets/img/contact/contact-02.png" alt="Image" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
      </div>
      <div className="container_m_30 container_l">
        <div className="row">
          <div className="col-xl-6 col_padding">
            <div className="contact1__info">
              <div className="contact1__info_box">
                <div className="contact1__info_thumb">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="contact1__info_content">
                  <h4>Toll Free Number : </h4>
                  <p className="m-0"> 1800 425 9515 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col_padding d-flex align-items-center">
            <div className="contact1__form">
              <div className="heading1 mb-50">
                <h4 className="heading1__subtitle mb-10">
                  Let&apos;s work together
                </h4>
                <h2 className="heading1__title">
                  Get a free <span>quote</span>
                </h2>
              </div>
              <div className="contact1__form_wrapper">
<<<<<<< HEAD
                <form>
=======
                <form
                  id="contact1-form"
                  action="https://www.oilytheme.net/html/medidoc/assets/php/mail.php"
                  method="POST"
                >
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"

                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="text"
                        name="phone-number"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-sm-12">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                      {/* Site BTN */}
<<<<<<< HEAD
                      <a className="btn3 mt-15">
                        Send Message <i data-feather="arrow-right" />
                      </a>
=======
                      <button type="submit" className="btn3 mt-15">
                        Send Message <i data-feather="arrow-right" />
                      </button>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                    </div>
                  </div>
                </form>
                <p className="form-message" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<div className="mapouter">
  <div className="gmap_canvas1">
<<<<<<< HEAD

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.062210398921!2d78.4176411!3d17.408801900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96c4d0930ed5%3A0xe0d8430591014da6!2s471%2C%20Road%20No.%2087%2C%20Paramount%20Hills%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500096!5e0!3m2!1sen!2sin!4v1768814625603!5m2!1sen!2sin"
=======
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.794253181176!2d78.43468777591092!3d17.421658801815482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973290fb791d%3A0x8b7c101409978e06!2sSandor%20Medicaids%20Pvt.%20Ltd.%20(Head%20Office)!5e0!3m2!1sen!2sin!4v1767087682530!5m2!1sen!2sin"
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
  style={{ border: 0, width: "100%", height: 600 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
  </div>
</div>

    </>


  );

};

export default Contactus;
