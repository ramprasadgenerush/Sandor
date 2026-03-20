"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Cardiovascular = () => {

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
                  <h3 className="breadcrumb1__title"> Cardiovascular</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Cardiovascular </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="about1 mt-100">
  <div className="content_box_pob_120">
    <div className="container_m_50 container_l">
      <div className="row">
                <div className="col-xl-5 col_padding">
          <div className="about1__thumb_img3 img_100">
            <img src="assets/img/about/Cardiovascular.png" alt="About" />
          </div>
        </div>

        <div className="col-xl-7 col_padding">
          <div className="about1__content">
            <div className="heading1 mb-35">
              <h2 className="heading1__title">
                Cardiovascular
              </h2>
            </div>
            <p> Cardiovascular diseases are conditions that affect the heart and blood vessels and include arteriosclerosis, coronary artery disease, heart valve disease, arrhythmia, heart failure, hypertension, orthostatic hypotension, shock, endocarditis, diseases of the aorta and its branches, disorders of the peripheral vascular system, and congenital heart disease. Cardiovascular diseases kill an estimated 17 million people worldwide each year.
            </p>

            <p> Every open heart surgery presents the risk of complications specific to the procedure being performed, in addition to the general risks of surgery. The risks vary from one type of heart surgery to another and may be higher if the heart is stopped and blood is pumped by a cardiopulmonary bypass machine rather than by the heart during the procedure. In some cases, your level of risk can be reduced by taking proper measures like cleaning and preserving the heart properly.  </p>

            <p> We provide the following product which can play a great role as preservation and cleaning fluid during Heart surgeries: </p>

            <h5> Custodiol HTK Solution – Cardioplegia </h5>


          </div>
        </div>

      </div>
    </div>
  </div>
</section>

    </>


  );

};

export default Cardiovascular;
