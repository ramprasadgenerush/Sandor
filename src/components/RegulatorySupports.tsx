"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const RegulatorySupports = () => {
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
                    Regulatory and Custom House Functions
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Regulatory and Custom House Functions</span>
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
            <div className="row mb-lg-0 mb-4">
              <div className="col-lg-5 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb mt-lg-2 mt-4">
                  <img
                    src="/assets/img/who-we-are/Regulatory-and-Custom-House-Functions.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Regulatory and Custom <br /> <span> House Functions</span>
                  </h2>
                  <p>
                    Sandor offers complete support on regulatory front with
                    documentation and filing with the Drug Controller of India.
                  </p>
                  <p>
                    The current environment of ever increasing regulator’s
                    oversight on the pharma business needs more time and
                    resources to ensure compliance. Our experienced regulatory
                    team has the capability to ensure compliance at every step
                    of the distribution chain.
                  </p>

                  <p>
                    We can handle site registrations, indication approvals,
                    import permits, CAF Filings and all other issues related to
                    government agencies both state and federal like ICMR, DBT
                    DSIR, Ministry of Health and state Drug Authorities etc.
                  </p>
                  <p>
                    We import more than 200 shipments per annum through air
                    cargo terminals and sea ports of India. We also specialize
                    in importing under the right HSN and availing the most duty
                    benefit ensuring most economical and efficient import
                    process. The company also has the unique capability of
                    importing on Name Patient” basis
                  </p>
                  <p>
                    The company in the past has also helped get custom duty
                    reduced on many life saving products imported into India.
                  </p>
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

export default RegulatorySupports;
