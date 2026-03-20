"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SanCathHemodialysisCatheterCatheterKit = () => {
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
                    San-Cath | HAEMODIALYSIS CATHETER KIT
                  </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>San-Cath | HAEMODIALYSIS CATHETER KIT</span>
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
              <div className="col-lg-8 col_padding">
                <div>
                  <h6
                    className="heading1__title mb-4 fs-1 lh-sm">
                    San-Cath | <span> HAEMODIALYSIS CATHETER KIT</span>
                  </h6>
                  <p className="mb-20">
                    Premium Catheter, manufactured with FDA approved USP VI
                    compliant material, end to end. A HDC matching International
                    standards, manufactured as part of Make in India initiative.
                  </p>

                  <ul className="round">
                    <li>
                      Double -lumen catheter : Made completely with USP VI
                      compliant TPU that has indwelling softening
                      characteristics
                    </li>
                    <li>Extra-soft Catheter Tip </li>
                    <li>
                      Non-irritating Soft Junction Hub-wing for maximum patient
                      comfort in prolonged use
                    </li>
                    <li>Radiopaque lumen and tip</li>
                    <li>Non- kinking extension lines</li>
                    <li>Effective pinch Clamps for total flow-control</li>
                    <li>Color-coded Luer locks with Injection site Caps</li>
                    <li>
                      Soft Protruding, adjustable Fixation Wing for
                      stitch-fixation at the puncture site
                    </li>
                    <li>
                      Kink-poof Nitinol core spring guidewire with flexible
                      J-tip
                    </li>
                    <li>Luer-Lock syringe</li>
                    <li>Introducer Needle, Scalpel, Dilator, etc.</li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>
              <div className="col-lg-4 col_padding order-2 order-lg-0">
                <div className="whyChooseUs2__thumb">
                  <img
                    src="/assets/img/who-we-are/image-12.jpg"
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

export default SanCathHemodialysisCatheterCatheterKit;
