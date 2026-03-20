"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Arteriallineman = () => {
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
                  <h3 className="breadcrumb1__title">Arterial Lineman</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Arterial Lineman</span>
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
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h5 className="heading1__title ">
                    Arterial <span> Lineman</span>
                  </h5>
                  <h4 className="mt-4">
                    Practice Ultrasound Guided Arterial Catheterization and ABG
                    Sampling
                  </h4>
                  <p className="mt-2">
                    The new Simulab Ultrasound ArteriaLine and ABG Trainer
                    allows educators to train ultrasound guided radial artery
                    catheterization and perform ABG sampling.
                  </p>
                  <p>
                    With this true to life hand and arm model, users can safely
                    practice arterial cannulation, ABG and arterial puncture to
                    complete continuous blood pressure measurement and blood gas
                    sampling in critically ill patients.
                  </p>
                  <p>
                    The new Simulab Ultrasound ArteriaLine and ABG Trainer allow
                    educators to train ultrasound-guided radial artery
                    catheterization and perform ABG sampling. This trainer
                    brings medical simulation to new levels with variable pulse
                    strength and rate, palpable landmarks, sharp ultrasound
                    imaging, and arterial pressure that fills an ABG sampling
                    syringe.
                  </p>

                  <h5 className="mt-4">Features :</h5>

                  <ul className="round mt-2">
                    <li>Ultrasound or blind palpation technique.</li>
                    <li>
                      Artery is palpable at the wrist and descends as it travels
                      towards the elbow.
                    </li>
                    <li>
                      Self-priming artery with an adjustable pulse and fluid
                      strength.
                    </li>
                    <li>
                      Realistic resistance of tissue and artery wall during
                      injection.
                    </li>
                    <li>Distinct pop of the artery wall during insertion.</li>
                    <li>
                      Natural flashback of simulated fluid into the needle can
                      be observed.
                    </li>
                    <li>Replaceable vessels with a low per student cost.</li>
                  </ul>
                  <h5 className="mt-4">Components:</h5>
                  <ul className="round mt-2">
                    <li>ArteriaLine Trainer.</li>
                    <li>Wall Power Supply.</li>
                    <li>Replaceable Ultrasoundable Tissue.</li>
                    <li>10 pack of Arteries.</li>
                    <li>Arterial Fluid Mixing Bottle.</li>
                    <li>Protective Case.</li>
                    <li>User Guide.</li>
                    <li>ArteriaLine Trainer Wall Power Supply.</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className=" gap-6">
                  <img
                    src="/assets/img/who-we-are/image-56.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto"
                  />
                  <img
                    src="/assets/img/who-we-are/image-57.jpg"
                    style={{ height: "300px" }}
                    alt="Image"
                    className="rounded-4  mx-auto mt-10"
                  />
                  <img
                    src="/assets/img/who-we-are/image-58.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4  mx-auto mt-10"
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

export default Arteriallineman;
