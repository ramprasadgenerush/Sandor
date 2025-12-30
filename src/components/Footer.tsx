import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (



<footer className="footer2">
  <div className="footer2__main">
    <div className="footer2__main_top">
      <div className="container_m_30 container_l">
        <div className="row">
          <div className="col-xl-5 col-md-6 col_padding">
            <div className="footer2__main_item">
              <div className="footer2__main_item_imgBox">
                <Image src="/assets/img/png-icon/png-icon-27.png" alt="Image" />
              </div>
              <div className="footer2__main_item_content">
                <h5>Locate Us</h5>
                <p className="m-0">8-2, 326/5, Rd Number 3, Green Valley, Banjara Hills, Hyderabad, Telangana 500034</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col_padding">
            <div className="footer2__main_item">
              <div className="footer2__main_item_imgBox">
                <Image src="/assets/img/png-icon/png-icon-28.png" alt="Image" />
              </div>
              <div className="footer2__main_item_content">
                <h5>Call Us Today</h5>
                <p className="m-0">  1800 425 9515 (TollFree) | 040-23357048 </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col_padding">
            <div className="footer2__main_item">
              <div className="footer2__main_item_imgBox">
                <Image src="/assets/img/png-icon/png-icon-29.png" alt="Image" />
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
                <Link href="/home">Ultrasound/Imaging Simulators</Link>
              </li>
              <li>
                <Link href="/home">Patient Simulators</Link>
              </li>
              <li>
                <Link href="/home">Surgical Simulators</Link>
              </li>
              <li>
                <Link href="/home">Task Trainer</Link>
              </li>
              <li>
                <Link href="/home">Virtual Education Simulators</Link>
              </li>
              <li>
                <Link href="/home">Simulation Lab Services</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col_padding">
          <div className="footer2__widget">

            <Image src="https://web.archive.org/web/20250812210120im_/https://sandor.co.in/wp-content/uploads/2021/10/MicrosoftTeams-image-46-300x142.png" alt="Logo" />

            <h5 className="text-white mt-3"> Sandor Mobile RTPCR (KERALA) <br /> Customer Care </h5>
            <h6 className="text-white mt-3">  Phone No: +91-8891266564 | +91-8891266565 </h6>
          </div>
        </div>
        <div className="col-lg-5 col_padding">
          <div className="footer2__widget">
            <Image src="/assets/img/logo/logo-2.png" alt="Logo" />
            <div className="footer2__widget_input">
              <p className="pe-0">
               Sandor Medicaids Pvt. Ltd. is a nationwide distribution company specializing in supplies to hospitals and government institutions. It has developed efficient systems and capabilities to supply specialty drugs, device and equipment to hospitals. Since its inception in 1995 in Hyderabad, the company has focused on bringing high-tech biomedical and biotechnology products into India.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer2__copyright">
    <div className="container_m_30 container_l">
      <div className="row">
        <div className="col-md-6">
          <div className="footer2__copyright_text">
            <p className="m-0">Copyright 2025 Sandor.co.in | All Rights Reserved</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="footer2__copyright_link text-end d-none d-md-block">
            <ul>
              <li>
                <Link href="/home"> Teams &amp; Conditions </Link>
              </li>
              <li>
                <Link href="/home"> Privacy Policy </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>





  ); 
  
};

export default Footer;
