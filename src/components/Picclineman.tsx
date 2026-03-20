"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Picclineman = () => {
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
                  <h3 className="breadcrumb1__title">Picc Lineman</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Picc Lineman</span>
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
                    Picc <span> Lineman</span>
                  </h5>
                  <h4>
                    Learn Vein Isolation and Selection with Ultrasound Guidance
                    and Ultra-Realistic Tissue Variations
                  </h4>
                  <p className="mt-2">
                    <b> PICCLineMan™ </b>offers entry level to expert
                    Peripherally Inserted Central Catheter (PICC) Line training
                    using realistic ultrasound imagery and compatible tissue
                    variations so durable and life-like you can feel the
                    palpable differences.
                  </p>
                  <p>
                    PICCLineMan is a Peripheral Inserted Central Catheter (PICC)
                    training solution that allows medical professionals to train
                    using real-time ultrasound guidance during catheter
                    placement. This PICC line trainer offers the best value with
                    durable tissues that will endure repeated use. Studies have
                    shown that standardized PICC line training can result in
                    medical error reduction. As the importance of medical
                    simulation becomes more and more evident, PICCLineMan offers
                    a cost-effective method to improve patient safety.
                  </p>

                  <h5 className="mt-4">Palpable Landmarks :</h5>

                  <ul className="round mt-2">
                    <li>Antecubital Fossa.</li>
                    <li>Clavicle.</li>
                    <li>Sternum.</li>
                    <li>1st-4th intercostal space.</li>
                    <li>Acromion.</li>
                    <li>Ribs 1-7.</li>
                    <li>Humeral Head.</li>
                  </ul>
                  <h5 className="mt-4">Ultrasound Anatomy:</h5>
                  <ul className="round mt-2">
                    <li>Basilic Vein.</li>
                    <li>Brachial Vein.</li>
                    <li>Cephalic Vein.</li>
                    <li>Median Nerve.</li>
                    <li>Brachial Artery.</li>
                    <li>Humerus.</li>
                  </ul>
                  <h5 className="mt-4">Skill Development:</h5>
                  <ul className="round mt-2">
                    <li>
                      Complete PICC line procedure including guidewire
                      insertion, dilation, and full cannulation.
                    </li>
                    <li>
                      Peripherally Inserted Catheterization using Basilic,
                      Brachial, or Cephalic Veins.
                    </li>
                    <li>
                      Normal, Obese, and Geriatric tissue options allow
                      assessing patient variance in vessel depth and sizing.
                    </li>
                    <li>
                      Using ultrasound guidance during catheter placement.
                    </li>
                    <li>
                      Palpable anatomic landmarks clinically relevant for
                      measuring catheter length.
                    </li>
                    <li>
                      Multiple X-Rays provided to support the student’s pathway
                      in predicting optimum SVC tip position.
                    </li>
                  </ul>

                  <h5 className="mt-4">Features:</h5>
                  <ul className="round mt-2">
                    <li>
                      Excellent for ultrasound-guided peripheral venous access
                      hands-on training.
                    </li>
                    <li>
                      Anatomically correct human torso and partial right arm at
                      90-degree angle with landmarks.
                    </li>
                    <li>
                      Differentiates arterial and venous blood to show positive
                      or negative results.
                    </li>
                    <li>
                      Positive flashback of simulated blood upon successful
                      venous access.
                    </li>
                    <li>
                      Median Nerve is visible under ultrasound and adds realism
                      in brachial vein access.
                    </li>
                    <li>
                      Self-sealing veins and skin for multiple cannulations.
                    </li>
                    <li>
                      Replaceable Normal, Obese or Geriatric tissue sets allow
                      for multiple uses.
                    </li>
                    <li>
                      Arterial pulse and proper landmarks are present under
                      real-time ultrasound to help avoid and detect errors.
                    </li>
                    <li>
                      Articulating Head enhances realism and allows for
                      discussion of complications.
                    </li>
                  </ul>

                  <h5 className="mt-4">Dimensions:</h5>
                  <ul className="round mt-2">
                    <li>29″ x 15″ x 7.5″.</li>
                    <li>Weight: 15 pounds.</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="gap-6">
                  <img
                    src="/assets/img/who-we-are/image-52.jpg"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-53.jpg"
                    style={{ height: "280px", width: "300px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-54.jpg"
                    style={{ height: "280px", width: "250px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-55.png"
                    style={{ height: "300px", width: "300px" }}
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

export default Picclineman;
