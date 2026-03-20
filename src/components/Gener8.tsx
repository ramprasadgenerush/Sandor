"use client";

import React, { useEffect } from "react";
import Link from "next/link";


const Gener8 = () => {
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
                  <h3 className="breadcrumb1__title">Gener8</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Gener8</span>
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
            <div className="row">
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb mt-4">
                  <img
                    src="/assets/img/who-we-are/Gener8.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Gener<span>8</span>
                  </h2>
                  <h4>For Nursing Students and Practicing Nurses</h4>
                  <p>
                    Gener8 Virtual Education Simulators offer nursing students
                    and professionals a flexible, interactive way to strengthen
                    core clinical skills and decision-making. From patient
                    assessment and medication administration to prioritization
                    and care planning, these simulators allow learners to
                    practice repeatedly in realistic virtual environments. By
                    building confidence before bedside exposure, nurses are
                    better prepared to deliver safe, compassionate, and
                    efficient patient care in real clinical settings.
                  </p>
                  <h4>For Medical Students and Residents</h4>
                  <p>
                    For medical students and residents, Gener8 simulators
                    provide a structured platform to develop clinical reasoning,
                    procedural understanding, and diagnostic confidence.
                    Learners can explore patient scenarios, practice clinical
                    workflows, and refine decision-making without the pressure
                    of real-world consequences. This virtual exposure
                    complements hands-on training, helping future physicians
                    transition smoothly from classroom learning to clinical
                    practice.
                  </p>

                  <h4>For Paramedics and Emergency Care Professionals</h4>

                  <p>
                    Gener8 Virtual Education Simulators support paramedics and
                    emergency responders by enabling scenario-based training in
                    high-pressure, time-critical situations. From trauma
                    response and emergency assessment to rapid decision-making,
                    these simulators allow teams to rehearse real-life
                    emergencies in a controlled digital environment. This
                    enhances preparedness, sharpens response skills, and
                    improves confidence when managing critical cases in the
                    field.
                  </p>
                  <p>
                    By offering Gener8 Virtual Education Simulators,
                    <b> Sandor</b> helps institutions deliver scalable,
                    accessible, and learner-centric digital training solutions
                    that complement physical simulation and strengthen realworld
                    clinical performance.
                  </p>

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

export default Gener8;
