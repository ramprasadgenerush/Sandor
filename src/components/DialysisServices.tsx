"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DialysisServices = () => {
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
                  <h3 className="breadcrumb1__title">Dialysis Services</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Dialysis Services</span>
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
              <div className="col-lg-6 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Dialysis-Services.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-6 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Dialysis <span>Services</span>
                  </h2>
                  <p>
                    The company also operates two large dialysis centers in
                    Bangladesh under a Public Private Partnership with
                    Government of Bangladesh operating about 90 machines in
                    Dhaka and Chittagong.
                  </p>
                  <p>More info….</p>
                  {/* <p>http://www.sandordialysis.com.bd/services.html#</p> */}

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

export default DialysisServices;
