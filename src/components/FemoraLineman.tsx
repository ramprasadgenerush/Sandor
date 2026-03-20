"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const FemoraLineman = () => {
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
                  <h3 className="breadcrumb1__title">Femoral Lineman</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Femoral Lineman</span>
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
                    Femoral <span> Lineman</span>
                  </h5>
                  <h4 className="4">
                    Train Using Real Time Ultrasound Guidance for Femoral
                    Central Venous Access
                  </h4>
                  <p className="mt-2">
                    FemoraLineMan™ is an incredible training solution for
                    femoral line placement. With the same ultra-realistic tissue
                    properties Simulab is known for, FemoraLineMan allows for
                    real-time ultrasound guidance for catheter placement.
                  </p>
                  <p>
                    FemoraLineMan is an ultrasound compatible task trainer that
                    offers an effective training solution for central venous or
                    arterial access using the femoral site. This femoral line
                    trainer uses the same patented technology as the highly
                    acclaimed TraumaMan System and allows medical professionals
                    to train using real-time ultrasound guidance during venous
                    or arterial cannulation.
                  </p>
                  <h5 className="mt-4">Skill Development :</h5>
                  <ul className="round mt-2">
                    <li>
                      Practice the full vascular access procedure using the
                      femoral vein under ultrasound guidance or blind/landmark
                      insertion techniques.
                    </li>
                    <li>
                      Practice palpating external landmarks to identify vessel
                      location.
                    </li>
                  </ul>
                  <h5 className="mt-4">Practice use of ultrasound for :</h5>
                  <ul className="round mt-2">
                    <li>
                      Developing psychomotor skills required for obtaining
                      visualization during cannulation.
                    </li>
                    <li>Visualizing arterial pulse and venous compression.</li>
                    <li>
                      Identifying the anatomical location of the target vessel.
                    </li>
                    <li>
                      Visualizing needle cannulation, threading guidewire, and
                      catheter placement.
                    </li>
                    <li>
                      Practicing femoral arterial puncture, catheter insertion
                      or blind/landmark techniques.
                    </li>
                  </ul>
                  <h5 className="mt-4">Features:</h5>
                  <ul className="round mt-2">
                    <li>
                      Anatomically correct, ultrasound compatible, body form,
                      with all relevant palpating landmarks and vascular
                      anatomy.
                    </li>
                    <li>
                      Market leading durability—self-sealing tissues and veins
                      provide the greatest value, in the frequency of needle
                      sticks and full catheterizations per access site, of any
                      trainer on the market.
                    </li>
                    <li>
                      Exceptional ultrasound imaging through repeated use—needle
                      sticks and full catheterizations do not degrade the image
                      acuity.
                    </li>
                    <li>
                      Two colors of simulated blood differentiate the arterial
                      and venous vessels—provides immediate feedback of
                      unsuccessful cannulation.
                    </li>
                    <li>
                      Arterial pulse is present and vein realistically
                      compresses under palpation.
                    </li>
                    <li>
                      Easily adjustable venous pressure regulator allows for
                      vein compression or low-pressure simulation scenarios.
                    </li>

                    <li>
                      Replaceable tissues come pre-filled with blue venous and
                      red arterial fluid. Tissues can remain filled when not in
                      use and are easy to refill with provided fluid when
                      necessary.
                    </li>
                    <li>
                      Portability—practice simulation in settings of actual
                      patient care.
                    </li>
                  </ul>
                  <h4>Components</h4>
                  <p>
                    FemoraLineMan Torso, Replaceable Tissue (FLMT-50), Vessel
                    Filling Port and Fill Line, Pulsatile Hand Pump, Venous
                    Pressure Regulator, Carrying Case, Arterial Fluid (red),
                    Venous Fluid (blue) and User’s Guide.
                  </p>
                  <h5 className="mt-4">Dimensions:</h5>
                  <ul className="round mt-2">
                    <li>Size: 18″ h; 27″ w; 8.5″ d (carrying case).</li>
                    <li>Weight: 27 lbs.</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className=" gap-6">
                  <img
                    src="/assets/img/who-we-are/image-46.jpg"
                    style={{ height: "300px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-47.jpg"
                    style={{ height: "300px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-125"
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

export default FemoraLineman;
