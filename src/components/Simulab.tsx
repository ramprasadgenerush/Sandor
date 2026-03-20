"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Simulab = () => {
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
                  <h3 className="breadcrumb1__title">Simulab Task Trainers</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Simulab Task Trainers</span>
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
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Simulation-Lab-Services.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Simulab <span>Task Trainers</span>
                  </h2>
                  <p>
                    Simulab task trainers are known for exceptional realism and
                    tactile feedback, particularly in procedural disciplines
                    such as central line insertion, surgical skills, and trauma
                    interventions. These trainers support competency-based
                    learning by allowing repeated practice in lifelike
                    scenarios, reinforcing proper technique and improving
                    clinical outcomes.
                  </p>

                  {/* <p>http://www.sandordialysis.com.bd/services.html#</p> */}

                  {/* Site BTN */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doctors2">
        <div className="content_box_120_70 ">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="heading1 text-center mb-60">
                  <h2 className="heading1__title">
                    Simulab
                    <br className="d-none d-lg-inline-block" />
                    <span>Task Trainers</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item bg-white p-4 rounded-4">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-52.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social ">
                      <ul>
                        <li>
                          <Link href="/picclineman" className="w-100 px-4">
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/picclineman">Picc Lineman</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item bg-white p-4 rounded-4">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-48.png"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social">
                      <ul>
                        <li>
                          <Link href="/central-lineman" className="w-100 px-4">
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/central-lineman">Central Lineman</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item bg-white p-4 rounded-4">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-46.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social">
                      <ul>
                        <li>
                          <Link href="/femoral-lineman" className="w-100 px-4">
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/femoral-lineman">Femoral Lineman</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item bg-white p-4 rounded-4">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-56.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social">
                      <ul>
                        <li>
                          <Link
                            href="/arterial-line-man"
                            className="w-100 px-4"
                          >
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/arterial-line-man">Arterial Line Man</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item bg-white p-4 rounded-4">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-60.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social ">
                      <ul>
                        <li>
                          <Link
                            href="/lumbar-puncture-epidural"
                            className="w-100 px-4"
                          >
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/lumbar-puncture-epidural">
                        Lumbar Puncture Epidural
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item bg-white p-4 rounded-4">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-62.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social">
                      <ul>
                        <li>
                          <Link
                            href="/regional-anesthesia"
                            className="w-100 px-4"
                          >
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/regional-anesthesia">
                        Regional Anesthesia
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item bg-white p-4 rounded-4">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-3.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social">
                      <ul>
                        <li>
                          <Link
                            href="/paracentesis-trainer"
                            className="w-100 px-4"
                          >
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/paracentesis-trainer">
                        Paracentesis Trainer
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Simulab;
