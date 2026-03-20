"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HealthcareTrainingSimulators = () => {
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
                  <h3 className="breadcrumb1__title">Simulation Portfolio</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Simulation Portfolio</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2">
        <div className="content_box_120_70">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-19.png"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Simulation <span>Portfolio</span>
                  </h2>

                  <p>
                    The use of Healthcare Simulators at all levels of education
                    appears promising because research suggests that the use of
                    simulators facilitates the development of students’ physical
                    assessment and critical thinking skills in a user-friendly
                    environment. The use of this technology addresses patient
                    safety because the student is able to refine skills and
                    develop competency in a simulated environment.
                  </p>

                  <h2>Ultrasound/Imaging Simulators</h2>
                  <p>
                    Medical simulation training for diagnosis, therapeutic
                    applications of ultrasound imaging techniques for learners
                    and educators.
                  </p>

                  <p>
                    Manikin, haptics, specific tasks and virtual probe….. based
                    solutions.
                  </p>
                  {/* Site BTN */}
                  <div className="heading1 mt-25">
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

      <section className="whyChooseUs2 bg-body-secondary pt-80 pb-80">
        <div className="content_box_120_70 pt-0 pb-0 ">
          <div className="container_m_40 container_l">
            <div className="row mb-60">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2>Patient Simulators</h2>
                  <p>
                    Full body, Life size manikin based simulation mimicking
                    Low,Mid& High fidelity from simple to complex real life
                    dynamic scenarios for training, skills enhancement, teamwork
                    development of healthcare professionals.
                  </p>
                  <p>Adult, Neonatal, Paediatric…</p>

                  <div className="heading1 mt-35">
                    <a href="" className="btn1">
                      More Information
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-14.png"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2 pt-80 pb-80">
        <div className="content_box_120_70 pt-0 pb-0">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-15.png"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2>Surgical Simulators</h2>
                  <p>
                    Simulates real life surgical procedures in 3d view for
                    developing core cognitive and motor skills using.
                  </p>

                  <p>
                    Hands On, Mechanics, Haptics, Motion Control Feedback system
                    in safe environ improving efficiency and patient safety.
                  </p>
                  {/* Site BTN */}
                  <div className="heading1 mt-35">
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

      <section className="whyChooseUs2 bg-body-secondary pt-80 pb-80">
        <div className="content_box_120_70 pt-0 pb-0">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2>Task Trainers</h2>
                  <p>for UG /PG Medical / Nursing / Community</p>
                  <p>
                    Table top low tech Partial manikins supporting competency
                    and specific procedure skills. They can be integrated or
                    independent from simulation scenarios. Wide range of models
                    to choose from based on targeted segment.
                  </p>
                  <p>
                    Airway,IV,IM, Breat Examination, Gastric Lavage,
                    Tracheostomy,…..
                  </p>

                  <div className="heading1 mt-35">
                    <a href="" className="btn1">
                      More Information
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-16.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2 pt-80 pb-80">
        <div className="content_box_120_70 pt-0 pb-0">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-lg-5 order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Virtual-Education.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2>Virtual Education</h2>
                  <p>
                    Computer-based simulation tools, clinical scenarios and flat
                    screen programs employed as part of teaching various
                    activities in the Center.
                  </p>

                  {/* Site BTN */}
                  <div className="heading1 mt-35">
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

      <section className="whyChooseUs2 bg-body-secondary pt-80 pb-80">
        <div className="content_box_120_70 pt-0 pb-0">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2>Simulation Lab Services</h2>

                  <p>
                    One Stop destination for all medical simulation needs right
                    from manikins, faculty development and simulation lab
                    designs.
                  </p>
                  <p>
                    Come and train at our Sim-Lab, comprehensive training
                    environ with all equipment for simulation courses.
                  </p>

                  <div className="heading1 mt-35">
                    <a href="" className="btn1">
                      More Information
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-18.jpg"
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

export default HealthcareTrainingSimulators;
