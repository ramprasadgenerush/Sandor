"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const IStat = () => {
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
                  <h3 className="breadcrumb1__title">i-Stat</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>i-Stat</span>
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
              <div className="col-lg-8 col_padding">
                <div className="heading1">
                  <h4 className="heading1__title mb-30 text-nowrap">
                    i-<span> stat</span>
                  </h4>
                  <p>
                    <b> i-STAT</b> is an advanced, handheld blood analyzer that
                    provides real-time, lab quality results within minutes to
                    accelerate the patient care decision-making process.
                  </p>
                  <p>
                    The fully automated i-STAT System offers a broad menu of
                    tests for diagnostic and treatment indicators related to
                    disease state management and clinical practice guidelines.
                    Using just 2 or 3 drops of blood, the system provides
                    time-sensitive tests at the patient’s side in just minutes.
                  </p>

                  <h4 className="text-primary">Key Features :</h4>

                  <ul className="round">
                    <li>
                      <b> Real-time, lab-quality results within minutes </b>{" "}
                      provide accurate results for a wide range of tests right
                      in patient care settings.
                    </li>
                    <li>
                      <b>
                        {" "}
                        Supports a patient-centric approach to health care{" "}
                      </b>
                      accelerates patient care decision-making by reducing the
                      time needed to get vital information to clinicians.
                    </li>
                    <li>
                      <b>
                        {" "}
                        Broad and expanding range of tests with one
                        platform{" "}
                      </b>
                      ideal for meeting various medical practice needs.
                    </li>
                    <li>
                      <b> Optimizes system efficiency</b> by eliminating process
                      steps and handoffs to help reduce the incidence of errors
                      and promote patient safety.
                    </li>
                  </ul>

                  <h3 className="mt-5">Cartridges used in i-STAT</h3>

                  <img
                    src="/assets/img/who-we-are/image-06.jpg"
                    alt="Image"
                    className="rounded-4 "
                  />

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-4 col_padding">
                <img
                  src="/assets/img/who-we-are/image-05.jpg"
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

export default IStat;
