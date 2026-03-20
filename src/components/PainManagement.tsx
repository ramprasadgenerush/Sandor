"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const PainManagement = () => {

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
                  <h3 className="breadcrumb1__title"> Pain Management </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Pain Management </span>
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
                  <img src="assets/img/about/Pain-Management.png" alt="About" />
                </div>
              </div>

              <div className="col-xl-7 col_padding">
                <div className="about1__content">
                  <div className="heading1 mb-35">
                    <h2 className="heading1__title">
                      Pain Management
                    </h2>
                  </div>
                  <p> <b>Pain management</b> (or pain relief) has a role in identifying the precise source of the problem and isolating the optimal treatment. Patients suffering from painful conditions need options to help treat their symptoms. The best pain control can be achieved by trying to target appropriate medications for the underlying problem, and trying to minimize pain with different medication.
                  </p>

                  <p> The treatments for chronic pain are as diverse as the causes. However, the right kind of medication depends on the intensity of pain and history of patient and accordingly the doctor may prescribe over-the-counter (OTC) drugs or opioids which can be purchased only with a presciption. </p>

                  <h5> We provide the following products for pain relief: </h5>

                  <h5 className="mt-4"> 1) Fen-Touch® </h5>

                  <p> Fen-Touch® Fentanyl Transdermal Patches are highly advanced and delivers timely only the specific dose of medication that is required. Once placed on the affected area (skin) they can deliver, in the patient’s body, the standardised doses of medication through out the day and can be used for over a period of several hours to days post application. </p>

                  <h5 className="mt-4"> 2) San Morf™® </h5>

                  <p> San Morf™ is used to relieve moderate to severe pain. San Morf™ long-acting tablets are only used by patients who are expected to need medication to relieve moderate to severe pain around-the-clock for longer than a few days. </p>


                  <h5 className="mt-4"> 3) San Fent™ </h5>

                  <p> San Fent™ is a narcotic that is used to manage pain in chronic pain sufferers, people with cancer, people with allergies to other pain medications and other pain related situations. It is 50 to 100 times more potent than San Morf™. </p>



                  <h5 className="mt-4"> 4) Bupredor™ </h5>

                  <p> Bupredor™ is indicated for the management of moderate to severe chronic pain in patients requiring a continouous, around-th-clock opioid analgesic for an extended period of time.  </p>


                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>


  );

};

export default PainManagement;
