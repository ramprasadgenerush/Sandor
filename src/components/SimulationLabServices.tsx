"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SimulationLabServices = () => {
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
                    Simulation Lab Services
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Simulation Lab Services</span>
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
                    src="/assets/img/who-we-are/Simulation-Lab-Services.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Simulation Lab <span>Services</span>
                  </h2>
                  <p>
                    Sandor delivers comprehensive Simulation Lab Services that
                    enable healthcare organizations to create world-class
                    clinical training environments. With deep domain expertise
                    in medical simulation and healthcare education, Sandor
                    partners with institutions from concept to
                    commissioning—covering lab design, equipment selection,
                    installation, faculty training, and long-term support. Each
                    simulation lab is purpose-built to enhance hands-on
                    learning, improve clinical competence, and ensure measurable
                    training outcomes aligned with global healthcare standards.
                  </p>

                  {/* <p>http://www.sandordialysis.com.bd/services.html#</p> */}

                  {/* Site BTN */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2 ">
        <div className="content_box_120_70 pt-0 pb-0  ">
          <div className="container_m_40 container_l">
            <div className="row mb-80">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h3 className="mb-4">For Hospitals and Healthcare Institutions</h3>

                  <p>
                    Sandor’s Simulation Lab Services help hospitals strengthen
                    clinical readiness, patient safety, and team performance
                    across departments. By enabling realistic, scenario-based
                    training for critical care, emergency response, surgical
                    procedures, and nursing skills, Sandor supports continuous
                    professional development without impacting patient care.
                    These labs empower clinicians to practice complex
                    procedures, improve coordination, and respond confidently to
                    high-risk situations—ultimately elevating the quality of
                    care delivered within the hospital.
                  </p>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding">
                <div className="whyChooseUs2__thumb pe-0 ps-5">
                  <img
                    src="/assets/img/who-we-are/Hospitals-Healthcare-Institutions.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2">
        <div className="content_box_120_70 pb-0 pt-0">
          <div className="container_m_40 container_l">
            <div className="row mb-80">
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Educational-Institutions-Universities.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                 <h3 className="mb-4"> For Educational Institutions and Universities</h3>
                  <p>
                    Sandor partners with medical colleges, nursing schools, and
                    allied health institutions to create structured,
                    future-ready simulation labs that bridge the gap between
                    theory and clinical practice. Designed to align with
                    academic curricula and regulatory requirements, these labs
                    provide students with early exposure to real-world clinical
                    scenarios. Through immersive, hands-on learning and faculty
                    enablement, Sandor helps institutions produce competent,
                    confident graduates ready for modern healthcare
                    environments.
                  </p>

                  {/* <p>http://www.sandordialysis.com.bd/services.html#</p> */}

                  {/* Site BTN */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2 ">
        <div className="content_box_120_70 pt-0 pb-0  ">
          <div className="container_m_40 container_l">
            <div className="row mb-80">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h3 className="mb-4">For Simulation Centers and Training Facilities</h3>

                  <p>
                    For dedicated simulation centers, Sandor offers scalable,
                    high-fidelity lab solutions that support multidisciplinary
                    training programs and advanced clinical simulations. From
                    modular lab layouts to integrated technology platforms,
                    Sandor enables centers to deliver standardized, repeatable,
                    and outcome-driven training experiences. With ongoing
                    technical support and program optimization, these simulation
                    labs become sustainable hubs for excellence in clinical
                    education and professional skill advancement.
                  </p>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding ">
                <div className="whyChooseUs2__thumb pe-0 ps-5">
                  <img
                    src="/assets/img/who-we-are/Simulation-Centers-Training-Facilities.jpg"
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

export default SimulationLabServices;
