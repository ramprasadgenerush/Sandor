"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Accula = () => {




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
                  <h3 className="breadcrumb1__title">Accula</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Accula</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about1 mt-5">
        <div className="content_box_pob_120 pb-5">
          <div className="container_m_50 container_l">
            <div className="row">
              <div className="col-xl-7 col_padding">
                <div className="about1__content">
                  <div className="heading1 mb-35">
                    {/* <h4 className="heading1__subtitle mb-10">About The Medidoc</h4> */}
                    <h2 className="heading1__title mt-2">
                      Accula SARS-CoV-2 Test
                    </h2>
                  </div>

                  <ul>
                    <li>
                      <img src="/assets/img/png-icon/check-mark.png" alt="About" className="mr-10 mt-1" />
                      <span> Easy-to-use, uniquely rapid diagnostic solution amalgamates the efficiency of RT-PCR with the simplicity, ease, and procedural knowledge of conventional rapid immunoassays. </span>
                    </li>
                    <li>
                      <img src="/assets/img/png-icon/check-mark.png" alt="About" className="mr-10 mt-1" />
                      <span>The Accula System from Thermo Fisher Scientific has received Emergency Use Authorization from the FDA for SARS-CoV-2 detection in Clinical laboratory improvement amendments- waived environments.</span>
                    </li>
                    <li>
                      <img src="/assets/img/png-icon/check-mark.png" alt="About" className="mr-10 mt-1" />
                      <span>
                        The compact Accula Dock provides assists with reliable and qualitative results in no time.
                      </span>
                    </li>
                  </ul>


                </div>
              </div>
              <div className="col-xl-5 col_padding">
                <div className="about1__thumb_img3 img_100">
                  <img src="/assets/img/about/Accula-SARS-CoV-2.jpg" alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="service3">
        <div className="content_box_120_70">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="heading1 mb-60">
                  <h2 className="heading1__title fs-1">
                    How regular testing <span>works?</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-md-6 col_padding">
                <div className="service3__item p-4">
                  <div className="service3__item_content">
                    <h4 className="mt-10">
                      <a>Person with symptoms!</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6 col_padding">
                <div className="service3__item p-4">
                  <div className="service3__item_content">
                    <h4 className="mt-10">
                      <a>
                        Consultation from family doctor</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-md-6 col_padding">
                <div className="service3__item p-4">
                  <div className="service3__item_content">
                    <h4 className="mt-10">
                      <a>Get Tested</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col_padding">
                <div className="service3__item p-4">
                  <div className="service3__item_content">
                    <h4 className="mt-10">
                      <a> Result in 48 hours </a>
                    </h4>
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
                <div className="heading1 mb-60">
                  <h2 className="heading1__title fs-1">
                    The 30 minutes game <span>changer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-md-6 col_padding">
                <div className="service3__item p-4">
                  <div className="service3__item_content">
                    <h4 className="mt-10">
                      <a>RT-PCR test in 30 minutes</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col_padding">
                <div className="service3__item p-4">
                  <div className="service3__item_content">
                    <h4 className="mt-10">
                      <a>
                        Palm-sized, compact design</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col_padding">
                <div className="service3__item p-4">
                  <div className="service3__item_content">
                    <h4 className="mt-10">
                      <a>Simple sample collection</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col_padding">
                <div className="service3__item p-4">
                  <div className="service3__item_content">
                    <h4 className="mt-10">
                      <a> Easy storage at room temp </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service3">
        <div className="content_box_pob_120 pb-5 pt-100">
          <div className="container_m_50 container_l">
            <div className="row">
              <div className="col-xl-7 col_padding">
                <div className="about1__content">
                  <div className="heading1 mb-35">
                    {/* <h4 className="heading1__subtitle mb-10">About The Medidoc</h4> */}
                    <h2 className="heading1__title mt-2 fs-1">
                      What makes Accula Dock stand out?
                    </h2>
                  </div>

                  <ul>
                    <li>
                      <img src="/assets/img/png-icon/check-mark.png" alt="About" className="mr-10 mt-1" />
                      <span> Instant screening </span>
                    </li>
                    <li>
                      <img src="/assets/img/png-icon/check-mark.png" alt="About" className="mr-10 mt-1" />
                      <span> Faster than regular RT-PCR </span>
                    </li>
                    <li>
                      <img src="/assets/img/png-icon/check-mark.png" alt="About" className="mr-10 mt-1" />
                      <span>
                        Approved by FDA
                      </span>
                    </li>
                    <li>
                      <img src="/assets/img/png-icon/check-mark.png" alt="About" className="mr-10 mt-1" />
                      <span>
                        Easy operation
                      </span>
                    </li>
                    <li>
                      <img src="/assets/img/png-icon/check-mark.png" alt="About" className="mr-10 mt-1" />
                      <span>
                        No dedicated storage or transportation equipment required
                      </span>
                    </li>
                  </ul>


                </div>
              </div>
              <div className="col-xl-5 col_padding">
                <div className="about1__thumb_img3 img_100">
                  <img src="/assets/img/about/Instant-screening.jpg" alt="About" />
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-xl-12 col_padding text-center">
                <h4 className="text-primary"> “Getting tested for COVID-19 is the key to get back to normal” </h4>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>


  );

};

export default Accula;
