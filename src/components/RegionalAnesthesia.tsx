"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const RegionalAnesthesia = () => {
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
                  <h3 className="breadcrumb1__title">Regional Anesthesia</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Regional Anesthesia</span>
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
                    Regional <span> Anesthesia</span>
                  </h5>
                  <h4 className="mt-4">
                    Shorten the Path to Ultrasound-Guided Needle Tip Placement
                    Mastery
                  </h4>
                  <p className="mt-2">
                    The <b>Regional Anesthesia </b>Series is a high-tech, safe
                    and realistic simulated learning experience. It’s embedded
                    with patented, SmarTissue™ technology that gives learners
                    important feedback during a graduated learning program —from
                    tissue pad to simulated patient body form.
                  </p>
                  <p>
                    The Regional Anesthesia Femoral Trainer with SmarTissue
                    allows skills practice for femoral nerve blocks with
                    ultrasound compatible tissue. This trainer allows ultrasound
                    practice with visualization of the most clinically relevant
                    femoral anatomy and needle tip to ensure proper
                    manipulation, placement, and proximity to the nerves. The
                    trainer consists of a body form and replaceable tissue, each
                    embedded with SmarTissue technology, allowing the system to
                    connect with any PC to provide needle-to-nerve visuals and
                    audio verification of proper technique.
                  </p>

                  <h5 className="mt-4">Skill Development :</h5>

                  <ul className="round mt-2">
                    <li>
                      Psychomotor skills associated with targeting femoral
                      nerves for regional anesthesia nerve blocks.
                    </li>
                    <li>Ultrasound imaging skills</li>
                    <li>Transducer and needle manipulation and movement.</li>
                    <li>
                      Visualize needle tip positioning, proximity, and placement
                      verification.
                    </li>
                    <li>
                      Recognition of nerves, arteries, veins and fascia layer
                      anatomy.
                    </li>
                  </ul>

                  <h5 className="mt-4">Features:</h5>

                  <ul className="round mt-2">
                    <li>
                      Ultrasound is compatible for guidance during needle
                      insertion.
                    </li>
                    <li>
                      Anatomically correct lower torso with landmarks for
                      placing femoral blocks.
                    </li>
                    <li>
                      Distinct realistic “pop” is visualized and palpated when
                      the needle passes through the fascia layers.
                    </li>
                    <li>
                      SmarTissue software interprets unique signals, showing
                      orange when in contact and red when penetrating the nerve.
                    </li>
                  </ul>

                  <h5 className="mt-4">Landmarks:</h5>

                  <ul className="round mt-2">
                    <li>Inguinal crease</li>
                    <li>Inguinal ligament.</li>
                    <li>Anterior superior iliac spine.</li>
                    <li>Pubic tubercle.</li>
                  </ul>

                  <h5 className="mt-4">Ultrasound Anatomy:</h5>

                  <ul className="round mt-2">
                    <li>Femoral nerve.</li>
                    <li>Femoral artery (pulsatile) and vein (pressurized).</li>
                    <li>Fascia lata and iliacus Iliopsoas.</li>
                    <li>Inguinal ligament.</li>
                  </ul>
                  <h5>Components:</h5>

                  <ul className="round mt-2">
                    <li>
                      SmarTissue Lower Body Form, Regional Anesthesia Femoral
                      Replaceable SmarTissue, SmarTissue Software, Universal
                      Needle Adaptor, Hand Pump, Venous Pressure Regulator,
                      Simulated Venous and Arterial Blood, Carrying Case, User’s
                      Guide.
                    </li>
                    <li>*Laptop not included.</li>
                  </ul>

                  <h5 className="4">Dimensions:</h5>

                  <ul className="round mt-2">
                    <li>Size: 30″ x 20″ x 9″.</li>
                    <li>Weight: 23 lbs.</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="gap-5">
                  <img
                    src="/assets/img/who-we-are/image-62.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto"
                  />
                  <img
                    src="/assets/img/who-we-are/image-63.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-64.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-65.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
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

export default RegionalAnesthesia;
