"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const TherapeuticAreas = () => {

  useEffect(() => {
    // Re-load the main script to initialize animations and plugins on route change
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);


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
                  <h3 className="breadcrumb1__title">Therapeutic Areas</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Therapeutic Areas </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="process1">


        <div className="content_box_120_70">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-lg-12 col_padding">
                <div className="heading1 text-center mb-60">
                  <h2 className="heading1__title mb-20">
                    Therapeutic <span>Areas!</span>
                  </h2>
                  <p> Sandor deals in the following areas that are concerned with treatment of diseases : </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6 col_padding">
                <div className="process1__item text-center">
                  <div className="process1__item_thumb">
                    <img
                      src="assets/img/working-process/Critical-Care.png"
                      alt="Working Process"
                    />
                  </div>
                  <div className="process1__item_content">
                    <h4>Critical Care</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col_padding">
                <div className="process1__item text-center">
                  <div className="process1__item_thumb">
                    <img
                      src="assets/img/working-process/Anesthesia.png"
                      alt="Anesthesia"
                    />
                  </div>
                  <div className="process1__item_content">
                    <h4>Anesthesia</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col_padding">
                <div className="process1__item text-center">
                  <div className="process1__item_thumb">
                    <img
                      src="assets/img/working-process/Pediatrics.png"
                      alt="Pediatrics"
                    />
                  </div>
                  <div className="process1__item_content">
                    <h4>Pediatrics</h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col_padding">
                <div className="process1__item text-center">
                  <div className="process1__item_thumb">
                    <img
                      src="assets/img/working-process/Neonatology.png"
                      alt="Neonatology"
                    />
                  </div>
                  <div className="process1__item_content">
                    <h4> Neonatology </h4>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6 col_padding">
                <div className="process1__item text-center">
                  <div className="process1__item_thumb">
                    <img
                      src="assets/img/working-process/Transplantation.png"
                      alt="Transplantation"
                    />
                  </div>
                  <div className="process1__item_content">
                    <h4> Transplantation </h4>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6 col_padding">
                <div className="process1__item text-center">
                  <div className="process1__item_thumb">
                    <img
                      src="assets/img/working-process/Pain-Relief.png"
                      alt="Pain Relief"
                    />
                  </div>
                  <div className="process1__item_content">
                    <h4> Pain Relief </h4>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6 col_padding">
                <div className="process1__item text-center">
                  <div className="process1__item_thumb">
                    <img
                      src="assets/img/working-process/Neurology.png"
                      alt="Neurology"
                    />
                  </div>
                  <div className="process1__item_content">
                    <h4> Neurology </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col_padding">
                <div className="process1__item text-center">
                  <div className="process1__item_thumb">
                    <img
                      src="assets/img/working-process/Cardiovascular.png"
                      alt="Cardiovascular"
                    />
                  </div>
                  <div className="process1__item_content">
                    <h4> Cardiovascular </h4>
                  </div>
                </div>
              </div>




            </div>


          </div>
        </div>
      </section>



    </>


  );

};

export default TherapeuticAreas;
