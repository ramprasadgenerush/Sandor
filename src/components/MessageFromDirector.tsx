"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const MessageFromDirector = () => {

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
                  <h3 className="breadcrumb1__title">Message from Director</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/home">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Message from Director </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="postbox_w1">
  <div className="content_box_120">
    <div className="container_m_50 container_l">
      <div className="row">
        <div className="col-xl-11 col_padding">
          <div className="postbox_w1__wrapper">
            <div className="biography1">
              <div className="biography1__thumb">
                <a>
                  <Image src="/assets/img/blog/biography-1.jpg" alt="Thumb" />
                </a>
              </div>
              <div className="biography1__content">
                
                <p>
                 For me the most important aspect of business is the company culture which comes from its management and employees. At Sandor, its employees can visit any of its various branches or its customers can interact with its employees and recognise its culture.
                </p>
                <p> Important values of our culture that drive everything we do are Integrity, Innovation, Engagement and Care. All our employees are empowered to ask questions, make recommendations and continuously change things for the better. Leaders are role models, and rewards are given for outstanding performance. </p>

                <p> Sandor is made up of talented individuals with a common identity: A company in service of patients! </p>
                <h4 className="mt-4">
                  <a> Rajeev Sindhi </a>
                </h4>

              </div>
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

export default MessageFromDirector;
