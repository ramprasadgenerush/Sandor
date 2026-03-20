"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NicasHemoDynamicNavigator = () => {



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
                  <h3 className="breadcrumb1__title">Nicas Hemodynamic Navigator&trade; </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Nicas Hemodynamic Navigator&trade; </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="faq3">
        <div className="content_box_120">
          <div className="container_m_30 container_l">

            <div className="row g-5">

              <div className="col-xl-8">

                <p> NI Medical provides continuous, accurate and non-invasive hemodynamic monitoring. It is based on the Whole-body Impedance Cardiography, a technology that was developed by NI Medical’s scientists over years of research and development following by extensive testing and validation. </p>

                <h2 className="text-primary-emphasis"> Key Features </h2>

                <ul className="round mt-4">
                  <li>
                    100% noninvasive CARDIAC SYSTEM, easy to use – no need for patient to undress.
                  </li>

                  <li>
                    A multi-dimensional graphic display of patient’s fluids, hemodynamic status and
                    Cardio-pulmonary Function.
                  </li>

                  <li>
                    <b>
                      The only Impedance technology that meets FDA guidelines for statistical bioequivalent to thermodilution.
                    </b>
                  </li>

                  <li>
                    Regional Impedance Cardiography – the only technology that measures continuous
                    Stroke Volume, Cardiac Output, Cardiac Power Index, Total Peripheral Resistance,
                    Left ventricular systolic function and Total Body Water.
                  </li>

                  <li>
                    Enables to determine patient’s <b>Preload, Contractility </b> or <b> Afterload</b> which can lead
                    to an effective management of fluids, catecholamine and inotropes.
                  </li>

                  <li>
                    Provides Real-Time data on patient Hemodynamic Parameters.
                  </li>

                  <li>
                    Strong and clean signal, taken from the radial and posterior tibialis arteries,
                    results in high accuracy and reproducibility.
                  </li>
                </ul>

                <h2 className="text-primary-emphasis mt-5"> Clinical Applications </h2>

                <div className="accordion1 mt-4">
                  <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-0"
                          aria-expanded="false"
                          aria-controls="collapse-0"
                        >
                          <span> Heart Failure </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-0"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <>
                            <h4 className="text-primary-emphasis">
                              Congestive Heart Failure
                            </h4>
                            <h6 className="mt-3">
                              Highlights of NICaS advantages:
                            </h6>
                            <ul className="round mt-4">
                              <li>
                                <strong>NICaS</strong>&nbsp;can effectively reduce heart failure
                                admissions and readmissions back to the hospital
                              </li>
                              <li>
                                <strong>NICaS</strong>&nbsp;is accurate, but more importantly, it is
                                consistent
                              </li>
                              <li>
                                <strong>NICaS</strong>&nbsp;takes the guesswork out of managing difficult
                                patients with heart failure
                              </li>
                              <li>
                                <strong>NICaS</strong>&nbsp;affords a comfort level for medication
                                titration not previously seen in these patients
                              </li>
                              <li>
                                <strong>NICaS</strong>&nbsp;will identify patients with impending heart
                                failure before they decompensate allowing time to make necessary
                                adjustments that will prevent the decompensation&nbsp;of inadequate
                                delivery of oxygen and nutrients to the tissues of the body, which can be
                                due to a pumping or a relaxing problem of the heart.
                              </li>
                            </ul>
                            <p>
                              Heart failure affects over 6 million people in the United States with about
                              700,000 new cases annually. The majority of admissions to the hospitals for
                              heart failure are, in fact, readmissions for heart failure. Approximately
                              22% of people discharged from the hospitals with heart failure will be
                              readmitted within 30 days and approximately 50% will be readmitted within 6
                              months.
                              <br />
                              The reasons for the huge financial and functional burden of heart failure
                              are many including an incomplete understanding of the pathophysiology of
                              heart failure, misdiagnoses, suboptimal use of evidence-based therapies and
                              lack of a clinically useful, accurate and consistent means of assessing
                              one’s cardiovascular physiology in real-time.
                              <br />
                              NICaS could be just the solution to address all of these limitations.
                              <br />
                              From a clinical standpoint, NICaS is able to provide accurate (highly
                              correlates with pulmonary artery catheter), consistent and real-time date of
                              one’s cardiovascular physiology. This would facilitate the ability to
                              improve our understanding of one’s cardiovascular state, provide a clue as
                              to what is causing the current state and Heart Failure, facilitate titration
                              of medication to more optimal levels and provide a mean of assessing one’s
                              response to medication adjustments. When coupled with physician or nurse
                              practitioner with a strong understanding of basic cardiovascular physiology,
                              NICaS has the potential to revolutionize the management of both chronical
                              and acute heart failure and to, more importantly, improve outcomes for
                              patients with this dreaded syndrome. See Figure 1 for the physiology of
                              oxygen delivery as can provided by NICaS
                            </p>
                            <p>
                              <img className="mt-4" src="/assets/img/nicas/clinical-app-heart-fail-1-768x476.png" style={{ height: "400px" }} alt="nicas" />
                            </p>

                            <h4 className="text-primary-emphasis">Case Study</h4>
                            <h5 className="mt-2">
                              Heart Failure Patient in the community
                            </h5>
                            <p>
                              A heart failure patient comes to his cardiologists for a routine
                              checkup.&nbsp;<strong>NICaS</strong>&nbsp;inspection reveals low
                              contractility and high afterload. Total Body Water was normal.&nbsp;
                              <strong>NICaS</strong>&nbsp;identified impending heart failure just before
                              decompensation. See Figure 1 for patient’s first&nbsp;<strong>NICaS</strong>
                              &nbsp;inspection report.
                            </p>
                            <p>
                              <img className="mt-4" src="/assets/img/nicas/nicas-first-768x538.png" style={{ height: "400px" }} alt="nicas" />
                            </p>
                            <h4 className="text-primary-emphasis">NICaS first inspection Delivery</h4>
                            <p>
                              Based on&nbsp;<strong>NICaS</strong>&nbsp;inspection results, the
                              cardiologist prescribe ACE Inhibitor. In addition, a low salt diet was
                              recommended.
                            </p>
                            <p>
                              2 month later, the patients arrived to the cardiologist for a second
                              visit.&nbsp;<strong>NICaS</strong>&nbsp;second inspection verified that
                              afterload was reduced and contractility was improved, both in to normal
                              range. The decompensation was prevented and could be that potential
                              hospitalization was prevented. See Figure 2 for patient’s second&nbsp;
                              <strong>NICaS</strong>&nbsp;inspection reports.
                            </p>
                            <p>

                              <img className="mt-4" src="/assets/img/nicas/nicas-first-768x538.png" alt="nicas" style={{ height: "400px" }} />
                            </p>
                          </>


                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-1"
                          aria-expanded="false"
                          aria-controls="collapse-1"
                        >
                          <span> Hypertension Control </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">

                          <>
                            <h4 className="text-primary-emphasis">
                              Hypertension Control
                            </h4>
                            <h6>
                              What Is High Blood Pressure?
                            </h6>
                            <ul className="round mt-4">
                              <li>
                                Blood pressure is the force of blood pushing against the walls of the
                                arteries as the heart pumps blood. If this pressure rises and&nbsp;stays
                                high over time (Hypertension), it can damage your heart, blood vessels,
                                kidney and other parts of your body.
                              </li>
                            </ul>
                            <h4 className="text-primary-emphasis">What Cause Hypertension?
                            </h4>
                            <ul className="round mt-2">
                              <li>
                                Hypertension is commonly caused by hemodynamic abnormalities associated
                                with high Peripheral Resistance, High Cardiac Output, high Total Body
                                Water (TBW) or a combination of these factors. Figure 1 illustrates the
                                physiology of Hypertension.
                              </li>
                            </ul>
                            <p>
                              <img className="mt-4" src="/assets/img/nicas/clinical-app-heart-fail-1-1-768x476.png" alt="nicas" style={{ height: "300px" }} />
                            </p>
                            <h4 className="text-primary-emphasis"> Figure 1: The Physiology of Hypertension</h4>
                            <h6 className="mt-3">
                              Blood Pressure Numbers
                            </h6>
                            <ul className="round mt-4">
                              <li>
                                Blood pressure is measured as systolic and diastolic pressures. “Systolic”
                                refers to blood pressure when the heart beats while pumping blood.
                                “Diastolic” refers to blood pressure when the heart is at rest between
                                beats.
                              </li>
                              <li>
                                The table below shows categories for blood pressure levels in adults
                                (measured in millimeters of mercury or mmHg). It also shows which numbers
                                put you at greater risk for health problems. See Figure 2 for blood
                                pressure values.
                              </li>
                            </ul>
                            <p>

                              <img className="mt-4" src="/assets/img/nicas/Figure-2-High-blood-pressure-values-300x192.png" alt="nicas" style={{ height: "300px" }} />

                            </p>
                            <h4 className="text-primary-emphasis">Figure 2: High blood pressure values</h4>
                            <h6 className="mt-3">How Hypertension is Currently Being Treated?</h6>

                            <ul className="round mt-4">
                              <li>
                                Due to lack of reliable instrumentation capable of measuring hemodynamic
                                abnormalities, doctors, to a certain extent, are force to work in the dark
                                resulting compromised treatment.
                              </li>
                            </ul>
                            <h4 className="text-primary-emphasis"> What is NICaS Inspection?  </h4>
                            <ul className="round mt-2">
                              <li>
                                <strong>NICaS</strong>&nbsp;is a revolutionary device that is capable of
                                indicating the exact cause of hypertension based on objective hemodynamic
                                parameters.
                              </li>
                              <li>
                                What are the Benefits of&nbsp;<strong>NICaS</strong>&nbsp;Inspection?
                              </li>
                              <li>
                                Enable your doctor to provide you the exact treatment that will maximized
                                your Hypertension control.
                              </li>
                              <li>
                                Enable your doctor to trend over time the effectiveness of your treatment
                                and adjust treatment accordingly.
                              </li>
                            </ul>
                            <h4 className="text-primary-emphasis"> How NICaS Inspection Is Done?
                            </h4>
                            <ul className="round mt-2">
                              <li>
                                NICaS inspection is very simple: all you need to do is lay down (no need
                                to undress!), two sensors will be attached to your left wrist and right
                                ankle and the results will appear in just 2 minutes.
                              </li>
                              <li>
                                The inspection is FDA cleared, very accurate, not invasive, no radiation
                                and absolutely no pains.
                              </li>
                            </ul>
                            <h4 className="text-primary-emphasis"> Case Study:&nbsp;Hypertension</h4>
                            <p>2 Hypertension patients are under evaluation:</p>
                            <p>
                              Patient A: blood pressure – 176/76 and patient B: blood pressure – 210/98
                            </p>
                            <p>Additional data available for the physician includes:</p>
                            <div>Attention: The internal data of table “4” is corrupted!</div>
                            <p>
                              <strong>NICaS</strong>&nbsp;inspection reveal that Patient A is
                              Vasoconstricted (low Cardiac Index and high Peripheral Resistance) and
                              Patient B in Hyperdynamic with high Cardiac Index and normal Peripheral
                              Resistance. See Figure 3&nbsp;for&nbsp;<strong>NICaS</strong>
                              &nbsp;measurement report of both patients.
                            </p>
                            <p>

                              <img className="mt-4" src="/assets/img/nicas/nicas-m-r-new-copy-300x147.png" alt="nicas" style={{ height: "200px" }} />
                            </p>
                            <p>Figure 3: NICaS measurement reports</p>
                            <p>
                              <strong>NICaS</strong>&nbsp;additional information suggest that patient A is
                              Vasoconstricted therefore needs Vasodilator agents (such as ACEI or ARB) and
                              patient B is Hyperdynamic therefore needs negative inotropic agents (such as
                              BB or CCB)
                            </p>
                            <p>References:</p>
                            <ul className="round mt-4">
                              <li>
                                <a href="http://sandor.co.in/nicas-hemodynamic-navigator/#CliniclStudies">
                                  Hector O. Ventura, Sandra J. Taler and John E. Strobeck. Hypertension as
                                  a Hemodynamic Disease: The Role of Impedance Cardiography in Diagnostic,
                                  Prognostic and Therapeutic Decision Making. American Journal of
                                  Hypertension 18, No. 2, Part 2:26S-43S, February 2005
                                </a>
                              </li>
                              <li>
                                <a href="http://sandor.co.in/nicas-hemodynamic-navigator/#CliniclStudies">
                                  Ronald D. Smith et al. Value of Noninvasive Hemodynamics to Achieve
                                  Blood Pressure Control in Hypertension Subjects. Hypertension
                                  2006;47:771-777, Mar 6, 2006
                                </a>
                              </li>
                            </ul>
                          </>



                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-2"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          <span> CRT Optimization </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">

                          <>
                            <h4 className="text-primary-emphasis">
                              CRT Implantation and Optimization
                            </h4>
                            <p>
                              Cardiac Resynchronization Therapy (CRT) is being used more and more as a
                              therapy method for HF problems rather than therapy of arrhythmia problems as
                              is done by AV pacemakers.
                            </p>
                            <p>Currently, the use of CRT suffers from 2 major problems:</p>
                            <ul className="round mt-4">
                              <li>High rate (30%) of non responsive patient for CRT implantation.</li>
                              <li>
                                Lacking of a simple and easy to use method for CRT optimization results in
                                compromised Cardiac Output improvement and reduced rate of success in
                                solving HF problems.
                              </li>
                            </ul>
                            <p>
                              Bioimpedance cardiograph can provide a good solution for CRT
                              optimization&nbsp;(1).
                            </p>
                            <p>
                              <strong>NICaS</strong>&nbsp;is a superior device for this application in
                              comparison to other bioimpedance devices due to its high accuracy as well as
                              reproducibility and its wrist – ankle sensors configuration that keep the
                              thorax area free of sensors.
                            </p>
                            <p>
                              As a result, the&nbsp;<strong>NICaS</strong>&nbsp;can solve these 2 major
                              problems.
                            </p>
                            <p>
                              <strong>High rate of non responders</strong>
                            </p>
                            <p>
                              Non responders are in many cases the results of a compromised location of
                              the electrodes in the right atrium, and both ventricles.&nbsp;
                              <strong>NICaS</strong>&nbsp;can provide left ventricular contraction
                              feedback during the implantation, resulting in the ability to locate the
                              electrodes at more responsive locations and reducing rate of non responders.
                            </p>
                            <p>
                              <strong>Optimization</strong>
                            </p>
                            <p>
                              By obtaining a continuous Cardiac Output reading by using the&nbsp;
                              <strong>NICaS</strong>, AV and VV delays can be set so that Cardiac Output
                              can be maximized. See Figure 1 for&nbsp;<strong>NICaS</strong>
                              &nbsp;Comparative Screen during CRT optimization.
                            </p>
                            <p>
                              <img className="mt-4" src="/assets/img/nicas/clinical-app-CRT-optamization-300x186.png" alt="nicas" style={{ height: "250px" }} />

                              <em>NICaS Comparative Screen utilized for CRT optimization</em>
                            </p>
                            <p>References:</p>
                            <ul>
                              <li>
                                Konstantin M. Heinroth at el: Impedance Cardiography: a useful and
                                reliable tool in optimization of CRT; Europace 2007 9,744-750
                              </li>
                              <li>
                                Serge Barold at el: Echocardiographic optimization of the atrioventricular
                                and interventricular intervals during cardiac resynchronization; Europace
                                2008 10,88-95
                              </li>
                              <li>
                                Robert G. Turcott et al, Measurement Precision in the Optimization of
                                Cardiac Resynchronization Therapy, Circulation Heart Failure
                                2010;3:395-404, February 22, 2010
                              </li>
                            </ul>
                          </>


                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-3"
                          aria-expanded="false"
                          aria-controls="collapse-3"
                        >
                          <span> Hemodynamics monitoring during anesthesia </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">

                          <>
                            <h4 className="text-primary-emphasis">
                              Hemodynamics monitoring during anesthesia
                            </h4>
                            <p>
                              Stroke Volume, Cardiac Output and Total Peripheral Resistance are major
                              vital signs that can be of great help if monitored continuously during
                              anesthesia.
                            </p>
                            <p>
                              The common practice of measuring these parameters involved the insertion of
                              a catheter which creates additional complication and risk. As a result, the
                              utilization of such catheter is limited to special cases only.
                            </p>
                            <p>
                              <strong>NICaS</strong>&nbsp;(Non Invasive Cardiac System) can monitor these
                              parameters by means of just 2 sensors placed on patient both wrists. This
                              noninvasive, easy to use and low cost technology can be a useful solution to
                              provide anesthesiologist a better understanding of patients hemodynamics.
                            </p>
                            <p>
                              <img className="mt-4" src="/assets/img/nicas/NICaS-sensors-connection-during-surgery-768x399.png" alt="nicas" style={{ height: "330px" }} />
                            </p>
                            <p>NICaS sensors connection during surgery</p>
                            <p className="d-flex gap-2">
                              <img className="mt-4" src="/assets/img/nicas/Figure-2-NICaS-during-surgery-300x231.png" alt="nicas" style={{ height: "226px" }} />

                              &nbsp;
                              <img className="mt-4" src="/assets/img/nicas/Figure-3-NICaS-screen-during-surgery1-768x461.png" alt="nicas" style={{ height: "226px" }} />
                            </p>
                          </>


                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-4"
                          aria-expanded="false"
                          aria-controls="collapse-4"
                        >
                          <span>Cardiac Output</span>
                        </button>
                      </h2>
                      <div
                        id="collapse-4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">

                          <h4 className="text-primary-emphasis mb-3"> Non Invasive Cardiac Output </h4>
                          <p>
                            Non Invasive Cardiac Output is the amount of blood pumped by the heart in
                            one minute. Cardiac output – It is the product of heart rate x Stroke volume
                            and is expressed in absolute terms of liters / minute (l/min). Cardiac
                            output can be normalized for body size by divided cardiac output by body
                            surface area (BSA) and is named cardiac index. The advantage of normalizing
                            cardiac output for BSA is that the normal range would apply to all patients,
                            regardless of size. For example, a large male might have a non invasive
                            cardiac output of 6.8 l/min and a small female might have a cardiac output
                            of 3.4 l/min. However, when normalized for body size, both might have a
                            cardiac index of 3.0 l/min.
                          </p>
                          <p>
                            One of the major factors which affect Non Invasive Cardiac Output is the
                            metabolic rate of the body. Consequently, factors that affect the metabolic
                            rate also affect the&nbsp;Non Invasive Cardiac Output. For example:
                          </p>
                          <p>
                            <strong>Age</strong>: metabolic rate is highest in youth and gradually
                            decreases with age. For example, a cardiac index of 4.5 l/min/m2 is normal
                            for a 7 year old, while 2.5 l/min/m2 is normal for a 70 year old. Cardiac
                            Index decreases by about 5% per decade from age 20 to age 70.
                          </p>
                          <p>
                            <strong>Posture</strong>: cardiac output will decrease by approximately 10%
                            when a person changes from a lying to a sitting position and approximately
                            20% from a lying to a standing position.
                          </p>
                          <p>
                            <strong>Exercise</strong>: &nbsp;In well-conditioned elite athletes, cardiac
                            output may increase six-fold from rest to maximal exercise. &nbsp;In other
                            words, the resting cardiac output of 5 l/min may increase to 30 l/min at
                            maximal exercise.
                          </p>
                          <p>
                            <strong>Body Temperature:</strong>&nbsp;High body temperature or fever will
                            cause an increase in cardiac output. Low body temperature will result in a
                            lowering of cardiac output (unless the patient begins to shiver, which
                            increases metabolic needs of the muscles and will result in increasing
                            cardiac output). In some surgical procedures, such as coronary artery bypass
                            surgery, the patient’s body temperature is purposely lowered to decrease the
                            metabolic and, consequently, cardiac demands during the procedure.
                          </p>
                          <p>
                            <strong>Body Size and Composition:</strong>&nbsp;The larger a person’s body
                            size, the greater the cardiac output will be. For example, a cardiac output
                            of 10 l/min may be normal for a person weighing 120 kg, while 4 l/min may be
                            normal for a person weighing 50 kg.
                          </p>
                          <p>
                            <strong>Gender</strong>: Because males typically have more muscle mass than
                            females, the resting cardiac output of males will normally be higher than
                            the cardiac output of females. For example, a male who weighs 80 kg would
                            normally have a higher resting cardiac output (approximately 10%) than a
                            female who also weighs 80 kg.
                            <br />
                            <strong>Environmental Temperature and Humidity:</strong>&nbsp;As the body’s
                            core temperature increases or decreases, the cardiovascular system responds
                            to maintain the desired core temperature. Reflex changes occur not only in
                            cardiac output, but also in many other parameters including systemic
                            vascular resistance. To achieve the desired body temperature, cardiac output
                            is either increased or decreased and blood flow to the skin is either
                            increased to cool the body or decreased to maintain body temperature.
                          </p>
                          <p>
                            <strong>Critically Ill / Post Surgery:</strong>&nbsp;The body’s metabolic
                            demands increase significantly when the body is ill or traumatized. In
                            critically ill or post-surgical patients, it is very common to see cardiac
                            output higher than normal (increases of 50% or more are not uncommon).
                          </p>
                          <p>
                            <strong>Diseases</strong>: Diseases, such as hyperthyroidism or
                            hypothyroidism (abnormal function of the thyroid gland), will also affect
                            cardiac output.
                          </p>
                          <p>
                            <strong>Psychological Factors:</strong>&nbsp;Strong emotions, such as fear
                            and anxiety, also result in increased cardiac output, even though the body’s
                            metabolic demands have not appreciably changed. This is known as the “fight
                            or flight” syndrome, since the body is physiologically preparing to fight or
                            flee. For example, if you are very nervous about demonstrating the NICaS to
                            a group of doctors and nurses and if you hook yourself up to the NICaS, your
                            hemodynamic parameters will be much higher than they would normally be at
                            rest. Another very common example of psychological factors affecting
                            physiological parameters is the “anticipatory response.” When a person
                            begins thinking about strenuous exercise, the cardiovascular system begins
                            to increase its function to prepare the body for the increased metabolic
                            demands of exercise. An excellent example of this is a sprinter preparing
                            for a 100-meter dash. When he is in the starting blocks prior to the start
                            of the race, his metabolic demands are very low; however, his heart rate,
                            blood pressure, cardiac output are extremely high as his body anticipates
                            the increased metabolic demands that will occur when the race starts.
                          </p>
                          <p>
                            Cardiac output is an extremely informative physiological parameter. Changes
                            in cardiac output can provide a much earlier warning of significant changes
                            in the body’s function or metabolic needs than changes in blood pressure.
                            For example, cardiac output may change as much as 30% before any changes are
                            noted in blood pressure. This is due to reflex cardiovascular changes
                            (vasoconstriction and vasodilation) that attempt to maintain a stable blood
                            pressure.
                            <br />
                            While monitoring critically ill patients, it is important to remember that
                            the metabolic needs of these patients are much greater than healthy persons
                            of the same size. Consequently, a cardiac index of 2.0 – 3.0 l/min for a
                            critically ill patient could be life-threatening, even though 2.5 l/min is
                            usually considered within normal limits. In addition, a sudden reduction in
                            a patient’s cardiac output/index could be life-threatening. In general,
                            cardiac index values of less than 1.8 l/min/m2 are considered extremely
                            serious and values less than 1.0 l/min/m2 are not sufficient to sustain
                            life.
                          </p>
                          <p>
                            Cardiac output may be increased by modifying any of the underlying
                            parameters that affect the cardiac output. These include increasing heart
                            rate, increasing stroke volume by increasing preload (end diastolic volume),
                            contractility (speed and strength of contraction of the left ventricle) or
                            decreasing afterload (systemic vascular resistance).
                          </p>
                          <p>
                            Unlike the “gold standard” of measuring cardiac output that require the
                            insertion of a catheter into the heart, NICaS offer a simple and
                            non-invasive way to measure cardiac output. This enable clinicians at all
                            levels of healthcare to measure cardiac output.
                          </p>


                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-5"
                          aria-expanded="false"
                          aria-controls="collapse-5"
                        >
                          <span> Stroke Volume </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">

                          <h4 className="text-primary-emphasis mb-3"> Non Invasive Stroke Volume</h4>
                          <p>
                            Non Invasive Stroke Volume is the amount of blood (in ml) pumped by the left
                            ventricle each heartbeat. Stroke index is the stroke volume divided by Body
                            Surface Area (BSA), to normalize it for body size. Normal rage of Stroke
                            volume is 60 – 130 ml and normal range of Stroke index is 35 – 65 ml/m2.
                            <br />
                            There are three primary factors that determine stroke volume. These
                            are&nbsp;<strong>preload</strong>,&nbsp;<strong>contractility</strong>,
                            and&nbsp;<strong>afterload</strong>.
                          </p>
                          <p>
                            <strong>Preload</strong>&nbsp;refers to the amount of blood in the ventricle
                            at the end of diastolic filling, which is also known as “End Diastolic
                            Volume” (EDV). EDV is affected by several parameters including amount of
                            circulating blood, venomotor tone (venous resistance), diastolic filling
                            time (which is determined by heart rate), and posture. The more blood
                            available and the longer the ventricle has to fill, the greater EDV.
                          </p>
                          <p>
                            <strong>Myocardial contractility</strong>&nbsp;is determined by the
                            intrinsic force-velocity relationship of the myocardial muscle fibers. The
                            contractile state of the heart may be affected by neural (parasympathetic or
                            sympathetic nerve stimulation) and/or humoral (substances in the blood
                            stream secreted by the body systems (e.g., epinephrine)), or pharmacological
                            agents, such as positive inotropes like digitalis).
                          </p>
                          <p>
                            <strong>Afterload</strong>&nbsp;refers to the amount of resistance to blood
                            flow in the arterial system. The overall resistance is determined by the
                            diameter of the aortic valve, distensibility of the aorta, and degree of
                            constriction/dilation of the arterial system. When other factors are held
                            constant, the greater the resistance, the less volume will be ejected with
                            each heartbeat.
                          </p>
                          <p>
                            <img className="mt-4" src="/assets/img/nicas/NIMEDICAL-tanya-yna.co_.il-דואר-Yna.png" alt="nicas" style={{ height: "238px" }} />
                          </p>
                          <p>
                            <strong>Stroke Volume role in the physiology of delivered O2</strong>
                            <br />
                            There are two primary reasons Stroke volume may be low: hypovolemia (low
                            blood volume, which results in low preload) and left ventricular dysfunction
                            (poor myocardial contractility). Consequently, changes in Stroke volume can
                            be early indicators of changes in blood volume and myocardial contractility.
                            These changes will occur earlier than changes in cardiac output.
                            <br />
                            The usage of Stroke volume is limited as the measurement of Stroke volume is
                            complicated and expensive.
                            <br />
                            NICaS can measure Stroke volume by only attaching 2 sensors to patient’s two
                            limbs.
                            <br />
                            For more details click here.
                          </p>
                          <p>
                            This enables clinicians, at all levels of healthcare, to utilize&nbsp;Stroke
                            Volume&nbsp;as an early indicator of changes in blood volume and myocardial
                            contractility.
                          </p>

                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-6"
                          aria-expanded="false"
                          aria-controls="collapse-6"
                        >
                          <span> Hemodynamic Monitoring </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">


                          <h4 className="text-primary-emphasis mb-3"> Hemodynamic Monitoring </h4>
                          <p>
                            Our approach for Hemodynamic monitoring includes noninvasive measurements
                            of&nbsp;hemodynamic parameters by the Non Invasive Cardiac System (NICaS)
                            and trend the data by the&nbsp;Hemodynamic Navigator™. The Hemodynamic
                            Navigator™&nbsp;is a novel multi-dimensional representation of the
                            cardiovascular status. It provides a good understanding of the
                            interrelations between the cardiac power and the vascular resistance, Hans
                            enables to guide therapy of many cardiovascular syndromes into a better
                            hemodynamic state.
                          </p>
                          <p>
                            The Hemodynamic Navigator consists of 2 graphs: Cardiovascular status and
                            cardiac function.
                            <br />
                            The Cardiovascular status graph consists of the Cardiac Output Index (CI) as
                            the X-axis, the Blood pressure as the Y-axis and lines of Total Peripheral
                            Resistance Index (TPRI) and Cardiac Power Index (CPI). In addition, the
                            normal range is marked by green lines. Patient’s cardiovascular status
                            represents by a black dot. A red triangle and a blue square represent the
                            systolic and diastolic blood pressure respectively.
                          </p>
                          <p>
                            <img className="mt-4" src="/assets/img/nicas/tanya-yna.co_.il-Yna2.png" alt="nicas" style={{ height: "417px" }} />

                            The Cardiac Function graph consists of the Heart Rate (HR) in the X-axis,
                            the Stroke Volume&nbsp;Index (SI) in the y-axis and lines of the Cardiac
                            Output Index (CI). In addition, the normal range is&nbsp;marked by green
                            lines. Patient’s cardiac function represents by a black dot.
                          </p>
                          <div>
                            <img className="mt-4" src="/assets/img/nicas/image_002.png" alt="nicas" style={{ height: "364px" }} />

                            The 2 graphs (Cardiovascular Status and Cardiac Function) provide a very
                            clear understanding of patient’s pathophysiology by the location of the
                            black dots. Various areas represent different syndromes, as can be seen on
                            the graph below, while the respond to treatment or trend over time is very
                            clear.
                            <br />
                            The Hemodynamic Navigator is very effective to manage patients with
                            Hypertension, Congestive Heart Failure (CHF), Patients hospitalized in
                            Internal Medicine and Cardiology departments. In addition, it is an
                            effective tool support drug titration in ICU and ICCU.
                          </div>
                          <div>
                            <img className="mt-4" src="/assets/img/nicas/image_003.png" alt="nicas" style={{ height: "360px" }} />
                          </div>


                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-7"
                          aria-expanded="false"
                          aria-controls="collapse-7"
                        >
                          <span> Impedance Cardiography </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-7"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <>
                            <h4 className="text-primary-emphasis mb-3">Impedance Cardiography </h4>
                            <p>
                              Impedance Cardiography (ICG) is a noninvasive technology for measuring total
                              electrical conductivity of the human body and its changes over time to
                              process continuously a number of hemodynamic parameters such as Stroke
                              Volume (SV), Heart Rate (HR), Cardiac Output (CO), Body water, Total
                              peripheral Resistance (TPR) and Cardiac Power (CP).
                            </p>
                            <p>Two basic technologies are currently in use for impedance cardiography:</p>
                            <ul className="round mt-4">
                              <li>
                                The Thoracic ICG, were the sensors are placed on the root of the neck and
                                the lower part of the chest.
                              </li>
                              <li>
                                The Whole-body or Regional ICG, were four pairs of sensors are used, one
                                pair on each limb or only two pairs of sensors are used, performing best
                                when placed on one wrist and on the contralateral ankle.
                              </li>
                            </ul>
                            <p>
                              The most significant advantage of the Whole-body Impedance Cardiography –
                              ICG in comparison to the Thoracic ICG is the use of the peripheral impedance
                              signal for the calculation of the Stroke Volume. About 75% of the peripheral
                              impedance waveform is borne by the systolic blood volume pulsation of the
                              arterial vasculature of the upper and lower limbs, and the remaining 25%
                              arrive from the trunk (thorax).
                            </p>
                            <p>
                              While the Whole-body Impedance Cardiography -ICG peripheral volumetric
                              signal is borne throughout the length of the arterial tree, the Thoracic ICG
                              waveform is generated by multiple sources including the aorta, lungs, vena
                              cava, and artifacts due to heart movement.
                            </p>
                            <p>
                              As a result, the peripheral systolic impedance changes are more reliable
                              then the thoracic impedance changes for calculating the cardiac stroke
                              volume.
                              <br />
                              In addition, due to the use of peripheral signals, the responses to
                              vasodilation therapy is better depicted by the Whole-body ICG (that is
                              utilized by NICaS) when compared with a Thoracic Impedance Cardiography
                              -ICG.
                            </p>
                          </>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-8"
                          aria-expanded="false"
                          aria-controls="collapse-8"
                        >
                          <span> Readmission Reduction </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-8"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h4 className="text-primary-emphasis mb-3"> CHF Readmission Reduction</h4>

                          <p>
                            This letter is to serve as a brief synopsis of our experience with the
                            Cardiac 360 program, which incorporates the NI-Medical Non Invasive Cardiac
                            System (NICaS) impedance cardiography (ICG) device. We piloted this program
                            at two nursing homes locations starting in January of 2014. In order to
                            fully grasp the potential impact of using this program to assist in the
                            assessment and management of residents with heart failure in the nursing
                            home setting – Readmission Reduction – &nbsp;I will provide a brief overview
                            of the burden of heart failure.
                          </p>
                          <p>
                            Heart failure is a syndrome of inadequate delivery of oxygen and nutrients
                            to the tissues of the body, which can be due to a pumping or a relaxing
                            problem of the heart. Many different cardiac disease states will present
                            with heart failure. Heart failure affects over 6 million people in the
                            United States with about 700,000 new cases annually. The majority of
                            admissions to the hospital for heart failure are, in fact, readmissions for
                            heart failure. Approximately 22% of people discharged from the hospital with
                            heart failure will be readmitted within 30 days and approximately 50% will
                            be readmitted within 6 months. Heart failure is the number one Medicare
                            discharge diagnosis and the direct and indirect costs of heart failure are
                            about $40 billion annually.
                          </p>
                          <p>
                            The reasons for the huge financial and functional burden of heart failure
                            are many including an incomplete understanding of the pathophysiology of
                            heart failure, misdiagnoses, suboptimal use of evidence-based therapies, and
                            a lack of a clinically useful, accurate, and consistent means of assessing
                            one’s cardiovascular physiology in real-time. The NICaS utilizing the ICG
                            technology provided by NI-Medical could be just the solution to address all
                            of these limitations.
                          </p>
                          <p>
                            The Cardiac 360 program incorporates an interdisciplinary team approach to
                            reducing heart failure admissions and re-admissions from the nursing home
                            back to the hospital. Physicians and nurse practitioners are trained in
                            advanced principles of cardiovascular hemodynamic as well as the
                            pathophysiology of heart failure. In addition, the team receives weekly case
                            based learning applying these principles and ICG results towards the
                            effective management of heart failure patients. The program is overseen both
                            by a cardiologist with extensive experience in managing heart failure
                            patients and a board certified physician in geriatric medicine.
                          </p>
                          <p>
                            From a clinical standpoint, NICaS is able to provide accurate (highly
                            correlated with invasive hemodynamic monitoring), consistent, and real-time
                            data of one’s cardiovascular physiology.
                          </p>
                          <p>
                            This would facilitate the ability to improve our understanding of one’s
                            cardiovascular state, provide a clue as to what in causing the current
                            state, facilitate titration of medications to more optimal levels, and
                            provide a means of assessing one’s response to medication adjustments.
                          </p>
                          <p>
                            When coupled with a physician or nurse practitioner with a strong
                            understanding of basic cardiovascular physiology, the NICaS device has the
                            potential to revolutionize the management of heart failure in the NH setting
                            and to, more importantly, improve outcomes for residents with this dreaded
                            syndrome.
                          </p>
                          <p>
                            With this introduction in mind, we piloted the Cardiac 360 Program to
                            improve outcomes (as assessed by reduced readmissions to the hospital for
                            heart failure). We identified approximately 40 residents with a history of
                            heart failure. A baseline NICaS measurement was obtained in all residents.
                            Subsequent NICaS assessment was based on the type of resident (short vs.
                            long term), the current clinical condition, the goal of therapy, and the
                            baseline scan. If possible, NICaS scans were performed at regular
                            frequencies (weekly if short-term or weekly if long-term until the resident
                            was deemed stable then at longer intervals ranging between 2-4 weeks).
                          </p>
                          <p>
                            The results of the program were quite impressive. There were no readmissions
                            to the hospital from either site for heart failure in over 6 months. The
                            majority of residents could be optimally titrated on evidence-based
                            medications for heart failure and taken off medications that were not
                            addressing the pathophysiology of the resident as suggested by the NICaS
                            analysis. In addition, we had numerous reports of residents subjectively
                            feeling better and of objective clinical improvement of many residents by
                            the NH staff.
                          </p>
                          <p>A few things are clear in our opinion:</p>
                          <ul className="round mt-4">
                            <li>
                              The Cardiac 360 Program utilizing NICaS technology provided by NI-Medical
                              can effectively provide&nbsp;Readmission Reduction, reduce heart failure
                              admissions and readmissions from the nursing home back to the hospital;
                            </li>
                            <li>
                              The physician or nurse practitioner must understand the NICaS reading and
                              common reasons for abnormalities encountered. The NICaS alone is
                              insufficient to guide patient care without the proper training;
                            </li>
                            <li>
                              The NICaS is accurate, but more importantly, it is consistent. This allows
                              one to assess the clinical response to medication adjustments in a
                              resident over time;
                            </li>
                            <li>
                              The NICaS takes the guesswork out of managing difficult residents with
                              heart failure. It facilitates expeditious optimization of these residents;
                            </li>
                            <li>
                              It affords a comfort level for medication titration not previously seen in
                              these residents;
                            </li>
                            <li>
                              The use of NICaS will, undoubtedly, result in less unanticipated
                              discharges from the NH for decompensated heart failure when used by
                              properly trained clinicians;
                            </li>
                            <li>
                              NICaS will identify residents with impending heart failure before they
                              decompensate allowing time to make necessary adjustments that will prevent
                              the decompensation.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-9"
                          aria-expanded="false"
                          aria-controls="collapse-9"
                        >
                          <span> Non Invasive Hemodynamic </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-9"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h4 className="text-primary-emphasis mb-3"> Non Invasive Hemodynamic Monitoring
                          </h4>
                          <p>
                            Our approach for Hemodynamic monitoring includes noninvasive measurements
                            of&nbsp;hemodynamic parameters by the Non Invasive Cardiac System (NICaS)
                            and trend the data by the&nbsp;Hemodynamic Navigator™. The Hemodynamic
                            Navigator™&nbsp;is a novel multi-dimensional representation of the
                            cardiovascular status. It provides a good understanding of the
                            interrelations between the cardiac power and the vascular resistance, Hans
                            enables to guide therapy of many cardiovascular syndromes into a better
                            hemodynamic state.
                          </p>
                          <p>
                            The Hemodynamic Navigator consists of 2 graphs: Cardiovascular status and
                            cardiac function.
                            <br />
                            The Cardiovascular status graph consists of the Cardiac Output Index (CI) as
                            the X-axis, the Blood pressure as the Y-axis and lines of Total Peripheral
                            Resistance Index (TPRI) and Cardiac Power Index (CPI). In addition, the
                            normal range is marked by green lines. Patient’s cardiovascular status
                            represents by a black dot. A red triangle and a blue square represent the
                            systolic and diastolic blood pressure respectively.
                          </p>
                          <p>
                            <img className="mt-4" src="/assets/img/nicas/img_001.png" alt="nicas" style={{ height: "415px" }} />
                          </p>
                          <p>
                            The Cardiac Function graph consists of the Heart Rate (HR) in the X-axis,
                            the Stroke Volume&nbsp;Index (SI) in the y-axis and lines of the Cardiac
                            Output Index (CI). In addition, the normal range is&nbsp;marked by green
                            lines. Patient’s cardiac function represents by a black dot.
                          </p>
                          <p>
                            <img className="mt-4" src="/assets/img/nicas/img_002.png" alt="nicas" style={{ height: "366px" }} />
                          </p>
                          <p>
                            The 2 graphs (Cardiovascular Status and Cardiac Function) provide a very
                            clear understanding of patient’s pathophysiology by the location of the
                            black dots. Various areas represent different syndromes, as can be seen on
                            the graph below, while the respond to treatment or trend over time is very
                            clear.
                            <br />
                            The Hemodynamic Navigator is very effective to manage patients with
                            Hypertension, Congestive Heart Failure (CHF), Patients hospitalized in
                            Internal Medicine and Cardiology departments. In addition, it is an
                            effective tool support drug titration in ICU and ICCU.
                          </p>
                          <p>
                            <img className="mt-4" src="/assets/img/nicas/img_003.png" alt="nicas" style={{ height: "369px" }} />
                          </p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <h4 className="text-primary-emphasis mt-5"> Clinical Studies </h4>

                <div className="accordion1 mt-4">
                  <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-0"
                          aria-expanded="true"
                          aria-controls="collapse-0"
                        >
                          <span> Clinical Studies </span>
                        </button>
                      </h2>
                      <div
                        id="collapse-0"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body overflow-x-auto">

                          <p>
                            <strong>
                              Hemodynamic response to fluid removal during hemodialysis: categorization
                              of causes of intradialytic hypotension.&nbsp;
                            </strong>
                            <em>Nephrology Dialysis Transplantation</em>, Volume 33, Issue 9, 1
                            September 2018, Pages 1643–1649
                          </p>
                          <p>
                            <strong>Authors:</strong>
                          </p>
                          <p>
                            Nathan W Levin, Marcia H F G de Abreu, Lucas E Borges, Helcio A Tavares
                            Filho, Rabia Sarwar, Surendra Gupta, Tahir Hafeez, Shaul Lev, Caroline
                            Williams
                          </p>
                          <p>
                            <a
                              href="https://academic.oup.com/ndt/article-abstract/33/9/1643/4970569"
                              target="_blank"
                              rel="noopener"
                            >
                              http://onlinelibrary.wiley.com/doi/10.1111/hdi.12589/abstract
                            </a>
                          </p>
                          <hr />
                          <p>
                            <strong>
                              Comparison of stroke volume measurements during hemodialysis using
                              bioimpedance cardiography and echocardiography.
                            </strong>
                            <em>Hemodialysis International. 10 August 2017. DOI:10.1111/hdi.12589</em>
                          </p>
                          <p>
                            <strong>Authors:</strong>
                          </p>
                          <p>
                            Michael J. Germain, Jyovani Joubert, Daniel O’Grady, Brian H. Nathanson,
                            Yossi Chait, Nathan W. Levin
                            <strong>
                              <br />
                            </strong>
                          </p>
                          <p>
                            <a
                              href="http://onlinelibrary.wiley.com/doi/10.1111/hdi.12589/abstract"
                              target="_blank"
                              rel="noopener"
                            >
                              http://onlinelibrary.wiley.com/doi/10.1111/hdi.12589/abstract
                            </a>
                          </p>
                          <hr />
                          <p>
                            <strong>
                              A Phase 2a dose-escalation study of the safety, tolerability,
                              pharmacokinetics and haemodynamic effects of BMS-986231 in hospitalized
                              patients with heart failure with reduced ejection fraction.&nbsp;
                            </strong>
                            <em>Eur J of Heart Failure. 2017 Jul 5</em>.
                          </p>
                          <p>
                            <strong>
                              Authors:
                              <br />
                            </strong>
                            Tita C, Gilbert EM, Van Bakel AB, Grzybowski J, Haas GJ, Jarrah M, Dunlap
                            SH, Gottlieb SS, Klapholz M, Patel PC, Pfister R, Seidler T, Shah KB,
                            Zieliński T, Venuti RP, Cowart D, Foo SY, Vishnevsky A, Mitrovic V
                          </p>
                          <p>
                            <a
                              href="http://onlinelibrary.wiley.com/doi/10.1002/ejhf.897/full"
                              target="_blank"
                              rel="noopener"
                            >
                              http://onlinelibrary.wiley.com/doi/10.1002/ejhf.897/full
                            </a>
                          </p>
                          <hr />
                          <p>
                            <strong>
                              The Hemodynamics of Labor in Women Undergoing Vaginal and Cesarean
                              Deliveries as Determined by Whole Body Bioimpedance.&nbsp;
                            </strong>
                            <em>Am J Perinatolog. DOI: 10.1055/s-0037-1606368</em>
                          </p>
                          <p>
                            <strong>
                              Authors:
                              <br />
                            </strong>
                            Eran Ashwal, Shiri Shinar, Sharon Orbach-Zinger, Shaul Lev, Roi Gat, Liron
                            Kedar, Yehuda Pauzner, Amir Aviram, Yariv Yogev, Liran Hiersch
                          </p>
                          <p>
                            <a
                              href="https://www.thieme-connect.com/products/ejournals/abstract/10.1055/s-0037-1606368"
                              target="_blank"
                              rel="noopener"
                            >
                              https://www.thieme-connect.com/products/ejournals/abstract/10.1055/s-0037-1606368
                            </a>
                          </p>
                          <hr />
                          <p>
                            <strong>
                              Cardiac hemodynamics before, during and after elective cesarean section
                              under spinal anesthesia in low-risk women.&nbsp;
                            </strong>
                            <em>J Perinato. 2017 Jul; 37(7): 793-799</em>
                          </p>
                          <p>
                            <strong>
                              Authors:
                              <br />
                            </strong>
                            Maya Ram, Anat Lavie, Shaul Lev, Yair Blecher, U Amikam, Yael Shulman, Tomer
                            Avnon, Eran Weiner, Ariel Many
                          </p>
                          <p>
                            <a
                              href="https://www.ncbi.nlm.nih.gov/pubmed/28406485"
                              target="_blank"
                              rel="noopener"
                            >
                              https://www.ncbi.nlm.nih.gov/pubmed/28406485
                            </a>
                          </p>
                          <hr />
                          <p>
                            <strong>
                              Casting doubt on the value of assessing the cardiac index in
                              pregnancy.&nbsp;
                            </strong>
                            <em>J Matern Fetal Neonatal Medication. 2017 Aug 13:1-5</em>
                          </p>
                          <p>
                            <strong>
                              Authors:
                              <br />
                            </strong>
                            Ram M, Lavie A, Lev S, Blecher Y, Amikam U, Shulman Y, Avnon T, Weiner E,
                            Many A
                          </p>
                          <p>
                            <a
                              href="https://www.ncbi.nlm.nih.gov/pubmed/28805112"
                              target="_blank"
                              rel="noopener"
                            >
                              https://www.ncbi.nlm.nih.gov/pubmed/28805112
                            </a>
                          </p>
                          <hr />
                          <p>
                            Y.Matsuda et al.&nbsp;
                            <strong>
                              Perioperative sequential monitoring of hemodynamic parameters in patients
                              with pheochromocytoma using the NICaS
                            </strong>
                            .&nbsp;<em>Endocrine J. 2014</em>
                          </p>
                          <p>
                            <a
                              href="http://www.pubfacts.com/detail/24621777/Perioperative-sequential-monitoring-of-hemodynamic-parameters-in-patients-with-pheochromocytoma-usin"
                              target="_blank"
                              rel="noopener"
                            >
                              http://www.pubfacts.com/detail/24621777/Perioperative-sequential-monitoring-of-hemodynamic-parameters-in-patients-with-pheochromocytoma-usin
                            </a>
                          </p>
                          <hr />
                          <p>
                            Yu Taniguchi et al.&nbsp;
                            <strong>
                              Noninvasive and Simple Assessment of Cardiac Output and Pulmonary Vascular
                              Resistance With Whole-Body Impedance Cardiography Is Useful for Monitoring
                              Patients With Pulmonary Hypertension
                            </strong>
                            ,&nbsp;<em>Circulation Journal, June 12,2013</em>
                          </p>
                          <p>
                            <a
                              href="http://www.ncbi.nlm.nih.gov/pubmed/23759655"
                              target="_blank"
                              rel="noopener"
                            >
                              http://www.ncbi.nlm.nih.gov/pubmed/23759655
                            </a>
                          </p>
                          <hr />
                          <p>
                            Yoseph Rozenman et al,&nbsp;
                            <strong>
                              Detection of left ventricular systolic dysfunction using a newly
                              developed, laptop based, impedance cardiography index
                            </strong>
                            ,&nbsp;
                            <em>
                              International Journal of Cardiology Volume 149, Issue 2: 248-250, 2 June
                              2011
                            </em>
                          </p>
                          <p>
                            <a
                              href="http://www.internationaljournalofcardiology.com/article/S0167-5273%2811%2900190-2/abstract"
                              target="_blank"
                              rel="noopener"
                            >
                              http://www.internationaljournalofcardiology.com/article/S0167-5273%2811%2900190-2/abstract
                            </a>
                          </p>
                          <hr />
                          <p>
                            G Cotter, A Schachner, L Sasson, H Dekel and Y Moshkovitz.
                            <strong>
                              &nbsp;Impedance cardiography revisited (comparison to Thoracic Impedance)
                            </strong>
                            .&nbsp;<em>Physiological Measurement</em>&nbsp;27 (2006) 817-827, July 2006
                          </p>
                          <p>
                            Yusuke Tanino et al. Whole Body Bioimpedance Monitoring for Outpatient
                            Chronic Heart Failure Follow up, circulation Journal 73:1074-1079, June 2009
                          </p>
                          <p>
                            <a
                              href="http://www.ncbi.nlm.nih.gov/pubmed/16868348"
                              target="_blank"
                              rel="noopener"
                            >
                              http://www.ncbi.nlm.nih.gov/pubmed/16868348
                            </a>
                          </p>
                          <hr />
                          <p>
                            Marina Leitman et al.&nbsp;
                            <strong>
                              Non-invasive measurement of cardiac output by Whole-body bio-impedance
                              during dobutamine stress echocardiography: Clinical implementations in
                              patients with left ventricular dysfunction and ischemia
                            </strong>
                            .&nbsp;<em>The European Journal of Heart Failure</em>&nbsp;8 (2006) 136-140
                          </p>
                          <p>
                            <a
                              href="http://www.nicascardiocare.co.uk/media/4867/Eur-J-of-HF-06-NI-measurement-of-CO-by-WB-BI-during-dobutamine-stress-Marina-Leitman.pdf"
                              target="_blank"
                              rel="noopener"
                            >
                              http://www.nicascardiocare.co.uk/media/4867/Eur-J-of-HF-06-NI-measurement-of-CO-by-WB-BI-during-dobutamine-stress-Marina-Leitman.pdf
                            </a>
                          </p>
                          <hr />
                          <p>
                            Oscar Luis Paredes et al.
                            <strong>
                              &nbsp;Impedance Cardiography for Cardiac Output Estimation – Reliable of
                              Wrist-to-Ankle Electrical Configuration –
                            </strong>
                            .&nbsp;<em>Circulation Journal</em>&nbsp;2007; 70: 1164-1168, September 2006
                          </p>
                          <p>
                            <a
                              href="http://www.ncbi.nlm.nih.gov/pubmed/16936430"
                              target="_blank"
                              rel="noopener"
                            >
                              http://www.ncbi.nlm.nih.gov/pubmed/16936430
                            </a>
                          </p>
                          <hr />
                          <p>
                            Gad Cotter, Yaron Moshkovitz, Edo Kaluski, Amram J. Cohen, Hilton Miller,
                            Daniel Goor and Zvi Vered.&nbsp;
                            <strong>
                              Accurate, Noninvasive Continuous Monitoring of Cardiac Output by
                              Whole-Body Electrical bioimpedance
                            </strong>
                            .&nbsp;<em>CHEST</em>&nbsp;2004;125;1431-1440
                          </p>
                          <p>
                            <a
                              href="http://www.ncbi.nlm.nih.gov/pubmed/15078756"
                              target="_blank"
                              rel="noopener"
                            >
                              http://www.ncbi.nlm.nih.gov/pubmed/15078756
                            </a>
                          </p>
                          <hr />
                          <p>
                            Guillermo Torre-Amiot et al.&nbsp;
                            <strong>
                              Whole-Body Electrical Bio-Impedance is accurate in Noninvasive
                              Determination of Cardiac Output: A Thermodilution controlled, Prospective,
                              Double Blinded Evaluation
                            </strong>
                            .&nbsp;<em>European Journal of Heart Failure</em>, June 2004
                          </p>
                          <p>
                            <a
                              href="https://www.google.co.il/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Whole-Body+Electrical+Bio-Impedance+is+accurate+in+Noninvasive+Determination+of+Cardiac+Output:+A+Thermodilution+controlled%2C+Prospective%2C+Double+Blinded+Evaluation"
                              target="_blank"
                              rel="noopener"
                            >
                              https://www.google.co.il/webhp?sourceid=chrome-instant&amp;ion=1&amp;espv=2&amp;ie=UTF-8#q=Whole-Body+Electrical+Bio-Impedance+is+accurate+in+Noninvasive+Determination+of+Cardiac+Output:+A+Thermodilution+controlled%2C+Prospective%2
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className="col-xl-4 bg-white rounded-3">

                <img src="/assets/img/nicas/nicas-250x80.png" alt="nicas" className="mx-auto mt-5" />

                <img className="mt-5 mx-auto" src="/assets/img/nicas/NiCasa_Machine.png" alt="nicas" style={{ height: "608px" }} />

                <p className="text-center mt-4"> A New Age in Impedance Cardiography </p>
                <img className="mt-4 mx-auto" src="/assets/img/nicas/Tablet.png" alt="nicas" style={{ height: "210px" }} />

                <p className="text-center mt-4"> NICaS Touch Screen Configuration </p>

                <h4 className="text-primary-emphasis mt-5"> NICaS screens </h4>

                <ul className="round mt-3">
                  <li>Standard Screen – designed to take a single measurement.</li>
                  <li>
                    Comparative Screen – designed to compare cardiac function in different
                    patient’s situations.
                  </li>
                  <li>
                    Trending Screen – designed for continuous monitoring of patient’s
                    cardiovascular and fluid status.
                  </li>
                </ul>

              </div>

            </div>
          </div>
        </div>
      </section >



    </>


  );

};

export default NicasHemoDynamicNavigator;
