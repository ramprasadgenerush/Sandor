

import React from "react";
import Link from "next/link";
import Image from "next/image";


const Header = () => {

  return (

    <header className="header home1">
      {/* Header Top Start */}
      <div className="header__top1">
        <div className="container_xl_fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="header__top1__left">
                <ul>
                  {/* <li>
                    <i className="fa-solid fa-location-dot" />
                    <span> 8-2, 326/5, Rd Number 3, Green Valley, Banjara Hills, Hyderabad, Telangana 500034 </span>
                  </li> */}
                  <li>
                    <i className="fa-solid fa-envelope-open" />
                    <span>info@sandor.co.in</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" />
                    <span> Call us: 1800 425 9515 </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header__top1__right">
                <div className="header__top1__right--links f_right">
                  <ul>
                    <li>
                      <a href="appointment.html">Get a Call Back</a>
                    </li>
                    <li>
                      <Link href="/contactus">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/home">Careers</Link>
                    </li>
                    <li>
                      <Link href="/home"> Blog </Link>
                    </li>
                  </ul>
                </div>
                <div className="header__top1__right--soc f_right">
                  <ul>
                    <li>
                      <a href="https://web.archive.org/web/20250812210120/https://www.facebook.com/sandorgroup/" target="_blank">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                      <li>
                      <a href="https://web.archive.org/web/20250812210120/https://in.pinterest.com/sandor_india/" target="_blank">
                        <i className="fa-brands fa-pinterest-p" />
                      </a>
                    </li>
                      <li>
                     <a href="https://web.archive.org/web/20250812210120/https://www.youtube.com/@Sandor_india/" target="_blank">
                        <i className="fa-brands fa-square-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="https://web.archive.org/web/20250812210120/https://www.linkedin.com/company/sandor-medicaids-pvt.-ltd./" target="_blank">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    
                    <li>
                     <a href="https://web.archive.org/web/20250812210120/https://www.instagram.com/sandor_india/" target="_blank">
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
      {/* Header Top End */}
      {/* Header Menu Start */}
      <div className="header__menu position-relative">
        <div className="header__menu-wrapper">
          <div className="container_xl_fluid">
            <div className="header__menu-outer">
              <div className="row">
                <div className="col-xl-12 col-lg-12 align-items-center">
                  <div className="header__logo">
                    <Link href="/home">
                      <Image src="/assets/img/logo/logo-1.png" alt="Logo" className="ms-3" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <nav id="mobile-menu">

                      <ul>
                        <li>
                          <Link href="/home">Home</Link>
                        </li>

                        <li>
                          <Link href="/about">About Us <i className="fa fa-angle-down d-none d-lg-block float-end ms-1 mt-1"></i> </Link>
                          <ul className="sub_menu">
                            <li><Link href="/vision">Vision</Link></li>
                            <li><Link href="/mission">Mission</Link></li>
                            <li><Link href="/core-values">Core Values</Link></li>
                            <li><Link href="/message-from-director">Message from Director</Link></li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/services">Services <i className="fa fa-angle-down d-none d-lg-block float-end ms-1 mt-1"></i> </Link>
                          <ul className="sub_menu">
                            <li className="dropdown_menu_parent">
                              <Link href="/home"> Distribution & Logistics </Link>
                              <ul>
                                <li><Link href="/home">Network</Link></li>
                              </ul>
                            </li>
                            <li><Link href="/home">Sales & Marketing</Link></li>
                            <li><Link href="/home">Regulatory & Custom House Functions</Link></li>
                            <li><Link href="/home">Dialysis Services</Link></li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/home">Therapeutic Areas <i className="fa fa-angle-down d-none d-lg-block float-end ms-1 mt-1"></i> </Link>
                          <ul className="sub_menu">
                            <li><Link href="/home">Critical Care</Link></li>
                            <li><Link href="/home">Transplantation</Link></li>
                            <li><Link href="/home">Pain Management</Link></li>
                            <li><Link href="/home">Cardiovascular</Link></li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/home">Products <i className="fa fa-angle-down d-none d-lg-block float-end ms-1 mt-1"></i> </Link>
                          <ul className="sub_menu">
                            <li className="dropdown_menu_parent">
                              <Link href="/home">Point Of Care Technology</Link>
                              <ul>
                                <li><Link href="/home">i-STAT</Link></li>
                                <li><Link href="/home">NiCaS Hemodynamic NAVIGATOR</Link></li>
                                <li><Link href="/home">San Hgb</Link></li>
                                <li><Link href="/home">CoaguSense PT/INR</Link></li>
                                <li><Link href="/home">Veinus</Link></li>
                              </ul>
                            </li>

                            <li className="dropdown_menu_parent">
                              <Link href="/home">Renal Portfolio</Link>
                              <ul>
                                <li><Link href="/home">San Clean Hot Sterilant</Link></li>
                                <li><Link href="/home">Sansteril</Link></li>
                                <li><Link href="/home">San Cath Hemodialysis Kit</Link></li>
                              </ul>
                            </li>

                            <li><Link href="/home">Blood Products</Link></li>

                            <li className="dropdown_menu_parent">
                              <Link href="/home">Perfusion Fluids</Link>
                              <ul>
                                <li><Link href="/home">Custodiol® – Cardioplegia</Link></li>
                                <li><Link href="/home">Custodiol® – Multi Organ</Link></li>
                              </ul>
                            </li>

                            <li><Link href="/home">Reverse Osmosis System</Link></li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/home">Simulation Portfolio <i className="fa fa-angle-down d-none d-lg-block float-end ms-1 mt-1"></i></Link>
                          <ul className="sub_menu">
                            <li className="dropdown_menu_parent">
                              <Link href="/home">Ultrasound / Imaging</Link>
                              <ul>
                                <li className="dropdown_menu_parent">
                                  <Link href="/home">Intelligent Ultrasound</Link>
                                  {/* <ul>
                                    <li><a href="https://sandor.co.in/bodyworks-eve-heartworks-tee-tte-simulator/">Heartworks TEE / TTE</a></li>
                                    <li><a href="https://sandor.co.in/bodyworks-eve-point-of-care/">Bodywork’s Eve</a></li>
                                    <li><a href="https://sandor.co.in/scan-trainer-transvaginal-simulator/">ScanTrainer Transvaginal</a></li>
                                    <li><a href="https://sandor.co.in/scan-trainer-transabdominal-simulator/">ScanTrainer TransAbdominal</a></li>
                                  </ul> */}
                                </li>

                                <li className="dropdown_menu_parent">
                                  <Link href="/home">Simulab</Link>
                                  {/* <ul>
                                    <li><a href="https://sandor.co.in/picclineman/">PICCLineMan</a></li>
                                    <li><a href="https://sandor.co.in/central-lineman/">Central LineMan</a></li>
                                    <li><a href="https://sandor.co.in/femoral-lineman/">Femoral LineMan</a></li>
                                    <li><a href="https://sandor.co.in/arterial-line-man/">Arterial Line Man</a></li>
                                    <li><a href="https://sandor.co.in/lumbar-puncture-epidural/">Lumbar Puncture – Epidural</a></li>
                                    <li><a href="https://sandor.co.in/regional-anesthesia/">Regional Anesthesia</a></li>
                                    <li><a href="https://sandor.co.in/paracentesis-trainer/">Paracentesis Trainer</a></li>
                                  </ul> */}
                                </li>
                              </ul>
                            </li>

                            <li><Link href="/home">Patient Simulators</Link></li>
                            <li><Link href="/home">Surgical Simulators</Link></li>
                            <li><Link href="/home">Task Trainers</Link></li>
                            <li><Link href="/home">Virtual Education Simulators</Link></li>
                            <li><Link href="/home">Simulation Lab Services</Link></li>
                          </ul>
                        </li>

                        <li><Link href="/home">Group Companies </Link></li>

                        <li>
                          <Link href="/home">Investor Relations <i className="fa fa-angle-down d-none d-lg-block float-end ms-1 mt-1"></i></Link>
                          <ul className="sub_menu">
                            <li><Link href="/home">Financials</Link></li>
                            <li><Link href="/home">NCD</Link></li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/home">Press <i className="fa fa-angle-down d-none d-lg-block float-end ms-1 mt-1"></i></Link>
                          <ul className="sub_menu">
                            <li><Link href="/home">News</Link></li>
                            <li><Link href="/home">News Archive</Link></li>
                            <li><Link href="/home">Events</Link></li>
                            <li><Link href="/home">Social Media</Link></li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/home">Covid <i className="fa fa-angle-down d-none d-lg-block float-end ms-1 mt-1"></i></Link>
                          <ul className="sub_menu">
                            <li><Link href="/home">Accula</Link></li>
                          </ul>
                        </li>
                      </ul>


                    </nav>
                  </div>
                  <div className="mobile-menu" />
                </div>
                {/* <div className="w-auto align-content-center">
                  <div className="header__side-nav f_right d-none d-lg-block">
                    <ul>
                      <li className="appointment_btn">
                        <a href="appointment.html" className="d-flex rounded-1">
                          <Image
                            src="/assets/img/png-icon/png-icon-02.png"
                            alt="check"
                          />
                          Get a Call Back
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Menu End */}
    </header>

  );
};

export default Header;
