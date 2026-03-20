"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Innosonian = () => {
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
                    Innosonian Task Trainers
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Innosonian Task Trainers</span>
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
            <div className="row mb-30">
              <div className="col-lg-6 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Sales-Marketing.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-6 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Innosonian <span>Task Trainers</span>
                  </h2>
                  <p>
                    Innosonian offers modern, compact, and clinically relevant
                    task trainers that focus on emerging procedural skills and
                    minimally invasive techniques. These trainers are
                    particularly well suited for simulation centers and academic
                    settings that emphasize innovation and future-ready clinical
                    practice. Each task trainer provided by Sandor is selected
                    for its{" "}
                    <b>clinical accuracy, durability, and training impact—</b>
                    helping educators and healthcare providers deliver hands-on
                    instruction that translates directly to improved patient
                    care.
                  </p>
                  <p>
                    Each task trainer provided by Sandor is selected for its
                    clinical accuracy, durability, and training impact— helping
                    educators and healthcare providers deliver hands-on
                    instruction that translates directly to improved patient
                    care.{" "}
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

export default Innosonian;
