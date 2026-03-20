"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SalesMarketing = () => {
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
                  <h3 className="breadcrumb1__title">Sales & Marketing</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Sales & Marketing </span>
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
            <div className="row mb-80">
              <div className="col-lg-6 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/Sales-Marketing.jpg"
                    alt="Image"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-6 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-30">
                    Sales & <span>Marketing</span>
                  </h2>
                  <p>
                    Since most of our clients operate outside India and do not
                    have any branches in India, it becomes mandatory for us to
                    provide services to them in the field of sales and
                    marketing.
                  </p>
                  <p>
                    To establsih their foothold in India, they need to sell
                    their products through experienced people who can make their
                    product available in each and every corner of the country.
                    We have a highly professional & trained team which
                    undertakes the marketing or survey activity for partners and
                    which is also responsible for creating a market for their
                    products.
                  </p>

                  <p>
                    With this service, our clients need not worrry about the
                    daily sales of thier products and the revenue generation
                    from it.
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

export default SalesMarketing;
