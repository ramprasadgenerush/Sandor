"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const PatientSimulators = () => {
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
                  <h3 className="breadcrumb1__title">Patient Simulators</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Patient Simulators</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2">
        <div className="content_box_120_70 pb-0 ">
          <div className="container_m_40 container_l">
            <div className="row mb-80">
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-24.png"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title">
                    Patient <span>Simulators</span>
                  </h2>
                  <h3>Medical –X</h3>
                  <p>
                    Medical–X is Dutch company based in Rotterdam specialized in
                    design, development, manufacturing of simulation products
                    for medical teaching and training. Cutting-edge
                    technological simulators that are cost effective and time
                    efficient to teach and train clinical skills with
                    increasingly realistic simulators.
                  </p>

                  <h3>Adult Patient Simulator | Pediatric Patient Simulator</h3>
                  <p>ADAM-X. NENASim Infant / Newborn / Preemie.</p>
                  {/* Site BTN */}
                  <div className="heading1">
                    <a href="" className="btn1">
                      More Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2 ">
        <div className="content_box_120_70 pt-0 pb-0 ">
          <div className="container_m_40 container_l">
            <div className="row mb-40">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h3>Nasco Healthcare</h3>

                  <p>
                    Nasco Healthcare , US Based , medical simulation company
                    developing manikins for over 75 years now and made
                    simulation accessible to all. From in-hospital to casuality
                    and rescue scenarios Nasco Healthcare simulation in
                    healthcare solutions prepare frontline healthcare workers to
                    BE READY . From Low to High Fidelity one can find the right
                    training solution for current and future need with over 6000
                    products to offer . Every product is rugged, reliable and
                    hyper-realistic , 100% hand made in the USA , Compliant to
                    healthcare regulations and covered upto 5 years warranty
                    with easily upgradeable and replaceable parts.
                  </p>
                  <ul className="round">
                    <li>Simulaids Casualty Care Rescue Randy.</li>
                  </ul>

                  <div className="heading1 mb-35">
                    <a href="" className="btn1">
                      More Information
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb pe-0 ps-5">
                  <img
                    src="/assets/img/who-we-are/image-25.png"
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

export default PatientSimulators;
