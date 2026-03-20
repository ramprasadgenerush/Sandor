"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const GroupCompanies = () => {

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
                  <h3 className="breadcrumb1__title"> Group Companies</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Group Companies </span>
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
                  <img src="assets/img/about/Sandor-Medicaids.png" alt="About" />
                </div>
              </div>

              <div className="col-xl-7 col_padding">
                <div className="about1__content">
                  <div className="heading1 mb-35">
                    <h2 className="heading1__title mb-3"> Sandor Medicaids </h2>
                    <p> Sandor Medicaids Pvt. Ltd. is a medical device and drugs marketing & distribution firm. Since its inception in 1995 in Hyderabad, the company has focused on making high-tech biomedical and biotechnology products accessible to patients in India. Sandor is recognized as a pioneer in bringing the “Point of Care” concept to India in 1996 in partnership with a leading Global Healthcare Company who was then searching for a local partner for distribution of their product.
                    </p>

                    <p> In early 2000’s, we built a national level distribution network together with cold chain facilities covering most of India. Our innovative logistics solutions support manufacturers in the medical devices and hospital supplies industries that look for a temperature sensitive environment for their products. </p>

                    <p> A sub-network of 20 distribution centers ably supports Sandor’s existing efficient and effective Cold Chain Distribution Network. The entire network is centrally monitored from the Sandor Head Office at Hyderabad.  </p>

                    <p> Over the last decade, we have expanded our presence in hospitals and specialities by introducing additional products and field force. Our marketing and distribution team are professionals with experience in most reputed Health Care Organizations across the country. They ensure the products of our partners reach the customers at the Right Time, to the Right Place, in the Right Form and for the Right Price. </p>

                  </div>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col_padding">
                <p> We also offer Regulatory services to manufacturers of medical device, drugs and Hospital supplies. </p>

                <p> With a firm foothold in the Indian medical business, Sandor has built good inroads in the hospital system. Sandor is the only reputable name in the organized sector in India as of today, and stands as a full fledged one-stop-shop for any multinational firm interested in launching its products in Indian market. </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about1">
        <div className="content_box_pob_120">
          <div className="container_m_50 container_l">
            <div className="row">

              <div className="col-xl-7 col_padding">
                <div className="about1__content">
                  <div className="heading1 mb-35">
                    <h2 className="heading1__title mb-3"> Sandor Lifesciences </h2>

                    <p>To further the company’s goals in making healthcare accessible to patients at affordable rates with the highest level of efficacy, Sandor ventured into clinical research. Sandor Lifesciences, the state of the art laboratory, was established in 2007 to focus on development of biomarkers and molecular diagnostics leading to personalized medicine. Our team of highly qualified and experienced scientists, well reputed clinicians and researchers working in India and abroad, is fully committed to provide the most reliable services.</p>
                    <p>With its high-end laboratory and logistics capabilities, Sandor has become a major resource base for a variety of scientific research which may be undertaken in India and may need a central testing facility. As a Third Party Service Provider, we assist Scientists from both academia and industry in their cutting edge research requiring advanced Genomics, Proteomics, Cell biology, and Biochemistry Applications. The company is also a provider of trained scientists and research assistants to The Center for DNA Fingerprinting and Diagnostics, a premier research institute of India’s Department of Biotechnology.</p>
                    <p>We also solve the regulatory challenges for pharmaceutical and diagnostic companies by providing consulting services and turnkey solutions in the areas of Clinical and Agriculture research as well as in interactions with Regulatory Authorities governing medical products in India.</p>
                    <p>Sandor is an ideal partner for any major biotech company planning to explore or enter India’s rapidly growing Medical and Contract Research industry.</p>
                    <p>To know more about us, please visit www.sandorlifesciences.co.in</p>

                  </div>
                </div>

              </div>

              <div className="col-xl-5 col_padding">
                <div className="about1__thumb_img3 img_100">
                  <img src="assets/img/about/Sandor-Lifesciences.png" alt="About" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>



    </>


  );

};

export default GroupCompanies;
