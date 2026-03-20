"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Gaumard = () => {
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
                  <h3 className="breadcrumb1__title">Gaumard Task Trainers</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Gaumard Task Trainers</span>
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
            <div className="row mb-40">
              <div className="col-lg-6 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Gaumard-Task-Trainers.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-6 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Gaumard <span>Task Trainers</span>
                  </h2>
                  <p>
                    Gaumard task trainers are engineered for realism and
                    durability, enabling learners to practice essential clinical
                    procedures such as vascular access, airway management, wound
                    care, and more. With anatomically accurate models and
                    responsive feedback, these trainers help improve technical
                    proficiency and procedural confidence across a range of
                    disciplines.
                  </p>

                  {/* <p>http://www.sandordialysis.com.bd/services.html#</p> */}

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

export default Gaumard;
