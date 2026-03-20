"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Products = () => {
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
                  <h3 className="breadcrumb1__title">products</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>products</span>
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
              <div className="col-lg-6 col_padding">
                <div className="heading1">
                  <h5 className="heading1__title ">
                    <span> products</span>
                  </h5>

                  <h3 className="mb-4" style={{ fontWeight: "bold" }}>
                    Our product portfolio includes the following:
                  </h3>

                  <ul className="round" style={{ fontSize: "20px" }}>
                    <li>POCT (Point of Care Technology) Devices</li>
                    <li>Reprocessing Devices</li>
                    <li>Speciality Devices</li>
                    <li>Transdermal Drugs</li>
                    <li>Conventional Drugs</li>
                    <li>Perfusion Fluids</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
