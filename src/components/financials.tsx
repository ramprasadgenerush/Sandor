"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Financials = () => {




  return (

    <>

      <section
        className="breadcrumb1"
        style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-01.png)" }}
      >
        <div className="breadcrumb1__padding">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="breadcrumb1__content text-center">
                  <h3 className="breadcrumb1__title">Financials</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Financials</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="service3 bg-white">
        <div className="content_box_120_70">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="heading1 mb-30">
                  <h2 className="heading1__title fs-1">
                    Annual  <span>Reports</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="process2__item">
                  <div className="process2__item_thumb">
                    <img src="assets/img/png-icon/pdf.png" alt="Image" />
                    <span>01</span>
                  </div>
                  <div className="process2__item_content">
                    <h5 className="fs-4">Financial Year 2017-18</h5>
                  </div>

                  <a className="btn1 mt-45 fs-6 fw-light py-2">
                    Discover More <i className="fa fa-download ms-3"></i>
                  </a>

                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="process2__item">
                  <div className="process2__item_thumb">
                    <img src="assets/img/png-icon/pdf.png" alt="Image" />
                    <span>02</span>
                  </div>
                  <div className="process2__item_content">
                    <h5 className="fs-4">Financial Year 2016-17</h5>
                  </div>
                  <a className="btn1 mt-45 fs-6 fw-light py-2">
                    Discover More <i className="fa fa-download ms-3"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="process2__item">
                  <div className="process2__item_thumb">
                    <img src="assets/img/png-icon/pdf.png" alt="Image" />
                    <span>03</span>
                  </div>
                  <div className="process2__item_content">
                    <h5 className="fs-4">Financial Year 2015-16 </h5>
                  </div>
                  <a className="btn1 mt-45 fs-6 fw-light py-2">
                    Discover More <i className="fa fa-download ms-3"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="process2__item">
                  <div className="process2__item_thumb">
                    <img src="assets/img/png-icon/pdf.png" alt="Image" />
                    <span>04</span>
                  </div>
                  <div className="process2__item_content">
                    <h5 className="fs-4">Financial Year 2014-15 </h5>
                  </div>
                  <a className="btn1 mt-45 fs-6 fw-light py-2">
                    Discover More <i className="fa fa-download ms-3"></i>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>




    </>


  );

};

export default Financials;
