"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Sansteril = () => {
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
                  <h3 className="breadcrumb1__title">Sansteril</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Sansteril</span>
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
                    Sansteril – Cold Sterilant Concentrate{" "}
                    <span> for Dialyzer Reprocessing</span>
                  </h6>
                  <p>
                    Sansteril has been manufactured in India with the highest
                    quality manufacturing standards and is the perfect cold
                    sterilant for Dialyzer Reprocessing. Sansteril can be used
                    on any automatic reprocessing system including the Renatron
                    II Dialyzer Reprocessing system. It is the most effective
                    cold sterilant which kills all bacteria, viruses and
                    microbial pathogens in the Dialyzer after use.
                  </p>
                  <p>
                    The product is made up of a tried and tested combination of
                    Hydrogen Peroxide, Paracetic Acid and Inert dilutants to
                    make up the best cold sterilant for Dialyser Reprocessing.
                  </p>

                  <ul className="round">
                    <li>
                      Sansteril is non carcinogenic and breaks down into
                      environmentally safe by-products like acetic acid, oxygen
                      and water.{" "}
                    </li>
                    <li>Sansteril does not form any kind of antibodies </li>
                    <li>
                      Sansteril is triple action sterilant where it cleans,
                      disinfects and sterilizes the Dialyzer resulting in higher
                      reuse.{" "}
                    </li>
                    <li>
                      Optimum storage in Sansteril is 12 hours during which time
                      all harmful pathogens would be dead.{" "}
                    </li>
                    <li>
                      Sansteril can also improve the biocompatibility of the
                      dialyzer after reuse with Sansteril
                    </li>
                    <li>
                      Optimum storage in Sansteril is 12 hours during which time
                      all harmful pathogens would be dead.{" "}
                    </li>
                    <li>
                      Sansteril is most effective agent for cleaning the narrow
                      pores of the hollow fibers of the dialyzer
                    </li>
                  </ul>

                  {/* Site BTN */}
                </div>
              </div>

              <div className="col-lg-4 col_padding order-2 order-lg-0">
                 
                  <img
                    src="/assets/img/who-we-are/image-11.jpg"
                    alt="Image"
                    className="rounded-4 float-end"
                  />
          
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sansteril;
