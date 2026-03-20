"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SanHgb = () => {
  return (
    <>
      <section
        className="breadcrumb1"
        style={{
          backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-01.png)",
        }}
      >
        <div className="breadcrumb1__padding">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="breadcrumb1__content text-center">
                  <h3 className="breadcrumb1__title">San Hgb </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>San Hgb</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2">
        <div className="content_box_120_70 ">
          <div className="container_m_40 container_l">
            <div className="row mb-80">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h4 className="heading1__title mb-30 text-nowrap">
                    San <span> Hgb</span>
                  </h4>
                  <p className="mb-40">
                    <b>San Hgb </b> is a simple, portable, rapid and cost
                    effective system for Point-Of-Care measurement of total
                    hemoglobin. The meter measures the change in optical
                    reflectance after the application of blood on the test
                    strip. It can determine levels of anemia within 30 seconds.
                  </p>
                  <p>
                    It consists of a compact, battery-operated meter &
                    single-use test strips, used in measuring total hemoglobin,
                    from capillary or venous whole blood. The San Hgb provides
                    the precision, accuracy & cost effective results that
                    clinicians require. Our hemoglobin test kit is used by
                    health care professionals and by anyone else following
                    simple instructions
                  </p>
                  <div>
                    <p>Step1: Turn on the meter, insert the test strip</p>
                    <p>Step2: Apply blood sample to the test strip</p>
                    <p>Step3: Read the test result.</p>
                  </div>

                  <ul className="round">
                    <li>
                      A high Hgb result may indicate that your kidneys are not
                      functioning as they should be
                    </li>
                    <li>
                      Low Hgb results may signify anemia, cirrhosis of the
                      liver, and excessive bleeding
                    </li>

                    <li>
                      Incase of abnormal readings please visit your doctor
                      immediately
                    </li>
                  </ul>

                  <h5>Key Features :</h5>

                  <ul className="round">
                    <li>
                      <b> Portable Design </b> – Hand held battery operated
                      meter with single use test strips, operates on 3 volt
                      lithium battery, large easy to read LCD screen and 250
                      memory data storage
                    </li>
                    <li>
                      <b> Fast </b> – Rapid three step test, requires only 15 µl
                      of capillary or venous blood.
                    </li>
                    <li>
                      <b> Accuracy & Quality Control </b> – Self calibrating ,
                      accurate and precise results
                    </li>
                    <li>
                      <b>CE Marking</b> – It has compliance with EU Legislation
                    </li>
                  </ul>

                  <a href="" className="btn1">
                    Request A Demo
                  </a>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding">
                <img
                  src="/assets/img/who-we-are/image-07.png"
                  alt="Image"
                  className="rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SanHgb;
