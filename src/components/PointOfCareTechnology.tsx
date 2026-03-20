"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const PointOfCareTechnology = () => {
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
                  <h3 className="breadcrumb1__title">
                    Point Of Care Technology
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Point Of Care Technology</span>
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
              <div className="col-lg-5">
                <img
                  src="/assets/img/about/Point-of-Care-Technology.jpg"
                  alt="Image"
                  className="rounded-4"
                />
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1 ps-4">
                  <h4 className="heading1__title mb-30 text-nowrap">
                    Point of <span> Care Technology</span>
                  </h4>
                  <p>
                    <b>Point-of-care testing (POCT)</b> is diagnostic testing at
                    or near the site of patient care. We currently live in an
                    information-rich world, and in the domain of health care,
                    information needs are perhaps the highest, more critical
                    than anywhere else. Health care providers need specific and
                    precise information in order to make decisions regarding
                    their patients. Patients and families who are receiving
                    health care services are similarly stakeholders who are
                    often in need of accurate information.
                  </p>
                  <p>
                    These highlight an important challenge to health care
                    systems –
                    <b>
                      the need to find better ways to get ‘the right information
                      to the right person at the right time
                    </b>{" "}
                    ’. Recognizing this general challenge, Sandor has introduced
                    a variety of ‘point of care’ technologies for enhancing the
                    flow of information to providers, patients, and families.
                  </p>

                  <p>
                    The driving{" "}
                    <b>
                      motivation behind POCT is to bring the test conveniently
                      and immediately to the patient
                    </b>{" "}
                    . This increases the likelihood of patients receiving the
                    test results in a timely manner. POCT is accomplished
                    through the use of transportable, portable, and handheld
                    instruments (e.g., i-STAT, CoaguSense etc.) and test kits.
                    Sandor’s strategic alliances with ABBOTT, Minntech, ITC and
                    others has made it easier for health care facilities to get
                    the right information at the right time.
                  </p>
                  <p>
                    The goal of POCT division is to apply innovative scientific
                    technology to meet the challenges of decentralized
                    diagnostics and treatment. The POCT division promises
                    delivery of rapid diagnosis to enable speedy treatment of
                    patients in a setting that is convenient for both the
                    clinician and the patient.
                  </p>

                  <h5>We provide the following POCT products: :</h5>

                  <ul className="round">
                    <li>i-STAT</li>
                    <li>San Hgb</li>
                    <li>CoaguSense</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PointOfCareTechnology;
