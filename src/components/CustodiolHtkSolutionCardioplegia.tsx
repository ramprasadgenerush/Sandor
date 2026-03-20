"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CustodiolHtkSolutionCardioplegia = () => {
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
                    Custodiol® HTK Solution – Cardioplegia
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Custodiol® HTK Solution – Cardioplegia</span>
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

              <div className="col-lg-8 col_padding">
                <div className="heading1">
                  <h5
                    className="heading1__title mb-4 fs-1 lh-sm">
                    Custodiol® HTK <span>Solution – Cardioplegia</span>
                  </h5>
                  <p>
                    <b>
                      {" "}
                      Custodiol® HTK (Histidine – Tryptophan – Ketoglutarate)
                      Solution
                    </b>{" "}
                    is used by leading Cardiac Surgery Centers as a cardioplegic
                    solution worldwide. A product approved by US FDA as a
                    Medical Device and being a Multi – Organ solution, is also
                    the solution of organ cleaning during cardiac surgery.
                  </p>

                  <p>
                    The biochemical makeup of Custodiol® HTK solution is
                    practical and easier to use (with more complete penetration
                    of organ vessels and structures), and its low viscosity
                    (nearly identical to water) simplifies handling of it.
                    Because of the complete cooling of the entire organ, no
                    surface cooling is required after using Custodiol® HTK
                    during the cardiac arrest phase, and cooling cuffs or
                    similar devices placed behind the heart are not needed.
                  </p>

                  <h4 className="mt-4"> Safety Features : </h4>

                  <ul className="round">
                    <li>Low Potassium</li>
                    <li>Low Viscosity</li>
                  </ul>

                  <h4 className="mt-4"> Clinical Benefits :</h4>

                  <ul className="round">
                    <li>
                      Only solution used as Single Shot Cardioplegia for
                      prolonged ishchemia
                    </li>
                    <li>No surface cooling</li>
                    <li>No retrocardiac cooling</li>
                    <li>No obligatory reperfusion</li>
                    <li>High rate of spontaneous return to sinus rhythm</li>
                    <li>Minimized cell necrosis</li>
                    <li>Less depletion of ATP stores</li>
                    <li>Remarkably increased protective potency</li>
                    <li>Better intra & post operative scenarios</li>
                  </ul>

                  <h4 className="mt-4"> Custodiol® is mainly used in the cases of </h4>

                  <ul className="round">
                    <li>Aortic Stenois</li>
                    <li>Mitral Valve Defects</li>
                    <li>Inborn Heart Defects with no Aortic insufficiency</li>
                    <li>Ascending Aneurysms</li>
                    <li>
                      Hypertrophic Obstructive Cardiomyopathy Sandor Custodiol
                      HTK Solution Cardioplegia
                    </li>
                  </ul>

                  <div className="heading1 mt-25">
                    <a href="" className="btn1">
                      Request A Demo
                    </a>
                  </div>

                  {/* Site BTN */}
                </div>
              </div>

              <div className="col-lg-4 col_padding order-2 order-lg-0">
                <img
                  src="/assets/img/who-we-are/image-13.jpg"
                  alt="Image"
                  className="rounded-4"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustodiolHtkSolutionCardioplegia;
