"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CriticalCare = () => {

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
                  <h3 className="breadcrumb1__title"> Critical Care </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Critical Care </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="about1 mt-100">
  <div className="content_box_pob_120">
    <div className="container_m_50 container_l">
      <div className="row">
        <div className="col-xl-7 col_padding">
          <div className="about1__content">
            <div className="heading1 mb-35">
              <h2 className="heading1__title">
                Critical  <span> Care</span>
              </h2>
            </div>
            <p>
             <b> Critical Care </b> is all about taking specialized care of patients who are in a life-threatning condition, who require comprehensive care and constant monitoring; usually for those who are in intensive care units. Hence, we have brought Point-of-care testing to take care of critical situations.
            </p>

            <p> In the intensive care unit (ICU), rapid changes in a patient’s condition often necessitate biochemical monitoring with diagnostic laboratory tests and an immediate response. The term point-of-care (POC) testing, also called near-patient testing or bedside testing, refers to the performance of diagnostic tests at or near the patient. Traditionally, these tests were performed in the central or stat laboratory. With POC testing, these tests are performed outside of the confines of the clinical laboratories of health care facilities. </p>
            <p> In hospitals, they primarily are performed in areas with the most urgent need for rapid diagnosis and therapy, such as emergency departments, surgical suites, critical care units, and certain outpatient areas. </p>
            <p> With rapid advances in technology, POC testing is a dynamic work in progress; the analyzers are becoming smaller, faster, and more user-friendly and have been demonstrated to achieve accuracy with increasingly smaller blood samples, aiding in blood conservation. Blood conservation through small blood samples is an added asset for patients, especially in the ICU, where the patient’s condition often requires multiple blood draws. </p>
            <p> POCT is accomplished through the use of transportable, portable, and handheld instruments (e.g., i-STAT, CoaguSense etc.) and test kits. Sandor’s strategic alliances with ABBOTT, Minntech, ITC and others has made it easier for health care facilities to get the right information at the right time. </p>
          </div>
        </div>
        <div className="col-xl-5 col_padding">
          <div className="about1__thumb_img3 img_100">
            <img src="assets/img/about/Critical-Care.jpg" alt="About" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="feature1 mt-0">
        <div className="content_box_pob_120_80 pt-0">
          <div className="container_m_40 container_l">
            
            <div className="row">
              <div className="col-xl-12 col_padding">
                <h2 className="text-center fs-1 fw-semibold">  Below are the POCT products Sandor provides: </h2>
              </div>
            </div>


            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 mt-5">
              <div className="col col_padding">
                <div className="feature1__item">
                  <h3 className="feature1__item_title"> i-STAT </h3>
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
                      i-STAT is an advanced, handheld blood analyzer that provides real-time, lab quality results within minutes to... </p>
                    <Link href="/"
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
                  <h3 className="feature1__item_title"> San Hgb </h3>
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
                      San Hgb is a simple, portable, rapid and cost effective system for Point-Of-Care measurement of total...
                    </p>
                    <Link href="/"
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
                  <h3 className="feature1__item_title"> CoaguSense </h3>
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
                      CoaguSense is the first PT/INR system to directly detect clot formation representing a breakthrough...
                    </p>
                    <Link href="/"
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
                  <h3 className="feature1__item_title"> Veinus </h3>
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
                      InfraEyes present Veinus, state of the art portable vein locating device, to find the best vein for cannulation...
                    </p>
                    <Link href="/"
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

export default CriticalCare;
