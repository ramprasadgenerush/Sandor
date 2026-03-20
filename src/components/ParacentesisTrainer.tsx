"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ParacentesisTrainer = () => {
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
                  <h3 className="breadcrumb1__title">Paracentesis Trainer</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Paracentesis Trainer</span>
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
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h5 className="heading1__title ">
                    Paracentesis <span> Trainer</span>
                  </h5>
                  <h4 className="mt-4">
                    Perform Ultrasound-Guided Paracentesis —From Diagnosis to
                    Draining Fluid From the Peritoneal Cavity
                  </h4>
                  <p className="mt-2">
                    The <b>Paracentesis Trainer</b> is anatomically correct and
                    positioned to simulate a patient sitting at a 45 degree
                    angle with a distended abdomen. It’s ultrasound compatible,
                    allowing users to perform parcentesis from diagnosis to
                    draining simulated ascitic fluid from the peritoneal cavity.
                  </p>
                  <p>
                    This ultrasound compatible trainer allows the user to
                    perform diagnostic and/or therapeutic paracentesis. The
                    anatomically correct trainer is positioned to simulate a
                    patient sitting up at a 45-degree angle with a distended
                    abdomen and includes the pubic symphysis, iliac crest, and
                    umbilicus. The procedure can be performed at the midline
                    below the umbilicus or 2 fingerbreadths anterior and 2
                    fingerbreadths cephalad to the anterosuperior iliac spine.
                    The inferior epigastric vessels can be visualized under
                    ultrasound.
                  </p>

                  <h5 className="mt-4">Skill Development :</h5>

                  <ul className="round mt-2">
                    <li>Use an ultrasound probe to minimize risks and learn</li>
                    <li>locate the pocket of ascites.</li>
                    <li>
                      gauge the distance from skin to fluid, and avoid bowel.
                    </li>
                    <li>
                      Look for blood vessels beneath the skin using a vascular
                      probe.
                    </li>
                    <li>Drain the fluid from the peritoneal cavity.</li>
                    <li>
                      Use traditional lateral gutter technique or midline linea
                      alba technique.
                    </li>
                    <li>
                      Palpate anatomic landmarks significant to the procedure.
                    </li>
                  </ul>

                  <h5 className="mt-4">Features:</h5>

                  <ul className="round mt-2">
                    <li>Ultrasound compatible with replaceable tissue..</li>
                    <li>
                      Internal anatomy includes superficial epigastric vessels,
                      liver and spleen, rectus abdominal muscles, and
                      intestines.
                    </li>
                    <li>
                      Allows up to one liter of intraperitoneal fluid removal.
                    </li>
                    <li>
                      Replaceable tissue is durable and allows for repeated use.
                    </li>
                    <li>Palpable anatomy and realistic needle response</li>
                  </ul>

                  <h5 className="mt-4">Components:</h5>

                  <ul className="round mt-2">
                    <li>
                      Paracentesis Base, replaceable Tissue (PACT-20), 7/16” Nut
                      Driver.
                    </li>
                  </ul>

                  <h5 className="mt-4">Dimensions:</h5>

                  <ul className="round mt-2">
                    <li>16″ x 16″ x 16″.</li>
                    <li>19 lbs.</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className=" gap-5">
                  <img
                    src="/assets/img/who-we-are/image-3.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-2"
                  />
                  <img
                    src="/assets/img/who-we-are/image-40.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-66.jpg"
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

export default ParacentesisTrainer;
