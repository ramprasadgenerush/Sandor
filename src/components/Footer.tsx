import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (

    <>

      <footer className="footer2">
        <div className="footer2__main">
          <div className="footer2__main_top">
            <div className="container_m_30 container_l">
              <div className="row">
                <div className="col-xl-5 col-md-6 col_padding">
                  <div className="footer2__main_item">
                    <div className="footer2__main_item_imgBox">
                      <img src="/assets/img/png-icon/png-icon-27.png" alt="Image" />
                    </div>
                    <div className="footer2__main_item_content">
                      <h5>Locate Us</h5>
                      <p className="m-0"> 471, Road No. 87, Paramount Hills, Jubilee Hills, Hyderabad, Telangana 500096 </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col_padding d-lg-block d-none">
                  <div className="footer2__main_item">
                    <div className="footer2__main_item_imgBox">
                      <img src="/assets/img/png-icon/png-icon-28.png" alt="Image" />
                    </div>
                    <div className="footer2__main_item_content">
                      <h5>Call Us Today</h5>
                      <p className="m-0">  1800 425 9515 <br /> (TollFree) | 040-23357048 </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col_padding d-lg-block d-none">
                  <div className="footer2__main_item">
                    <div className="footer2__main_item_imgBox">
                      <img src="/assets/img/png-icon/png-icon-29.png" alt="Image" />
                    </div>
                    <div className="footer2__main_item_content">
                      <h5>Get In To Inbox</h5>
                      <p className="m-0">info@sandor.co.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-sm-6 col-lg-3 col_padding">
                <div className="footer2__widget">
                  <h4 className="footer2__widget_title">Sandor Services </h4>
                  <ul>
                    <li>
                      <Link href="/ultrasoundimaging-simulators">Ultrasound/Imaging</Link>
                    </li>
                    <li>
                      <Link href="/patient-simulators">Patient Simulators</Link>
                    </li>
                    <li>
                      <Link href="/surgical-simulators">Surgical Simulators</Link>
                    </li>
                    <li>
                      <Link href="/simulation-for-task-trainer">Task Trainer</Link>
                    </li>
                    <li>
                      <Link href="/virtual-education-simulators">Virtual Education Simulators</Link>
                    </li>
                    <li>
                      <Link href="/simulation-lab-services">Simulation Lab Services</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 col_padding align-content-center d-none d-lg-block">
                <div className="footer2__widget text-center">
                  <img className="mx-auto" src="/assets/img/logo/MicrosoftTeams-image-46-300x142.png" style={{ height: "142px" }} alt="nicas" />

                  <h5 className="text-white mt-3 lh-sm text-center text-opacity-75"> Sandor Mobile RTPCR (KERALA) </h5>
                  {/* <h6 className="text-white mt-3 text-center text-opacity-75">  Phone No: +91-8891266564 | +91-8891266565 </h6> */}
                </div>
              </div>

              <div className="col-lg-5 col_padding d-none d-lg-block">
                <div className="footer2__widget">
                  <img src="/assets/img/logo/logo-2.png" alt="Logo" />
                  <div className="footer2__widget_input">
                    <p className="pe-0 mb-2">
                      Sandor Medicaids Pvt. Ltd. is a nationwide distribution company specializing in supplies to hospitals and government institutions. It has developed efficient systems and capabilities to supply specialty drugs, device and equipment to hospitals. Since its inception in 1995 in Hyderabad, the company has focused on bringing high-tech biomedical... <Link href="/about"> Read More </Link>
                    </p>


                    <div className="w-100 d-flex gap-4 align-items-center mt-20">
                      <div className="w-auto">
                        <h4 className="text-white mb-0 text-opacity-75"> Follow Us : </h4>
                      </div>
                      <div className="footer-follow">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/sandorgroup/" target="_blank">
                              <i className="fa-brands fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a className="bg-success" href="https://in.pinterest.com/sandor_india/" target="_blank">
                              <i className="fa-brands fa-pinterest-p" />
                            </a>
                          </li>
                          <li>
                            <a className="bg-danger" href="https://www.youtube.com/@Sandor_india/" target="_blank">
                              <i className="fa-brands fa-square-youtube" />
                            </a>
                          </li>
                          <li>
                            <a className="bg-primary" href="https://www.linkedin.com/company/sandor-medicaids-pvt.-ltd./" target="_blank">
                              <i className="fa-brands fa-linkedin-in" />
                            </a>
                          </li>

                          <li>
                            <a className="bg-warning" href="https://www.instagram.com/sandor_india/" target="_blank">
                              <i className="fa-brands fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>

                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer2__copyright">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="footer2__copyright_text text-center">
                  <p className="m-0">Copyright 2026 Sandor.co.in | All Rights Reserved</p>
                </div>
              </div>
              {/* <div className="col-md-6">
          <div className="footer2__copyright_link text-end d-none d-md-block">
            <ul>
              <li>
                <Link href="/"> Teams &amp; Conditions </Link>
              </li>
              <li>
                <Link href="/"> Privacy Policy </Link>
              </li>
            </ul>
          </div>
        </div> */}
            </div>
          </div>
        </div>
      </footer>


      <a href="#" className="scrollToTop">
        <i className="fas fa-level-up-alt" />
      </a>

    </>

  );

};

export default Footer;
