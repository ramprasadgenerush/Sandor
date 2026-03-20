"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DistributionLogistics = () => {
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
                    Distribution & Logistics
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Distribution & Logistics </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process1">
        <div className="content_box_120_70 pb-0">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-lg-12 col_padding">
                <div className="heading1 text-center mb-60">
                  <h2 className="heading1__title mb-20">
                    Distribution & <span> Logistics</span>
                  </h2>
                  <p>
                    To ferry life saving products to hospitals is the hallmark
                    of Sandor
                  </p>
                  <p>
                    {" "}
                    Reliable, efficient and secure Distribution of drugs,
                    Medical Devices, equipments and consumables across India
                    both in normal and cold chain conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter2">
        <div className="content_box_120_90 pt-0">
          <h2 className="heading1__title mb-50 bg-center text-center">
            Our <span>Company!</span>
          </h2>
          <div className="container_m container_l">
            <div className="row g-xxl-0">
              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div className="counter2__item d-flex justify-content-center align-items-center">
                  <div className="counter2__item_box text-center">
                    <h5>
                      <span className="counter">20</span>
                      <span>+</span>
                    </h5>
                    <p className="m-0">branches in India</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div className="counter2__item d-flex justify-content-center align-items-center">
                  <div className="counter2__item_box text-center">
                    <h5>
                      <span className="counter">3000</span>
                      <span>+</span>
                    </h5>
                    <p className="m-0">hospitals serviced</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div className="counter2__item d-flex justify-content-center align-items-center">
                  <div className="counter2__item_box text-center">
                    <h5>
                      <span className="counter">32000</span>
                      <span>+</span>
                    </h5>
                    <p className="m-0">annual deliveries</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-sm-6">
                <div className="counter2__item d-flex justify-content-center align-items-center">
                  <div className="counter2__item_box text-center">
                    <h5>
                      <span className="counter">150</span>
                      <span>+</span>
                    </h5>
                    <p className="m-0">
                      Vendor registrations <br /> (Govt. Institutions)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2">
        <div className="content_box_120_70 pt-0">
          <div className="container_m_40 container_l">
            <div className="row mb-40">
              <div className="col-lg-6 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Cold-Chain-Supply-Management.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-6 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title ">
                    Cold Chain <span>Supply Management</span>
                  </h2>
                  <p className="mt-4">
                    Excellence in Cold Chain movement of highly temperature
                    sensitive drugs at par with global standards. Centralized
                    continuous temperature Monitoring using VERTIQ’s – VIEWLINK
                    Software (21 CFR Part 11 compliant).
                  </p>
                  <p>
                    We use medical grade validated packaging for cold chain
                    products and ensure timely delivery to our hospitals.
                  </p>
                  {/* Site BTN */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseUs2">
        <div className="content_box_120_70 pt-0">
          <div className="container_m_40 container_l">
            <div className="row mb-30">
              <div className="col-lg-6 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title ">
                    Branch <span>Network</span>
                  </h2>
                  <p>
                    20 Branch Offices with central hub at Hyderabad and more
                    than 75 sub dealer network to cater to tier II and III
                    hospitals and patients. All branches have conventional drug
                    and Narcotic Drug Licenses for both wholesale and retail. We
                    use SAP for entire inventory and invoicing on our own VPN
                    across India and support our principles with real time sales
                    data.
                  </p>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-6 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Branch-Network.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about1">
        <div className="content_box_pob_120">
          <div className="container_m_50 container_l">
            <div className="row">
              <div className="col-xl-7">
                <div className="about1__content">
                  <div className="heading1"></div>

                  <a className="btn1">
                    Our Branches <i data-feather="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


    </>
  );
};

export default DistributionLogistics;
