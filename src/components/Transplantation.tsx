"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Transplantation = () => {

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
                  <h3 className="breadcrumb1__title"> Transplantation </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Transplantation </span>
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
            <img src="assets/img/about/Transplantation.png" alt="About" />
          </div>
        </div>

        <div className="col-xl-7 col_padding">
          <div className="about1__content">
            <div className="heading1 mb-35">
              <h2 className="heading1__title">
                Transplantation
              </h2>
            </div>
            <p>
            For many doctors, nurses, and the general public the term life support calls up the image of a ventilator. However, there are many types of life support one of them being organ transplants. As with any other type of life support, organ transplantation comes with its share of problems.
            </p>

            <p>Forty years ago, many people died because doctors could not successfully complete a transplant and prevent rejection of the new organ. The knowledge of anti-rejection drugs was limited, and the surgery involved was extremely difficult. Today, science has made improvement in the field of transplantation to the point that most transplant operations are considered low risk. The success rate is high for kidney transplants, liver transplants, cornea transplants, and even heart and lung transplants. </p>

            <p> India boasts of a healthcare sector growing at over 15 per cent annually but it is still far away from catering to patients requiring organ transplants. According to doctors and industry experts, the healthcare sector currently generates around Rs 500 crore of annual revenue from organ transplants, against a potential of at least Rs 5,000 crore. In other words, organ transplantation is accessible to just a tenth of the patients who need it. </p>

            <p> Organ transplantation can be life saving and there is a strong need to make medical products and devices of highest quality available to health care providers in India and enable them to perform successful transplantations. </p>
            <p> We provide the following product which can play a great role as preservation and transplant fluid during organ transplantations : </p>

           <h5 className="mt-4"> Custodiol HTK Solution – Multi Organ Transplantation </h5>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

    </>


  );

};

export default Transplantation;
