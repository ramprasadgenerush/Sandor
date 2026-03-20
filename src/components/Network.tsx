"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Network = () => {


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
                  <h3 className="breadcrumb1__title"> Network</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Network </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="process2">
        <div className="content_box_120_90">
          <div className="container_m_30 container_l">


            <div className="process2__wrapper">
              <div className="row">

                <div className="col-xxl-4 col-lg-4 col-md-4 col_padding">
                  <div className="process2__item mb-0">
                    <div className="process2__item_thumb">
                      <img src="/assets/img/png-icon/png-icon-72.png" alt="Image" />
                    </div>
                    <div className="process2__item_content">
                      <h5>Head Office</h5>
                      <h4>Hyderabad</h4>
                      <p className="m-0">
                        471, Road No. 87, Paramount Hills, Jubilee Hills, Hyderabad, Telangana 500096 <br />
                        Tel: 1800 425 9515 <br />
                        Fax: 040-23357046 <br />
                        Email: info@sandor.co.in</p>

                    </div>
                  </div>
                </div>

                <div className="col-xxl-8 col-lg-8 col-md-8 col_padding">
                  <div className="process2__item p-3 mb-0">

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.062210398921!2d78.4176411!3d17.408801900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96c4d0930ed5%3A0xe0d8430591014da6!2s471%2C%20Road%20No.%2087%2C%20Paramount%20Hills%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500096!5e0!3m2!1sen!2sin!4v1768814625603!5m2!1sen!2sin"
                      style={{ border: 0, width: "100%", height: 375 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="feature2">
        <div className="content_box_120_70 pt-0 pb-4">
          <div className="container_m container_l">

            <div className="row g-xl-0">
              <div className="col-md-12 text-center"> <h1 className="fw-bolder"> Branch Offices </h1> </div>
            </div>

            <div className="row mt-5">
              <div className="col-xl-3 col-md-3">
                <h4> South Zone</h4>
              </div>

              <div className="col-xl-3 col-md-3">
                <h4> East Zone </h4>
              </div>

              <div className="col-xl-3 col-md-3">
                <h4> West Zone </h4>
              </div>

              <div className="col-xl-3 col-md-3">
                <h4> North Zone </h4>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="network">

        <div className="container_m_50 container_l">
          <div className="row">
            <div className="col-xl-12 col_padding">

              <div className="network__container">
                {/* HYDERABAD */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> HYDERABAD (CENTRAL WAREHOUSE)
                  </h4>
                  <p>D.No. 6-4/7/1/2, 1st Floor, Aspire Towers</p>
                  <p>Kattedan, Aramghar, Rajendra Nagar</p>
                  <p>Hyderabad, 500052</p>
                  <p>Tel: 040-23375052</p>
                  <p>Mob: +91 7382621821</p>
                  <p>Email: centralhub@sandor.co.in</p>
                </div>
                {/* KOLKATA */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> KOLKATA
                  </h4>
                  <p>CZ-20/AB, Canal South Road</p>
                  <p>Metropolitan Co-operative Housing</p>
                  <p>Society PO-Dhapa, PS-Pragati Maidan</p>
                  <p>Kolkata, 700105</p>
                  <p>Tel: 033-25227422</p>
                  <p>Mob: +91 6309956200</p>
                  <p>Email: kolkata@sandor.co.in</p>
                </div>
                {/* MUMBAI */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> MUMBAI
                  </h4>
                  <p>Mahindra M Spaces, Shop No. 1 &amp; 2</p>
                  <p>Ground Floor, Near Meenakshi Thackeray</p>
                  <p>Goodwill Company, Mumbai, 400064</p>
                  <p>Tel: 022-49140288</p>
                  <p>Mob: +91 912239606</p>
                  <p>Email: mumbai@sandor.co.in</p>
                </div>
                {/* NEW DELHI */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> NEW DELHI
                  </h4>
                  <p>B-253, Ground Floor, Phase-1</p>
                  <p>Naraina Industrial Area</p>
                  <p>Near Fire Station, Delhi</p>
                  <p>Tel: 011-25617652</p>
                  <p>Mob: +91 9810753179</p>
                  <p>Email: delhi@sandor.co.in</p>
                </div>
                {/* BANGALORE */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> BANGALORE
                  </h4>
                  <p>Chandramma, New No 5, Old No 350</p>
                  <p>2nd Cross, 1st Block, Jayanagar</p>
                  <p>Bangalore, 560011</p>
                  <p>Tel: 080-26650757</p>
                  <p>Mob: +91 6309956828</p>
                  <p>Email: bangalore@sandor.co.in</p>
                </div>
                {/* BHUBANESHWAR */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> BHUBANESHWAR
                  </h4>
                  <p>Plot No. 121/C, 1st Floor, Bhimpur</p>
                  <p>Aerodrome Area</p>
                  <p>Bhubaneswar, 751009</p>
                  <p>Tel: 0674-2957436</p>
                  <p>Mob: +91 9121239612</p>
                  <p>Email: bhubaneswar@sandor.co.in</p>
                </div>
                {/* AHMEDABAD */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> AHMEDABAD
                  </h4>
                  <p>Shop No. 04, Ground Floor</p>
                  <p>Jagdish Estate, Near Lalli Mulji Transport</p>
                  <p>Sarkhej, Ahmedabad, 382210</p>
                  <p>Tel: 079-27470272</p>
                  <p>Mob: +91 9121239610</p>
                  <p>Email: ahmedabad@sandor.co.in</p>
                </div>
                {/* LUCKNOW */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> LUCKNOW
                  </h4>
                  <p>H.No. K-520, Ground Floor &amp; First Floor</p>
                  <p>Sector K, Ashiana, Kanpur Road</p>
                  <p>Lucknow, 226012</p>
                  <p>Tel: 0522-4414188</p>
                  <p>Mob: +91 9415021306</p>
                  <p>Email: lucknow@sandor.co.in</p>
                </div>
                {/* CHENNAI */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> CHENNAI
                  </h4>
                  <p>Building No NP 101, North Facing</p>
                  <p>Industrial Estate, Guindy</p>
                  <p>Chennai, 600032</p>
                  <p>Tel: 044-48564547</p>
                  <p>Mob: +91 9121239602</p>
                  <p>Email: chennai@sandor.co.in</p>
                </div>
                {/* PATNA */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> PATNA
                  </h4>
                  <p>3rd Floor, &quot;Kanti Shrir&quot;, Kumharar</p>
                  <p>Sandalpur Road</p>
                  <p>Patna, 800006</p>
                  <p>Tel: 0612-2311861</p>
                  <p>Mob: +91 9121239614</p>
                  <p>Email: patna@sandor.co.in</p>
                </div>
                {/* INDORE */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> INDORE
                  </h4>
                  <p>H No.1, Swami Dayanand Nagar</p>
                  <p>1st Floor, Manik Bagh Road</p>
                  <p>Indore, 452014</p>
                  <p>Tel: 0731-2471107</p>
                  <p>Mob: +91 7720478288</p>
                  <p>Email: indore@sandor.co.in</p>
                </div>
                {/* JAIPUR */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> JAIPUR
                  </h4>
                  <p>1-7 A, Ramesh Marg</p>
                  <p>C-Scheme</p>
                  <p>Jaipur, Rajasthan, 302001</p>
                  <p>Tel: 0141-2221388</p>
                  <p>Mob: +91 9121239611</p>
                  <p>Email: jaipur@sandor.co.in</p>
                </div>

                {/* Coimbatore */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> Coimbatore
                  </h4>
                  <p>5/7-2, First Floor, B.R.Nagar, 4th Street, Kothari Layout,</p>
                  <p>Singanallur, Coimbatore – 641 005</p>
                  <p>Tel: 0422-2312771</p>
                  <p>Mob: +91 9121239613</p>
                  <p>Email: coimbatore@sandor.co.in</p>
                </div>



                {/* Guwahati */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> Guwahati
                  </h4>
                  <p>Hatigaon Chariali Sijubari Dargah Road,</p>
                  <p>House No.2(1st Floor) Guwahati, 781038</p>
                  <p>Tel: 0361-2452454</p>
                  <p>Mob: +91 6309996824</p>
                  <p>Email: guwahati@sandor.co.in</p>
                </div>


                {/* PUNE */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> PUNE
                  </h4>
                  <p>G-1, Rajhira Residency, Survey No-42</p>
                  <p>Behind Japla Furniture, Near Shaniwar Wada</p>
                  <p>Pune, 411030</p>
                  <p>Tel: 020-24323313</p>
                  <p>Mob: +91 6309956829</p>
                  <p>Email: pune@sandor.co.in</p>
                </div>
                {/* PUNCHKULA */}
                <div className="network__item">
                  <h4 className="network__title">
                    <span>📍</span> PANCHKULA
                  </h4>
                  <p>Plot No. 293, Phase 1</p>
                  <p>Industrial Area</p>
                  <p>Panchkula, 134113</p>
                  <p>Tel: 0172-5063286</p>
                  <p>Mob: +91 6309956824</p>
                  <p>Email: panchkula@sandor.co.in</p>
                </div>
              </div>

            </div>
          </div>

          <div className="row">

            <div className="col-xl-3 col_padding">

              {/* Kochi */}
              <div className="network__item">
                <h4 className="network__title">
                  <span>📍</span> Kochi
                </h4>
                <p>5M Towers Door No.55/3278 to 55/3279,</p>
                <p>Sahodaran Ayyappan Road, Elamkulam, Ernakulam, 682020</p>
                <p>Tel: 0484-2400818 / 2405687-88</p>
                <p>Mob: +91 9121239605</p>
                <p>Email: kochin@sandor.co.in</p>
              </div>

              {/* Visakhapatnam */}
              <div className="network__item mt-4">
                <h4 className="network__title">
                  <span>📍</span> Visakhapatnam
                </h4>
                <p>MIG 43 D.no: 11-9-43/1A, Dasapalla Hills,</p>
                <p>AU Post, Visakhapatnam,530003</p>
                <p>Tel: 0891-2554825,</p>
                <p>Mob: +91 9121239609</p>
                <p>Email: vizag@sandor.co.in</p>
              </div>

                            {/* Vijayawada */}
              <div className="network__item mt-4">
                <h4 className="network__title">
                  <span>📍</span> Vijayawada
                </h4>
                <p>D.No: 54-14/7-2, Plot No: 15, Road No: 13,</p>
                <p>Bharathi Nagar, Near Benz-circle, Vijayawada,520008</p>
                <p>Tel.: 0866-2973496</p>
                <p>Mob : +91 9963257343</p>
                <p>Email : vijayawada@sandor.co.in</p>
              </div>

            </div>

            <div className="col-xl-9 col_padding">

            </div>
          </div>
        </div>
      </section>





    </>


  );

};

export default Network;
