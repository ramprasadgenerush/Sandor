"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const BloodProducts = () => {
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
                  <h3 className="breadcrumb1__title">Blood Products</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Blood Products</span>
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
              <div className="col-lg-4 col_padding">
                <div>
                  <h6
                    className="heading1__title "
                    style={{
                      fontSize: "40px",
                    }}
                  >
                    Blood <span>Products</span>
                  </h6>

                  <ul className="icon-list mt-4">
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                      <span className="fs-5"> Sanbumin™ </span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                   <span className="fs-5"> Sanglobulin™ </span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                      <span className="fs-5"> Sanfib™ </span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                     <span className="fs-5"> Hemodor™ </span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                     <span className="fs-5"> Hemodor VIII™ </span>
                    </li>
                  </ul>




                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-6 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Blood-Products.jpg"
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

export default BloodProducts;
