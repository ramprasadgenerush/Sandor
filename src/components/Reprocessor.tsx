"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Reprocessor = () => {
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
                  <h3 className="breadcrumb1__title">Renal Portfolio</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Renal Portfolio</span>
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
            <div className="row mb-20">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h5 className="heading1__title ">
                    Renal <span> Portfolio</span>
                  </h5>
                  <p>
                    When used on different patients, medical devices become
                    soiled and contaminated with micro-organisms. To avoid any
                    risk of infection, medical devices undergo “reprocessing”, a
                    detailed multi-step process to clean and disinfect or
                    sterilize them. Once reprocessed, medical devices can be
                    safely used again on patients.
                  </p>
                  <p>
                    Inadequate reprocessing can result in the retention of
                    blood, tissue and other biological debris (soil) in certain
                    types of reusable medical devices. These debris can allow
                    microbes to survive the disinfection or sterilization
                    process, which could then lead to Health-care Associated
                    Infections (HAIs). Hence, it is very critical to properly
                    reprocess the medical devices after each use.
                  </p>

                  <h5>
                    We provide the following Reprocessors for easing the job of
                    medical practitioners :
                  </h5>

                  <ul className="round">
                    <li>Renal Care – Dialyzer Reprocessors</li>
                  </ul>

                  <div className="heading1 mb-35">
                    <a href="" className="btn1">
                      Request A Demo
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-07.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reprocessor;
