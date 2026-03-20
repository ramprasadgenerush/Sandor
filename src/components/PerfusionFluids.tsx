"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const PerfusionFluids = () => {
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
                  <h3 className="breadcrumb1__title">Perfusion Fluids</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Perfusion Fluids</span>
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
              <div className="col-lg-6 col_padding">
                <div>
                  <h6 className="heading1__title mb-4">
                    Perfusion <span> Fluids</span>
                  </h6>
                  <p>
                    Organ preservation is an important step while preparing for
                    transplantation. Perfusion fluids play a vital role in this
                    matter. The perfusion fluid is used to perfuse and preserve
                    the kidney prior to transplantation and acts as a medium in
                    which organisms can grow.
                  </p>

                  <h5 className="mt-4">
                    We have the following products in the category of Profusion
                    Fluids:
                  </h5>

                  <ul className="round mt-4">
                    <li>Custodiol HTK Solution – Cardioplegia</li>
                    <li>
                      Custodiol HTK Solution – Multi Organ Transplantation{" "}
                    </li>
                  </ul>

                  <div className="heading1 mt-35">
                    <a href="" className="btn1">
                      Request A Demo
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-1"> </div>
              <div className="col-lg-4 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb pe-0">
                  <img
                    src="/assets/img/who-we-are/image-12.jpg"
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

export default PerfusionFluids;
