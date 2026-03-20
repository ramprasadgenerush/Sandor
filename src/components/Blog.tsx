"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const Blog = () => {

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
                  <h3 className="breadcrumb1__title">Blog</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Blog</span>
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
              <div className="col-xl-8 col_padding">
                {/* Postbox Wrapper */}
                <div className="postbox_w1__wrapper">
                  {/* Blog Item */}
                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/May-blog-7.png" alt="Blog" />


                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a>Complications linked with multiple cannulations</a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span> vein machine  </span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span> 3 October, 2021</span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 0</span>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Intravenous cannulation is a procedure where a cannula is placed inside the most suitable vein for venous access. The opening via cannula has the potential to carry medicine, fluids, parenteral nutrition, and chemotherapy. The valves present in the veins promote the one-way directional flow of blood and prevent the pooling of blood in one specific
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>

                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/May-blog-6.jpg" alt="Blog" />


                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a>Signs of Congestive Heart Failure: How cardiac monitoring helps </a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span> Heart failure </span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span> 28 September, 2021 </span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 0</span>
                          </li>
                        </ul>
                      </div>
                      <p> Congestive heart failure affects millions of people across the globe. Most of the people even go undiagnosed for heart failure, leading to an increase in hospitalization at critical stage. Before moving onto congestive heart failure, it is crucial to begin from the base of the iceberg.    What exactly is heart failure?  As per the understanding from
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>

                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/May-blog-4.jpg" alt="Blog" />


                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a>Low Potassium Cardioplegic Solutions Are the Way to Go for Surgeons </a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span> cardioplegic </span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span> 28 September, 2021 </span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 2</span>
                          </li>
                        </ul>
                      </div>
                      <p>The use of cardioplegic solutions has significantly improved the safety factor in cardiac operations. It protects the heartbeat by prompt and full diastolic arrest, minimizes the energy requirements of the myocardial and prevents ischemic damage during the arrest stage, and minimizes or prevents injuries to reperfusion when coronary blood flow is restored. This protective effect is primarily responsible
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>

                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/May-blog-2.jpg" alt="Blog" />


                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a>Point of Care Anti Coagulation Testing Systems Have Come So Far </a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span>  PT-INR machine, Uncategorized </span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span> 28 September, 2021 </span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 0</span>
                          </li>
                        </ul>
                      </div>
                      <p>The continued increasing number of patients undergoing oral anticoagulation therapy has led to the construction of different methods for therapeutic monitoring. Implementing point of care (POC or near-patient) tests for international normalized ratio (INR) is a technical advancement that has facilitated the transfer of services from traditional hospital environments.   Diagnostic tests performed outside the laboratory
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>

                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/May-blog-1.jpg" alt="Blog" />
                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a>Point of Care INR Testing, Empowering You and Your Patients </a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span>  PT-INR machine </span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span>  7 September, 2021 </span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 0</span>
                          </li>
                        </ul>
                      </div>
                      <p>The continued increasing number of patients undergoing oral anticoagulation therapy has led to the construction of different methods for therapeutic monitoring. Implementing point of care (POC or near-patient) tests for international normalized ratio (INR) is a technical advancement that has facilitated the transfer of services from traditional hospital environments.   Diagnostic tests performed outside the laboratory
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>


                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/June-blog-3.jpg" alt="Blog" />
                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a> COAGU-SENSE – THE NEXT GENERATION IN POINT OF CARE PT/INR </a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span>  blood test machine  </span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span>  24 August, 2021 </span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 0</span>
                          </li>
                        </ul>
                      </div>
                      <p> In the previous ten years, numerous progressions were made in the point-of-care Testing (POCT) of prothrombin time (PT)/international standardized ration (INR). This is generally done at an outpatient Warfarin clinic or at the doctor’s office and is inconvenient for patients, hence the trend for self-testing devices (PSTs) for people are developing.  What does it exactly
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>

                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/June-blog-4.jpg" alt="Blog" />
                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a> Guide to effortless cannulation </a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span>  pain Relief  </span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span>  24 August, 2021 </span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 0</span>
                          </li>
                        </ul>
                      </div>
                      <p>The insertion of a peripheral venous catheter for intravenous cannulation requires skill. Despite strongeing a fairly straightforward process, cannulation is an art. The techniques and preparation for cannulation need to stronge safe and hygienic. The method might vary from professional to professional as per their preferences.  It’s crucial to comfort the patient strongefore strongeginning the
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>


                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/June-blog-2.jpg" alt="Blog" />
                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a> How does heart transplantation work? </a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span> cardioplegic, Custodial </span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span>  28 July, 2021  </span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 0</span>
                          </li>
                        </ul>
                      </div>
                      <p> Heart transplantation in layman’s terms means when a diseased or failing heart is replaced with a healthier donor heart. It is the last resort when the condition of the patient is not improved with medications or surgery. Other factors for transplantation can be a weakening of heart muscle, coronary artery disease, heart problem you’re born
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>

                  <article className="postbox_w1__item">
                    <div className="postbox_w1__item_thumb">
                      <div className="postbox_w1__item_thumb_wrapper">
                        <img src="assets/img/blog/San-Cath-Hemodialysis-Catheter-Catheter-Kit.jpg" alt="Blog" />
                      </div>
                    </div>
                    <div className="postbox_w1__item_content">
                      <h2>
                        <a> Liver Transplantation Made Smoother with Custodiol HTK solution </a>
                      </h2>
                      <div className="postbox_w1__item_content_data">
                        <ul>
                          <li>
                            <span>By Administrator</span>
                          </li>
                          <li>
                            <span> Custodial</span>
                          </li>
                          <li>
                            <span>Comments are Closed   </span>
                          </li>
                          <li>
                            <span>  28 July, 2021  </span>
                          </li>
                          <li>
                            <span> <i className="fa fa-heart"></i> 0</span>
                          </li>
                        </ul>
                      </div>
                      <p> The liver is one of the body’s most critical organs, and it works properly for your well-being. This little 1.3 kg organ performs many difficult functions simultaneously. It is on the right side of the abdomen under the diaphragm.    Your liver performs some very important functions, such as   Synthesize proteins which your body needs.   It
                      </p>
                      {/* Site BTN */}
                      <a className="btn1 mt-15">
                        Read More <i className="fa fa-arrow-right ms-1 mt-1" />
                      </a>
                    </div>
                  </article>


                </div>
              </div>


              <div className="col-xl-4 col_padding">
                <div className="sidebar_w1">
                  {/* Search Objects */}
                  <div className="sidebar_w1__widget">
                    <h4 className="sidebar_w1__widget_title">Search Objects</h4>
                    <div className="sidebar_w1__widget_search">
                      <form>
                        <input
                          type="text"
                          name="s"
                          defaultValue=""
                          placeholder="Search Here"
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* Recent Posts */}
                  <div className="sidebar_w1__widget">
                    <h4 className="sidebar_w1__widget_title">Recent Posts</h4>
                    <div className="sidebar_w1__widget_post">
                      {/* Recent Posts Items */}
                      <div className="sidebar_w1__widget_post_item">
                        <div className="sidebar_w1__widget_post_thumb">
                          <a>
                            <img src="assets/img/blog/May-blog-7.png" alt="Blog" />
                          </a>
                        </div>
                        <div className="sidebar_w1__widget_post_content">
                          <h5>
                            <a>Complications linked with multiple cannulations</a>
                          </h5>
                        </div>
                      </div>
                      <div className="sidebar_w1__widget_post_item">
                        <div className="sidebar_w1__widget_post_thumb">
                          <a>
                            <img src="assets/img/blog/May-blog-6.jpg" alt="Blog" />
                          </a>
                        </div>
                        <div className="sidebar_w1__widget_post_content">
                          <h5>
                            <a> Signs of Congestive Heart Failure: How cardiac monitoring helps </a>
                          </h5>
                        </div>
                      </div>
                      <div className="sidebar_w1__widget_post_item">
                        <div className="sidebar_w1__widget_post_thumb">
                          <a>
                            <img src="assets/img/blog/May-blog-4.jpg" alt="Blog" />
                          </a>
                        </div>
                        <div className="sidebar_w1__widget_post_content">
                          <h5>
                            <a>
                              Low Potassium Cardioplegic Solutions Are the Way to Go for Surgeons
                            </a>
                          </h5>
                        </div>
                      </div>

                      <div className="sidebar_w1__widget_post_item">
                        <div className="sidebar_w1__widget_post_thumb">
                          <a>
                            <img src="assets/img/blog/May-blog-2.jpg" alt="Blog" />
                          </a>
                        </div>
                        <div className="sidebar_w1__widget_post_content">
                          <h5>
                            <a>
                              Point of Care Anti Coagulation Testing Systems Have Come So Far
                            </a>
                          </h5>
                        </div>
                      </div>

                      <div className="sidebar_w1__widget_post_item">
                        <div className="sidebar_w1__widget_post_thumb">
                          <a>
                            <img src="assets/img/blog/May-blog-1.jpg" alt="Blog" />
                          </a>
                        </div>
                        <div className="sidebar_w1__widget_post_content">
                          <h5>
                            <a>
                              Point of Care INR Testing, Empowering You and Your Patients
                            </a>
                          </h5>
                        </div>
                      </div>




                    </div>
                  </div>
                  {/* Archives */}
                  <div className="sidebar_w1__widget">
                    <h4 className="sidebar_w1__widget_title">Archives</h4>
                    <div className="sidebar_w1__widget_categories">
                      <ul>
                        <li>
                          <a>October 2021</a>
                        </li>
                        <li>
                          <a>September 2021</a>
                        </li>
                        <li>
                          <a>August 2021</a>
                        </li>
                        <li>
                          <a>July 2021</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="sidebar_w1__widget">
                    <h4 className="sidebar_w1__widget_title">Categories</h4>
                    <div className="sidebar_w1__widget_categories">
                      <ul>
                        <li>
                          <a>blood test machine</a>
                        </li>
                        <li>
                          <a>cardioplegic</a>
                        </li>
                        <li>
                          <a>Custodial</a>
                        </li>
                        <li>
                          <a>Heart failure</a>
                        </li>
                        <li>
                          <a>pain Relief</a>
                        </li>
                        <li>
                          <a>PT-INR machine</a>
                        </li>
                        <li>
                          <a>Uncategorized</a>
                        </li>
                        <li>
                          <a>vein machine</a>
                        </li>
                      </ul>
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

export default Blog;
