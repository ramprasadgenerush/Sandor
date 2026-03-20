"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CentralLineman = () => {
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
                  <h3 className="breadcrumb1__title">Central Lineman</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Central Lineman</span>
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
                    Central <span> Lineman</span>
                  </h5>
                  <h4>
                    Experience Central Line Training at its Best, with the Most
                    Widely Used Ultrasound CVC Training Models
                  </h4>
                  <p className="mt-2">
                    <b>CentraLineMan®</b> is an anatomically correct, clinically
                    relevant Central Venous Catheterization training solution
                    that now comes with time-tested, ultrasound compatible
                    tissue variations so life-like you can feel the palpable
                    differences.
                  </p>
                  <p>
                    CentraLineMan is the most widely used Central Venous
                    Catheterization training solution in the market today. This
                    flexible system offers unsurpassed value with clinically
                    relevant anatomy, time-tested ultrasound compatible tissues,
                    with market leading durability from needle sticks to full
                    catheterizations; all with the ability to interchange the
                    Articulating Head, Body Form Base, and Tissues with many of
                    Simulab’s other procedural task trainers.
                  </p>
                  <p>
                    Investing in CentraLineMan and any of Simulab’s other
                    products comes with the guarantee of receiving exceptional
                    customer service, visibility, and support for product
                    upgrades and the comfort of “no customer being left behind”
                    as we keep pace with technological advancements.
                  </p>
                  <h5>Clinically Relevant Anatomy :</h5>
                  <p>
                    CentraLineMan features clinically relevant landmarks and
                    anatomy; learners can practice performing full venous
                    catheterization using ultrasound-guided or blind/landmark
                    insertion approaches at the subclavian, supraclavicular, and
                    internal jugular vein sites. CentraLineMan includes also
                    includes accurate internal and external landmarks that are
                    palpable and or visible under ultrasound. These include:
                  </p>
                  <ul className="round mt-2">
                    <li>Upper torso and neck.</li>
                    <li>Trachea.</li>
                    <li>Sternal notch.</li>
                    <li>Sternocleidomastoid muscle.</li>
                    <li>
                      Sternal and clavicular heads of the sternocleidomastoid
                      muscle.
                    </li>
                    <li>Manubrium.</li>
                    <li>Lateral border of the first rib.</li>
                    <li>Superior vena cava.</li>
                    <li>Upper Lung.</li>
                    <li>
                      Vascular Anatomy including the External Jugular,
                      Subclavian, and Brachiocephalic Veins; Carotid and
                      Subclavian and Brachiocephalic Veins; Carotid and
                      Subclavian artery.
                    </li>
                  </ul>
                  <h5 className="mt-4">Skill Development:</h5>
                  <ul className="round mt-2">
                    <li>
                      Practice full central venous catheterization using
                      ultrasound guided or blind/landmark insertion approaches
                      at the subclavian, supraclavicular, and internal jugular
                      access sites.
                    </li>
                    <li>
                      Practice placing the patient in the appropriate position
                      per access site standards.
                    </li>
                    <li>
                      Gain experience in identifying and selecting appropriate
                      access site based on patient anatomical variations.
                    </li>
                    <li>
                      Practice use of ultrasound for Developing psychomotor
                      skills required for obtaining visualization during
                      cannulation.
                    </li>
                    <li>Detecting anatomical variations.</li>
                    <li>Distinguishing vessels.</li>
                    <li>Visualizing arterial pulse and venous compression.</li>
                    <li>
                      Identifying the anatomical location of the target vessel.
                    </li>
                    <li>
                      Visualizing needle cannulation of the target vessel in
                      transverse view.
                    </li>
                    <li>
                      Visualize threading of guidewire in longitudinal axis
                      view.
                    </li>
                    <li>
                      Reducing the rate of mechanical complications due to
                      anatomical variances such as pneumothorax or arterial
                      puncture.
                    </li>
                    <li>
                      Improving first cannulation success and decreasing needle
                      passes.
                    </li>
                    <li>
                      Practice palpating external landmarks to identify vessel
                      location.
                    </li>
                    <li>
                      Practice identifying unsuccessful vessel access by fluid
                      feedback representing arterial puncture.
                    </li>
                  </ul>
                  <h5 className="mt-4">Components:</h5>
                  <ul className="round mt-2">
                    <li>CentraLineMan Torso.</li>
                    <li>Replaceable Tissue (CLMT-50).</li>
                    <li>Vessel Filling Port.</li>
                    <li>Fill Line.</li>
                    <li>Pulse – Hand Pump.</li>
                    <li>Venous Pressure Regulator.</li>

                    <li>Carrying Case.</li>
                    <li>Arterial Fluid (red).</li>
                    <li>Venous Fluid (blue).</li>
                    <li>User’s Guide.</li>
                  </ul>

                  <h5 className="mt-4">Dimensions:</h5>
                  <ul className="round mt-2">
                    <li>Size: 18″ h; 27″ w; 8.5″ d (carrying case).</li>
                    <li>Weight: 27 lbs.</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="gap-6">
                  <img
                    src="/assets/img/who-we-are/image-48.png"
                    style={{ height: "280px" }}
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-49.jpg"
                    alt="Image"
                    className="rounded-4 mx-auto mt-125"
                  />
                  <img
                    src="/assets/img/who-we-are/image-50.jpg"
                    alt="Image"
                    className="rounded-4 mx-auto mt-5"
                  />
                  <img
                    src="/assets/img/who-we-are/image-51.jpg"
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

export default CentralLineman;
