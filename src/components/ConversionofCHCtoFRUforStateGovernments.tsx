"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ConversionofCHCtoFRUforStateGovernments = () => {
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
                    Conversion of CH to FRU for State Governments
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Conversion of CH to FRU for State Governments</span>
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
                    src="/assets/img/who-we-are/conversion-of-chc-to-fru-for-state-governments.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Conversion of CH to FRU <br /> <span> for State Governments</span>
                  </h2>
                  <p>
                    The primary objective of First Referral Units within any
                    State in India by redesigning, constructing, and equipping
                    existing health facilities to meet the necessary
                    infrastructure, medical equipment, and staffing
                    requirements. The FRUs will serve as intermediate healthcare
                    hubs, offering specialized medical services, emergency care,
                    and referral support for patients requiring advanced
                    treatment. Sandor has been the first in the country to
                    undertake in Meghalaya State.
                  </p>
                  <p>
                    Ministry of Health & Family welfare, Government of India has
                    identified women and child mortality during pregnancy as one
                    of the major area requiring improvement. Focus has also been
                    on expanding services for mental health, NCD management and
                    emergency care.
                  </p>
                  <p>
                    The construction and equipping of First Referral Units in
                    India will significantly contribute to the improvement of
                    healthcare services, particularly in underserved regions.
                    The FRUs will provide essential medical support and reduce
                    the burden on higher-level healthcare facilities by offering
                    specialized care closer to the community.
                  </p>
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

export default ConversionofCHCtoFRUforStateGovernments;
