"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SimulationforTaskTrainer = () => {
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
                    Task Trainers for UG /PG Medical / Nursing Communities
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>
                        {" "}
                        Task Trainers for UG /PG Medical / Nursing Communities
                      </span>
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
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Task-Trainers1.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2
                    className="heading1__title  "
                    style={{
                      whiteSpace: "nowrap",
                      fontSize: "30px",
                      margin: 0,
                    }}
                  >
                    Task Trainers for{" "}
                    <span> UG /PG Medical / Nursing Communities</span>
                  </h2>
                  <p className="mb-40">
                    <b>Nasco Healthcare,</b> US Based, medical simulation
                    company developing manikins for over 75 years now and made
                    simulation accessible to all. From in-hospital to causality
                    and rescue scenarios Nasco Healthcare simulation in
                    healthcare solutions prepare frontline healthcare workers to
                    BE READY. From Low to High Fidelity one can find the right
                    training solution for current and future need with over 6000
                    products to offer. Every product is rugged, reliable and
                    hyper-realistic, 100% hand made in the USA, Compliant to
                    healthcare regulations and covered unto 5 years warranty
                    with easily upgrade-able and replaceable parts.
                  </p>

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
                    Task Trainers for
                    <br className="d-none d-lg-inline-block" />
                    <span>UG /PG Medical / Nursing / Community Parts</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-30.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social ">
                      <ul>
                        <li>
                          <Link href="/gaumard" className="w-100 px-4">
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/gaumard">gaumard</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-31.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social">
                      <ul>
                        <li>
                          <Link href="/truecorp" className="w-100 px-4">
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/truecorp">True Corp</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-32.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social">
                      <ul>
                        <li>
                          <Link href="/simulab" className="w-100 px-4">
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/simulab">Simulab</Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-33.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social">
                      <ul>
                        <li>
                          <Link href="/preston" className="w-100 px-4">
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/preston">Preston</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-md-6 col_padding">
                <div className="doctors2__item mb-0">
                  <div className="doctors2__item_thumb">
                    <img
                      src="/assets/img/who-we-are/image-34.jpg"
                      alt="Image"
                      className="rounded-4"
                    />
                    <div className="doctors2__item_thumb_social ">
                      <ul>
                        <li>
                          <Link href="/innosonian" className="w-100 px-4">
                            Click Here
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doctors2__item_content text-center">
                    <h3>
                      <Link href="/innosonian">Innosonian</Link>
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

export default SimulationforTaskTrainer;
