"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SanCleanHotSterilantConcentratee = () => {
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
                    San-Clean-Hot Sterilant Concentratee
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> San-Clean-Hot Sterilant Concentratee</span>
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
                    className="heading1__title  "
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    San-Clean-Hot- <span> Sterilant Concentratee</span>
                  </h5>
                  <h5>
                    Citric Acid Based Decalcifier And Sterilant Liquid (FOR
                    EXTERNAL USE ONLY) </h5>
        
                  <div className="mt-20">
                     <h4 className="mt-4"> Composition :</h4>
                    <p>
                      Each 100g contains: Citric Acid I.P: 21%w/v Malic Acid and
                      Lactic Acid as adjuvants Purified Water I.P: q.s.
                    </p>
                  </div>
                  <h4 className="mt-4"> Overview :</h4>
                  <ul className="round">
                    <li>
                      San-Clean Hot Sterilant is used for Chemo thermal
                      disinfection of Hemodialysis machines with recirculation.
                      It can be used in any Dialysis machine.{" "}
                    </li>
                    <li>
                      It is used for descaling & decalcification of hemodialysis
                      machines.{" "}
                    </li>
                  </ul>
                  <h4 className="mt-4"> Features :</h4>
                  <ul className="round">
                    <li>Highly effective</li>
                    <li>Dissolution of blood residues</li>
                    <li>Excellent removal of CaCo3 </li>
                    <li>Disinfection and decalcification in one process</li>
                    <li>
                      Active ingredients composed of natural ingredients:
                      (Citric acid, Malic acid and Lactic acid)
                    </li>
                    <li>
                      San-Clean at 84°C has a broad spectrum of microbicidal
                      activity and works bactericidal, virus inactivating (HBV,
                      HCV, HIV) and fungicidal{" "}
                    </li>
                    <li>
                      It replaces sodium hypochlorite and formaldehyde in terms
                      of efficacy and safety.
                    </li>
                    <li>Nontoxic, Biodegradable and environment friendly </li>
                    <li>Compatible with all materials </li>
                    <li>Transparent and Odourless liquid </li>
                    <li>Free from colouring additives </li>
                  </ul>
                   <h4 className="mt-4"> Antimicrobial Activity : </h4>
                  <ul className="round">
                    <li>
                      Destruction of the phospholipid layers in the cell
                      membrane; disturbance of the intracellular pH balance{" "}
                    </li>
                    <li>
                      Activity strongly increased by an increase in temperature.{" "}
                    </li>
                    <li>
                      It is Bactericidal, Virucidal, Sporicidal and decalcifying
                      agent.{" "}
                    </li>
                    <li>
                      It kills bacteria, viruses and spores in short duration of
                      time (5 to 10 Minutes).{" "}
                    </li>
                    <li>
                      It is highly effective against hepatitis A, B viruses.{" "}
                    </li>
                  </ul>
                   <h4 className="mt-4"> Directions for use : </h4>
                  <ul className="round">
                    <li>Use undiluted in Hemodialysis machine</li>
                    <li>
                      Machine sucks predefined volume of San-Clean automatically
                      during disinfection/ sterilization cycle
                    </li>
                    <li>Machine dilutes San-Clean with water</li>
                  </ul>
                   <h4 className="mt-4"> Contact Time :</h4>
                  <ul className="round">
                    <li>For disinfection 5minutes</li>
                    <li>For Sterilization 10minutes</li>
                  </ul>
                   <h4 className="mt-4"> Package:</h4> 
                   <p> 10 Ltr Canister </p>
                  <h4 className="mt-4"> Precautions/Contraindications :</h4>
                  <ul className="round">
                    <li>Wear safety goggles & gloves while handling. </li>
                    <li>
                      Wash immediately on contact with eyes or skin and seek
                      medical help.{" "}
                    </li>
                    <li>Do not swallow. </li>
                  </ul>
                  <h4 className="mt-4"> Storage : </h4>
                  <ul className="round">
                    <li>
                      Keep container tightly sealed in an upright position at
                      room temperature.{" "}
                    </li>
                  </ul>
                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-4 col_padding order-2 order-lg-0">

                  <img
                    src="/assets/img/who-we-are/image-10.jpg"
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

export default SanCleanHotSterilantConcentratee;
