"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {

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
                  <h3 className="breadcrumb1__title">About Us</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>About Us</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="service1 bg-transparent">
        <div className="service1__shape">
          <img src="/assets/img/shape/shape-02.png" alt="Service" />
        </div>
        <div className="content_box_120_70 pb-2">
          <div className="container_m_40 container_l">

            <div className="row">
              <div className="col-xl-6 col_padding">
                <div className="about1__content">
                  <div className="heading1 mb-35">
                    <h4 className="heading1__subtitle mb-10">About Us </h4>
                    <h2 className="heading1__title">
                      About The <span>Sandor</span>
                    </h2>
                  </div>
                  <p>
                    Sandor Medicaids Pvt. Ltd. is a nationwide distribution company specializing in supplies to hospitals and government institutions. It has developed efficient systems and capabilities to supply specialty drugs, device and equipment to hospitals. Since its inception in 1995 in Hyderabad, the company has focused on bringing high-tech biomedical and biotechnology products into India. Sandor has been the first company to bring “Point of Care” concept to the Indian ICU  in 1996 by launch of i-stat, a state of the art product for emergency monitoring of patients.
                  </p>

                  <p>The company started as a sales, marketing and distribution company and over time evolved as a nationwide distribution, sales and marketing company by 2008 when Genzyme launched their operations in India. It can today boast of a national level distribution network with 21CFR compliant cold chain facilities covering most of Indian states. Our efficient and compliant 20 branch distribution network supports drug and device manufacturers launch products with ready access to more than 3000 hospitals across India. The company today has more than 180 vendor registrations in Government and private Institutions making it the only partner for foreign or domestic manufacturers to bring their products to hospitals at the most economical costs while maintaining the highest ethical standards. </p>


                </div>
              </div>
              <div className="col-xl-6 col_padding">
                <div className="about1__thumb mt-0">
                  <div className="about1__thumb_shap">
                    <img src="/assets/img/png-icon/png-icon-11.png" alt="" />
                  </div>
                  <div className="about1__thumb_info">
                    <div className="about1__thumb_info_icon">
                      <img src="/assets/img/png-icon/png-icon-10.png" alt="" />
                    </div>
                    <div className="about1__thumb_info_text rounded-2">
                      <h5>
                        <span className="counter2">1995</span>
                      </h5>
                      <p>Since its inception</p>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-sm-5 col-xl-6 d-xl-flex align-items-xl-end d-lg-block d-none">
                      <div className="about1__thumb_img3 img_100">
                        <img src="/assets/img/about/drugs1.jpg" alt="About" />
                      </div>
                    </div>
                    <div className="col-sm-7 col-xl-6">
                      <div className="about1__thumb_img1 img_100">
                        <img src="/assets/img/about/drugs2.jpg" alt="About" />
                      </div>
                      <div className="about1__thumb_img2 img_100">
                        <img src="/assets/img/about/drugs3.jpg" alt="About" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5 mt-lg-0">
              <div className="col-xl-12 col_padding">
                <p> The company has over time developed a strong sales and marketing team which is helping it launch own branded products in select therapeutic area like Critical Care, Nephrology and Transplantation and Pain Management. Our strong presence in Government Institutions has ensured direct sales to all users without help of any sub dealer or liaison agents. The company also provides complete regulatory support to partners and has in-house pharmacovigilance function  besides having a strong custom clearing department. </p>

                <p> A firm foothold in the Indian Hospital procurement system has made Sandor a partner of choice for any new launch of medical drugs, devices and equipment in the Indian Hospital System. </p>

              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="feature1 mt-3 mt-lg-4">
        <div className="content_box_pob_120_80 pt-0">
          <div className="container_m_40 container_l">

            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="heading1__title text-center"> Our <span>Services</span></h2>
              </div>
            </div>
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title"> Distribution and <br /> Logistics </h3>
                  <div className="feature1__item_thumb">
                    <img
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
                    <img
                      src="/assets/img/icon/distribution.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
                      Nationwide cold chain distribution with Narcotic Drugs distribution capabilities in 20 states...
                    </p>
                    <Link href="/distribution-logistics"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title">Sales and <br /> Marketing</h3>
                  <div className="feature1__item_thumb">
                    <img
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
                    <img
                      src="/assets/img/icon/Sales-Marketing.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
                      Specialized sales and marketing team of more than 80 committed and experienced salesmen...
                    </p>
                    <Link href="/sales-marketing"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title">Regulatory and Custom House Functions</h3>
                  <div className="feature1__item_thumb">
                    <img
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
                    <img
                      src="/assets/img/icon/png-icon-31.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
                      Experienced regulatory affairs team and logistics team capable of handling imports at all...
                    </p>
                    <Link href="/regulatory-supports"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title">Dialysis <br /> Services</h3>
                  <div className="feature1__item_thumb">
                    <img
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
                    <img
                      src="/assets/img/icon/Dialysis-Services.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
                      Provide both partial and complete Dialysis services to various hospital based dialysis centers...
                    </p>
                    <Link href="/dialysis-services"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
                      <i data-feather="arrow-right" />
                    </Link>
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

export default About;
