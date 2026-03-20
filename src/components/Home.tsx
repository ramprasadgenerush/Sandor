<<<<<<< HEAD
"use client";
=======
"use client"
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
<<<<<<< HEAD
=======

>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
  // useEffect(() => {
  //   // Re-load the main script to initialize animations and plugins on route change
  //   const script = document.createElement("script");
  //   script.src = "/assets/js/script.js";
  //   script.src = "/assets/js/main-slider-script.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup the script when the component unmounts
  //     document.body.removeChild(script);
  //   };
  // }, []);

<<<<<<< HEAD
  useEffect(() => {
    const scripts = ["/assets/js/main.js", "/assets/js/script1.js"];
=======

  useEffect(() => {
    const scripts = [
      "/assets/js/main.js",
      "/assets/js/script1.js",
    ];
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5

    const elements = scripts.map((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
      return s;
    });

    return () => {
<<<<<<< HEAD
      elements.forEach((el) => document.body.removeChild(el));
    };
  }, []);

  return (
    <>
      <section className="slider1">
        <div className="slider1__shape">
          <img src="/assets/img/png-icon/png-icon-05.png" alt="Image" />
          <span>Next Slider</span>
        </div>
        <div
          className="slider1__wrapper"
          style={{
            backgroundImage: "url(/assets/img/slider/slider-01.jpg)",
            height: "710px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="slider1__active owl-carousel owl-theme">
            <div
              style={{
                backgroundImage: "url(/assets/img/slider/slider-01.jpg)",
              }}
=======
      elements.forEach(el => document.body.removeChild(el));
    };
  }, []);


  return (

    <>

      <section className="slider1">
        <div className="slider1__shape">
          <Image src="/assets/img/png-icon/png-icon-05.png" alt="Image" />
          <span>Next Slider</span>
        </div>
        <div className="slider1__wrapper">
          <div className="slider1__active owl-carousel owl-theme">
            <div
              style={{ backgroundImage: "url(/assets/img/slider/slider-01.jpg)" }}
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
              className="slider1__item slider1__height d-flex align-items-center justify-content-center"
            >
              <div className="container_m container_l">
                <div className="row">
                  <div className="col-xl-10 offset-xl-1 col_padding">
                    <div className="slider1__content text-center">
                      <div className="mb-10 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".2s"
                          data-duration=".4s"
                          className="animated fadeInUp"
                        >
                          <h4 className="slider1__content_subtitle">
<<<<<<< HEAD
                            <Link href="/">
                              <i
                                data-feather="arrow-up-right"
                                className="float-start mt-1"
                              />{" "}
                              Maintaining Quality and Safety
=======
                            <Link href="/home">
                              <i data-feather="arrow-up-right" className="float-start mt-1" /> Maintaining Quality and Safety
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                            </Link>
                          </h4>
                        </div>
                      </div>
                      <div className="mb-25 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".5s"
                          data-duration=".4s"
                          className="animated fadeInUp"
                        >
                          <h2 className="slider1__content_title">
                            Via Cold Chain
                            <span> Management </span>
                          </h2>
                        </div>
                      </div>
                      <div className="pb-35 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".4s"
                          data-duration=".8s"
                          className="animated fadeInUp"
                        >
                          <div className="main_btn">
                            {/* Site BTN */}
<<<<<<< HEAD
                            <Link href="/about" className="btn1 mt-15">
                              Read More{" "}
                              <i
                                data-feather="arrow-right"
                                className="float-end mt-1"
                              />
=======
                            <Link href="/home" className="btn1 mt-15">
                              Discover More <i data-feather="arrow-right" className="float-end mt-1" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
<<<<<<< HEAD
              style={{
                backgroundImage: "url(/assets/img/slider/slider-02.jpg)",
              }}
=======
              style={{ backgroundImage: "url(/assets/img/slider/slider-02.jpg)" }}
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
              className="slider1__item slider1__height d-flex align-items-center justify-content-center"
            >
              <div className="container_m container_l">
                <div className="row">
                  <div className="col-xl-10 offset-xl-1 col_padding">
                    <div className="slider1__content text-center">
                      <div className="mb-10 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".2s"
                          data-duration=".4s"
                          className="animated fadeInUp"
                        >
                          <h4 className="slider1__content_subtitle">
<<<<<<< HEAD
                            <Link href="/">
                              <i
                                data-feather="arrow-up-right"
                                className="float-start mt-1"
                              />{" "}
                              Licensed, Distribution-Driven Network To make
=======
                            <Link href="/home">
                              <i data-feather="arrow-up-right" className="float-start mt-1" /> Licensed, Distribution-Driven Network To make
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                            </Link>
                          </h4>
                        </div>
                      </div>
                      <div className="mb-25 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".5s"
                          data-duration=".4s"
                          className="animated fadeInUp"
                        >
                          <h2 className="slider1__content_title">
                            Narcotic Drugs
                            <span> Accessible</span>
                          </h2>
                        </div>
                      </div>
                      <div className="pb-35 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".4s"
                          data-duration=".8s"
                          className="animated fadeInUp"
                        >
                          <div className="main_btn">
                            {/* Site BTN */}
<<<<<<< HEAD
                            <Link href="/about" className="btn1 mt-15">
                              Read More{" "}
                              <i
                                data-feather="arrow-right"
                                className="float-end mt-1"
                              />
                            </Link>
=======
                            <Link href="/home" className="btn1 mt-15">
                              Discover More <i data-feather="arrow-right" className="float-end mt-1" />
                            </Link>

>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
<<<<<<< HEAD
              style={{
                backgroundImage: "url(/assets/img/slider/slider-03.jpg)",
              }}
=======
              style={{ backgroundImage: "url(/assets/img/slider/slider-03.jpg)" }}
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
              className="slider1__item slider1__height d-flex align-items-center justify-content-center"
            >
              <div className="container_m container_l">
                <div className="row">
                  <div className="col-xl-10 offset-xl-1 col_padding">
                    <div className="slider1__content text-center">
                      <div className="mb-10 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".2s"
                          data-duration=".4s"
                          className="animated fadeInUp"
                        >
                          <h4 className="slider1__content_subtitle">
<<<<<<< HEAD
                            <Link href="/about">
                              <i
                                data-feather="arrow-up-right"
                                className="float-start mt-1"
                              />{" "}
                              Leading The Fight
=======
                            <Link href="/home">
                              <i data-feather="arrow-up-right" className="float-start mt-1" /> Leading The Fight
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                            </Link>
                          </h4>
                        </div>
                      </div>
                      <div className="mb-25 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".5s"
                          data-duration=".4s"
                          className="animated fadeInUp"
                        >
                          <h2 className="slider1__content_title">
<<<<<<< HEAD
                            Advancing Healthcare
                            <span> Across India</span>
=======
                            Against
                            <span> Covid-19</span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                          </h2>
                        </div>
                      </div>
                      <div className="pb-35 fix">
                        <div
                          data-animation="fadeInUp"
                          data-delay=".4s"
                          data-duration=".8s"
                          className="animated fadeInUp"
                        >
                          <div className="main_btn">
                            {/* Site BTN */}
<<<<<<< HEAD
                            <Link href="/about" className="btn1 mt-15">
                              Read More{" "}
                              <i
                                data-feather="arrow-right"
                                className="float-end mt-1"
                              />
                            </Link>
=======
                            <Link href="/home" className="btn1 mt-15">
                              Discover More <i data-feather="arrow-right" className="float-end mt-1" />
                            </Link>

>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD

      <section className="feature gdsection">
        <div className="content_box_pob_120_80">
          <div className="container_m_40 container_l">
            <div className="row g-5">

              <div className="col-xl-6">
                <div className="sandor">
                  <div className="sandor__img">
                    <img
                      src="/assets/img/about/Global-Drugs.jpg"
                      alt="Global Drugs"
                    />
                  </div>
                  <div className="sandor__content">
                    <h2 className="sandor__title"> Global Drugs, Devices & Equipment for Indian Healthcare </h2>
                    <p className="sandor__desc">
                      It takes Sandor to bring the latest drugs/devices and equipment from across the world to the Indian Hospital System.
                    </p>
                    <button className="sandor__btn">
                      <i className="fa fa-user-md fs-3"></i>
                    </button>
                  </div>
                </div>

              </div>

              <div className="col-xl-6">
                <div className="sandor">
                  <div className="sandor__img">
                    <img src="/assets/img/about/Hospital-Partnerships.jpg"
                      alt="Hospital Partnerships"
                    />
                  </div>
                  <div className="sandor__content">
                    <h2 className="sandor__title"> Streamlining Manufacturer-to-Hospital Partnerships </h2>
                    <p className="sandor__desc">
                      Our services make it possible for manufacturers to reach their products directly to hospitals through an efficient and one stop partnership with Sandor.
                    </p>
                    <button className="sandor__btn">
                      <i className="fa fa-user-md fs-3"></i>
                    </button>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </section>

      {/* <section className="feature1">
        <div className="content_box_pob_120_80">
          <div className="container_m_40 container_l">
            <div className="row">
              <div className="col-xl-6 col_padding">
                <div className="hlbox">
                  <img
                    src="/assets/img/png-icon/medicine.png"
                    alt="Feature"
                    className=""
                  />
                  It takes Sandor to bring the latest drugs/devices and
                  equipment from across the world to the Indian Hospital System.
                </div>
              </div>

              <div className="col-xl-6 col_padding">
                <div className="hlbox float-end">
                  <img
                    src="/assets/img/png-icon/hospital.png"
                    alt="Feature"
                    className=""
                  />
                  Our services make it possible for manufacturers to reach their
                  products directly to hospitals through an efficient and one
                  stop partnership with Sandor.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="feature1 mt-4">
        <div className="content_box_pob_120_80 pt-0">
          <div className="container_m_40 container_l">
            {/* <div className="row">
              <div className="col-xl-12 col_padding">
                <h3 className="text-center"> Our services make it possible for manufacturers to reach their products directly to hospitals through an efficient and one stop partnership with Sandor. </h3>
              </div>
            </div> */}

            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="heading1__title text-center">
                  {" "}
                  Our <span>Services</span>
                </h2>
=======
      <section className="feature1">
        <div className="content_box_pob_120_80">
          <div className="container_m_40 container_l">
            
            <div className="row">
              <div className="col-xl-12 col_padding">
                <h3 className="text-center"> Our services make it possible for manufacturers to reach their products directly to hospitals through an efficient and one stop partnership with Sandor. </h3>
              </div>
            </div>

            <div className="row mb-5 mt-4">
              <div className="col-md-12">
                <h2 className="heading1__title text-center"> Our <span>Services</span></h2>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
              </div>
            </div>
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
              <div className="col col_padding">
                <div className="feature1__item">
<<<<<<< HEAD
                  <h3 className="feature1__item_title heading1__title">
                    {" "}
                    Distribution and <br /> <span> Logistics </span>
                  </h3>
                  <div className="feature1__item_thumb">
                    <img
=======
                  <h3 className="feature1__item_title"> Distribution and <br /> Logistics </h3>
                  <div className="feature1__item_thumb">
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/icon/distribution.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
<<<<<<< HEAD
                      Nationwide cold chain distribution with Narcotic Drugs
                      distribution capabilities in 20 states...
                    </p>
                    <Link
                      href="/distribution-logistics"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
=======
                      Nationwide cold chain distribution with Narcotic Drugs distribution capabilities in 20 states...
                    </p>
                    <Link href="/home"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-semibold"> Read More </span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
<<<<<<< HEAD
                  <h3 className="feature1__item_title heading1__title">
                    Sales and <br /> <span> Marketing </span>
                  </h3>
                  <div className="feature1__item_thumb">
                    <img
=======
                  <h3 className="feature1__item_title">Sales and <br /> Marketing</h3>
                  <div className="feature1__item_thumb">
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/icon/Sales-Marketing.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
<<<<<<< HEAD
                      Specialized sales and marketing team of more than 80
                      committed and experienced salesmen...
                    </p>
                    <Link
                      href="/sales-marketing"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span> Read More </span>
=======
                      Specialized sales and marketing team of more than 80 committed and experienced salesmen...
                    </p>
                    <Link href="/home"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-semibold"> Read More </span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
<<<<<<< HEAD
                  <h3 className="feature1__item_title heading1__title">
                    Regulatory and Custom <span> House Functions </span>
                  </h3>
                  <div className="feature1__item_thumb">
                    <img
=======
                  <h3 className="feature1__item_title">Regulatory and Custom House Functions</h3>
                  <div className="feature1__item_thumb">
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/icon/png-icon-31.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
<<<<<<< HEAD
                      Experienced regulatory affairs team and logistics team
                      capable of handling imports at all...
                    </p>
                    <Link
                      href="/regulatory-supports"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
=======
                      Experienced regulatory affairs team and logistics team capable of handling imports at all...
                    </p>
                    <Link href="/home"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-semibold"> Read More </span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col_padding">
                <div className="feature1__item">
<<<<<<< HEAD
                  <h3 className="feature1__item_title heading1__title">
                    Dialysis <br /> <span> Services </span>
                  </h3>
                  <div className="feature1__item_thumb">
                    <img
=======
                  <h3 className="feature1__item_title">Dialysis <br /> Services</h3>
                  <div className="feature1__item_thumb">
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/png-icon/png-icon-06.png"
                      alt="Feature"
                      className="feature1__item_thumb_bg"
                    />
<<<<<<< HEAD
                    <img
=======
                    <Image
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      src="/assets/img/icon/Dialysis-Services.png"
                      alt="Feature"
                      className="feature1__item_thumb_img"
                    />
                  </div>
                  <div className="feature1__item_content">
                    <p>
<<<<<<< HEAD
                      Provide both partial and complete Dialysis services to
                      various hospital based dialysis centers...
                    </p>
                    <Link
                      href="/dialysis-services"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-normal"> Read More </span>
=======
                      Provide both partial and complete Dialysis services to various hospital based dialysis centers...
                    </p>
                    <Link href="/home"
                      className="feature1__item_btn d-flex justify-content-between"
                    >
                      <span className="fw-semibold"> Read More </span>
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      <i data-feather="arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
=======

>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="service1">
        <div className="service1__shape">
          <img src="/assets/img/shape/shape-02.png" alt="Service" />
        </div>
        <div className="content_box_120_70">
          <div className="container_m_40 container_l">
            <div className="row">
=======

      <section className="service1">
        <div className="service1__shape">
          <Image src="/assets/img/shape/shape-02.png" alt="Service" />
        </div>
        <div className="content_box_120_70">
          <div className="container_m_40 container_l">

         <div className="row">
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
              <div className="col-xl-6 col_padding">
                <div className="about1__content">
                  <div className="heading1 mb-35">
                    <h4 className="heading1__subtitle mb-10">About Us </h4>
                    <h2 className="heading1__title">
                      About The <span>Sandor</span>
                    </h2>
                  </div>
                  <p>
<<<<<<< HEAD
                    Sandor Medicaids Pvt. Ltd. is a nationwide distribution
                    company specializing in supplies to hospitals and government
                    institutions. It has developed efficient systems and
                    capabilities to supply specialty drugs, device and equipment
                    to hospitals. Since its inception in 1995 in Hyderabad, the
                    company has focused on bringing high-tech biomedical and
                    biotechnology products into India. Sandor has been the first
                    company to bring “Point of Care” concept to the Indian ICU
                    in 1996 by launch of i-stat, a state of the art product for
                    emergency monitoring of patients.
                  </p>

                  <p>
                    {" "}
                    The company started as a sales, marketing and distribution
                    company and over time evolved as a nationwide distribution,
                    sales and marketing company by 2008 when Genzyme launched
                    their operations in India. It can today boast of a national
                    level distribution network with 21CFR compliant cold chain
                    facilities covering most of Indian states. Our efficient and
                    compliant 20 branch distribution network supports drug and
                    device manufacturers launch products with ready access to
                    more...
                  </p>

                  {/* Site BTN */}
                  <Link href="/" className="btn1">
=======
                    Sandor Medicaids Pvt. Ltd. is a nationwide distribution company specializing in supplies to hospitals and government institutions. It has developed efficient systems and capabilities to supply specialty drugs, device and equipment to hospitals. Since its inception in 1995 in Hyderabad, the company has focused on bringing high-tech biomedical and biotechnology products into India. Sandor has been the first company to bring “Point of Care” concept to the Indian ICU  in 1996 by launch of i-stat, a state of the art product for emergency monitoring of patients.
                  </p>

                  <p> The company started as a sales, marketing and distribution company and over time evolved as a nationwide distribution, sales and marketing company by 2008 when Genzyme launched their operations in India. It can today boast of a national level distribution network with 21CFR compliant cold chain facilities covering most of Indian states. Our efficient and compliant 20 branch distribution network supports drug and device manufacturers launch products with ready access to more...</p>

                  {/* Site BTN */}
                  <Link href="/home" className="btn1">
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                    Read More <i data-feather="arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col_padding">
                <div className="about1__thumb">
                  <div className="about1__thumb_shap">
<<<<<<< HEAD
                    <img src="/assets/img/png-icon/png-icon-11.png" alt="" />
                  </div>
                  <div className="about1__thumb_info rounded-3">
                    <div className="about1__thumb_info_icon">
                      <img src="/assets/img/png-icon/png-icon-10.png" alt="" />
=======
                    <Image src="/assets/img/png-icon/png-icon-11.png" alt="" />
                  </div>
                  <div className="about1__thumb_info">
                    <div className="about1__thumb_info_icon">
                      <Image src="/assets/img/png-icon/png-icon-10.png" alt="" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                    </div>
                    <div className="about1__thumb_info_text">
                      <h5>
                        <span className="counter2">1995</span>
                      </h5>
                      <p>Since its inception</p>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-sm-5 col-xl-6 d-xl-flex align-items-xl-end">
<<<<<<< HEAD
                      <div className="about1__thumb_img3 img_100 d-lg-block d-none">
                        <img src="/assets/img/about/drugs1.jpg" alt="About" />
=======
                      <div className="about1__thumb_img3 img_100">
                        <Image src="/assets/img/about/drugs1.jpg" alt="About" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      </div>
                    </div>
                    <div className="col-sm-7 col-xl-6">
                      <div className="about1__thumb_img1 img_100">
<<<<<<< HEAD
                        <img src="/assets/img/about/drugs2.jpg" alt="About" />
                      </div>
                      <div className="about1__thumb_img2 img_100">
                        <img src="/assets/img/about/drugs3.jpg" alt="About" />
=======
                        <Image src="/assets/img/about/drugs2.jpg" alt="About" />
                      </div>
                      <div className="about1__thumb_img2 img_100">
                        <Image src="/assets/img/about/drugs3.jpg" alt="About" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======


>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
      <section className="about1 mt-5">
        <div className="content_box_pob_120 pb-5">
          <div className="container_m_50 container_l">
            <div className="row">
              <div className="col-xl-7 col_padding">
<<<<<<< HEAD
                <div className="about1__content1">
                  <div className="heading1 mb-25">
                    {/* <h4 className="heading1__subtitle mb-10">About The Medidoc</h4> */}
                    <h2 className="heading1__title mt-2">Vision</h2>
                  </div>
                  <h4 className="about1__content_heading">
                    Sandor is an organization in pursuit of
                  </h4>

                  <ul className="icon-list">
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                      <span> Mastering all aspects of healthcare distribution for
                        products and services. </span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                      <span> Being recognized as a patient centric organization which
                        cares for life and well being of its patients by
                        providing them with the best in class products through
                        an efficient, ethical and economic distribution network. </span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                      <span> Being a partner of choice for manufacturers of drugs,
                        devices and medical equipment for bringing their
                        products to the Indian healthcare providers. </span>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="col-xl-5 col_padding">
                <div className="about1__thumb_img3 img_100 mt-lg-0 mt-3">
                  <img src="/assets/img/about/Vision.jpg" alt="About" />
=======
                <div className="about1__content">
                  <div className="heading1 mb-25">
                    {/* <h4 className="heading1__subtitle mb-10">About The Medidoc</h4> */}
                    <h2 className="heading1__title mt-2">
                      Vision
                    </h2>
                  </div>
                  <h5 className="about1__content_heading">
                    Sandor is an organization in pursuit of
                  </h5>
                  <ul>
                    <li>
                      <span>
                        <i data-feather="check" />
                      </span>
                      <span> Mastering all aspects of healthcare distribution for products and services. </span>
                    </li>
                    <li>
                      <span>
                        <i data-feather="check" />
                      </span>
                      <span>Being recognized as a patient centric organization which cares for life and well being of its patients by providing them with the best in class products through an efficient, ethical and economic distribution network.</span>
                    </li>
                    <li>
                      <span>
                        <i data-feather="check" />
                      </span>
                      <span>
                        Being a partner of choice for manufacturers of drugs, devices and medical equipment for bringing their products to the Indian healthcare providers.
                      </span>
                    </li>
                  </ul>


                </div>
              </div>
              <div className="col-xl-5 col_padding">
                <div className="about1__thumb_img3 img_100">
                  <Image src="/assets/img/about/Vision.jpg" alt="About" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="about1 mt-0">
        <div className="content_box_pob_120">
          <div className="container_m_50 container_l">
            <div className="row flex-column-reverse flex-xl-row">
              <div className="col-xl-5 col_padding my-lg-0 my-4">
                <div className="about1__thumb_img3 img_100">
                  <img src="/assets/img/about/Mission.jpg" alt="About" />
=======

      <section className="about1 mt-0">
        <div className="content_box_pob_120">
          <div className="container_m_50 container_l">
            <div className="row">

              <div className="col-xl-5 col_padding">
                <div className="about1__thumb_img3 img_100">
                  <Image src="/assets/img/about/Mission.jpg" alt="About" />
>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
                </div>
              </div>

              <div className="col-xl-7 col_padding">
<<<<<<< HEAD
                <div className="about1__content1">
                  <div className="heading1 mb-35">
                    {/* <h4 className="heading1__subtitle mb-10">About The Medidoc</h4> */}
                    <h2 className="heading1__title mt-2">Mission</h2>
                  </div>


                  <ul className="icon-list">
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                      <span> Provide easy access of healthcare products at affordable
                        prices to patients/hospitals across India through our
                        reliable, efficient, secure and technology driven
                        distribution solution fulfilling market demand by adding
                        value to both manufacturers and hospitals. </span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                      <span> To work diligently towards bringing in innovative
                        products to healthcare providers and creating demand for
                        those products in an ethical and transparent way. </span>
                    </li>
                    <li>
                      <img src="/assets/img/icon/check.png" alt="check" />
                      <span> To become a one stop shop for healthcare products in the
                        field of Critical Care, Nephrology and Transplantation
                        in India. </span>
                    </li>
                  </ul>

                </div>
              </div>
=======
                <div className="about1__content">
                  <div className="heading1 mb-35">
                    {/* <h4 className="heading1__subtitle mb-10">About The Medidoc</h4> */}
                    <h2 className="heading1__title mt-2">
                      Mission
                    </h2>
                  </div>
                  <ul>
                    <li>
                      <span>
                        <i data-feather="check" />
                      </span>
                      <span> Provide easy access of healthcare products at affordable prices to patients/hospitals across India through our reliable, efficient, secure and technology driven distribution solution fulfilling market demand by adding value to both manufacturers and hospitals. </span>
                    </li>
                    <li>
                      <span>
                        <i data-feather="check" />
                      </span>
                      <span> To work diligently towards bringing in innovative products to healthcare providers and creating demand for those products in an ethical and transparent way. </span>
                    </li>
                    <li>
                      <span>
                        <i data-feather="check" />
                      </span>
                      <span>
                        To become a one stop shop for healthcare products in the field of Critical Care, Nephrology and Transplantation in India.
                      </span>
                    </li>
                  </ul>


                </div>
              </div>

>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </>
=======




    </>


>>>>>>> 66c2b1f7c07377e34cb27e9c10cbe501de4f04c5
  );
};

export default Home;
