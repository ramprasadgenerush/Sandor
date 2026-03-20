"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Veinus = () => {
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
                  <h3 className="breadcrumb1__title">Vei Viewer</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Vei Viewer</span>
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
                    Vei <span> Viewer</span>
                  </h5>
                  <p>
                    InfraEyes present Veinus, state of the art portable vein
                    locating device, to find the best vein for cannulation in
                    patients with no risk or side effects with minimum
                    discomfort or trauma for patients.
                  </p>

                   <h4 className="mt-4"> Advantages :</h4>

                  <ul className="round">
                    <li>Easy access to veins</li>
                    <li>Accurate puncturing in single attempt</li>
                    <li>Nil or minimal trauma for patients</li>
                    <li>
                      Saves precious time in administering life saving drugs
                    </li>
                    <li>Non invasive and portable</li>
                  </ul>

                   <h4 className="mt-4"> Patients for whom Veinus is useful :</h4>

                  <ul className="round">
                    <li>Dehydrated, collapsed, long-stay patients</li>
                    <li>
                      Patients with obesity, anemia, hypotension, or excessive
                      blood loss
                    </li>
                    <li>Children – pediatrics including neonates</li>
                    <li>
                      Patients with difficult skins – burns, difficult tones,
                      wrinkled
                    </li>
                  </ul>

                   <h4 className="mt-4"> Where would Veinus be useful? : </h4>

                  <ul className="round">
                    <li>Emergency, Casualty wards</li>
                    <li>ICUs, Operation Theatres, OPDs</li>
                    <li>Pediatrics, Geriatrics</li>
                    <li>Oncology, Urolgy (Dialysis), Phlebotomy</li>
                    <li>Pathology, Blood Banks</li>
                    <li>Medical Colleges and Nursing Schools</li>
                  </ul>

                   <h4 className="mt-4"> Features :</h4>

                  <ul className="round">
                    <li>
                      Reduced trauma to patients as they do not have to go
                      through multiple puncture attempts
                    </li>
                    <li>
                      Increased accuracy allows a better cannulation reducing
                      the risk of double puncture
                    </li>
                    <li>
                      Reduced time for the procedure as the inputs from Veinus
                      give better information as compared to the naked eye
                      vision
                    </li>
                    <li>
                      Increased productivity for the medical staff allowing them
                      to attend more patients
                    </li>
                    <li>
                      Lesser chances of infection as lesser number of attempts
                      required
                    </li>
                    <li>
                      Non-invasive operation, meaning the device does not need
                      to touch the subject or surface at all
                    </li>
                  </ul>

                  <h4 className="mt-4"> Warning :</h4>

                  <ul className="round">
                    <li>
                      Veinus should be used only by qualified medical staff.
                    </li>
                    <li>
                      Veinus should not be used to locate in or near eyes.
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
              <div className="col-lg-1"></div>
              <div className="col-lg-4 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb pe-0">
                  <img
                    src="/assets/img/who-we-are/image-09.png"
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

export default Veinus;
