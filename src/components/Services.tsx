"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {

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
        style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-01.png)" }} >
        <div className="breadcrumb1__padding">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="breadcrumb1__content text-center">
                  <h3 className="breadcrumb1__title">Our Services</h3>
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
                      <span>Our Services</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<<<<<<< HEAD
      <section className="feature1">
        <div className="content_box_pob_120_80">
          <div className="container_m_40 container_l">

            <div className="row mb-5">
=======
            <section className="feature1">
        <div className="content_box_pob_120_80">
          <div className="container_m_40 container_l">
            
            <div className="row">
              <div className="col-xl-12 col_padding">
                <h3 className="text-center"> Our services make it possible for manufacturers to reach their products directly to hospitals through an efficient and one stop partnership with Sandor. </h3>
              </div>
            </div>

            <div className="row mb-5 mt-4">
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
              <div className="col-md-12">
                <h2 className="heading1__title text-center"> Our <span>Services</span></h2>
              </div>
            </div>
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title"> Distribution and <br /> Logistics </h3>
                  <div className="feature1__item_thumb">
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/icon/distribution.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
                      Nationwide cold chain distribution with Narcotic Drugs distribution capabilities in 20 states...
                    </p>
<<<<<<< HEAD
                    <Link href="/distribution-logistics"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
=======
                    <Link href="/home"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-semibold"> Read More </span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title">Sales and <br /> Marketing</h3>
                  <div className="feature1__item_thumb">
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/icon/Sales-Marketing.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
                      Specialized sales and marketing team of more than 80 committed and experienced salesmen...
                    </p>
<<<<<<< HEAD
                    <Link href="/sales-marketing"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
=======
                    <Link href="/home"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-semibold"> Read More </span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title">Regulatory and Custom House Functions</h3>
                  <div className="feature1__item_thumb">
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/icon/png-icon-31.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
                      Experienced regulatory affairs team and logistics team capable of handling imports at all...
                    </p>
<<<<<<< HEAD
                    <Link href="/regulatory-supports"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
=======
                    <Link href="/home"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-semibold"> Read More </span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title">Dialysis <br /> Services</h3>
                  <div className="feature1__item_thumb">
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/icon/Dialysis-Services.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
                      Provide both partial and complete Dialysis services to various hospital based dialysis centers...
                    </p>
<<<<<<< HEAD
                    <Link href="/dialysis-services"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
=======
                    <Link href="/home"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-semibold"> Read More </span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
      

    </>


  );

};

export default Services;
