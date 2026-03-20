"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LumbarPunctureEpidural = () => {
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
                    Lumbar Puncture Epidural
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Lumbar Puncture Epidural</span>
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
                    Lumbar Puncture <span> Epidural</span>
                  </h5>
                  <h4 className="mt-4">Lumbar Puncture /Epidural</h4>
                  <p className="mt-3">
                    Safely master critical techniques for spinal epidural
                    insertion and catheterization with Simulab’s easy-to-use,
                    ultrasound-guided Lumbar Epidural Trainer and Lumbar
                    Puncture Trainers.
                  </p>
                  <p>
                    Our true-to-life simulator sits upright or in a lateral
                    decubitus position and features the lumbar vertebrae, iliac
                    crest, spinous process, ligamentum flavum, epidural space,
                    and dura.
                  </p>
                  <p>
                    The trainer supports three varieties of lifelike, ultrasound
                    compatible replaceable tissues that mirror significant
                    anatomical differences found in obese, geriatric, and normal
                    patient populations. Every tissue allows users to experience
                    variances in disc thickness and soft tissue depth on top of
                    the vertebrae.
                  </p>

                  <h2 className="mt-5">Product Highlights :</h2>

                  <ul className="round mt-3">
                    <li>Use ultrasound and palpation to identify landmarks.</li>
                    <li>
                      Practice spinal and epidural injections from insertion to
                      full catheterization.
                    </li>
                    <li>
                      Experience the presence and absence of resistance, and
                      tapping the plunger until loss of resistance is present.
                    </li>
                    <li>
                      Ability to measure and insert the catheter to the
                      appropriate depth; remove the needle and secure.
                    </li>
                    <li>
                      Practice the procedure in the left lateral decubitus or
                      sitting position.
                    </li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className=" gap-6">
                  <img
                    src="/assets/img/who-we-are/image-59.jpg"
                    style={{ height: "220px" }}
                    alt="Image"
                    className="rounded-4  mx-auto"
                  />
                  <img
                    src="/assets/img/who-we-are/image-60.jpg"
                    style={{ height: "200px" }}
                    alt="Image"
                    className="rounded-4  mx-auto mt-50"
                  />

                  <img
                    src="/assets/img/who-we-are/image-61.jpg"
                    style={{ height: "220px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-50"
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

export default LumbarPunctureEpidural;
