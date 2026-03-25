// "use client"

// import React, { useEffect } from "react";
// import Link from "next/link";

// const Contactus = () => {
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: ""
//   });
//   const [loading, setLoading] = React.useState(false);
//   const [responseMsg, setResponseMsg] = React.useState({ type: "", text: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMsg({ type: "", text: "" });

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setResponseMsg({ type: "success", text: "Thanks for contacting us! We will get back to you soon." });
//         setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//       } else {
//         setResponseMsg({ type: "error", text: data.error || "Something went wrong. Please try again." });
//       }
//     } catch (error) {
//       setResponseMsg({ type: "error", text: "Something went wrong. Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Re-load the main script to initialize animations and plugins on route change
//     const script = document.createElement("script");
//     script.src = "/assets/js/main.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup the script when the component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (

//     <>

//       <section
//         className="breadcrumb1"
//         style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-01.png)" }}
//       >
//         <div className="breadcrumb1__padding">
//           <div className="container_m_30 container_l">
//             <div className="row">
//               <div className="col-xl-12 col_padding">
//                 <div className="breadcrumb1__content text-center">
//                   <h3 className="breadcrumb1__title"> Contact Us </h3>
//                   <div className="breadcrumb1__list">
//                     <span>
//                       <Link href="/">
//                         <span>Home</span>
//                       </Link>
//                     </span>
//                     <span>
//                       <span> Contact Us </span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="process2">
//         <div className="content_box_120_90">
//           <div className="container_m_30 container_l">
//             <div className="row mb-55">
//               <div className="col-xl-12 col_padding">
//                 <div className="heading1">
//                   {/* <h4 className="heading1__subtitle mb-10">Contact Information</h4> */}
//                   <h2 className="heading1__title mb-2">
//                     Sandor Medicaids Pvt. Ltd.
//                   </h2>
//                   <h5> Please use the following information to contact us or simply complete the form </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="process2__wrapper">
//               <div className="row">
//                 <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
//                   <div className="process2__item">
//                     <div className="process2__item_thumb">
//                       <img src="/assets/img/png-icon/png-icon-70.png" alt="Image" />
//                       <span>01</span>
//                     </div>
//                     <div className="process2__item_content">
//                       <h5>Phone</h5>
//                       <p className="m-0"> 040-23357048  </p>
//                       <p className="m-0"> Toll Free Number </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
//                   <div className="process2__item">
//                     <div className="process2__item_thumb">
//                       <img src="/assets/img/png-icon/png-icon-71.png" alt="Image" />
//                       <span>02</span>
//                     </div>
//                     <div className="process2__item_content">
//                       <h5>Email</h5>
//                       <p className="m-0"> Fax : 040-23357046 </p>
//                       <p className="m-0"> Email :  <a href="mailto:info@sandor.co.in" className="acolor">info@sandor.co.in</a> </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
//                   <div className="process2__item">
//                     <div className="process2__item_thumb">
//                       <img src="/assets/img/png-icon/png-icon-72.png" alt="Image" />
//                       <span>03</span>
//                     </div>
//                     <div className="process2__item_content">
//                       <h5>Location</h5>
//                       <p className="m-0"> 471, Road No. 87, Paramount Hills, Jubilee Hills, Hyderabad, Telangana 500096 </p>

//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="contact1">
//         <div className="content_box_120 pt-0">
//           <div className="contact1__wrapper">
//             <div className="contact1__thumb">
//               <img src="/assets/img/contact/contact-02.png" alt="Image" />
//             </div>
//             <div className="container_m_30 container_l">
//               <div className="row">
//                 <div className="col-xl-6 col_padding">
//                   <div className="contact1__info">
//                     <div className="contact1__info_box">
//                       <div className="contact1__info_thumb">
//                         <i className="fa-solid fa-phone" />
//                       </div>
//                       <div className="contact1__info_content">
//                         <h4>Toll Free Number : </h4>
//                         <p className="m-0"> 1800 425 9515 </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-6 col_padding d-flex align-items-center">
//                   <div className="contact1__form">
//                     <div className="heading1 mb-50">
//                       <h4 className="heading1__subtitle mb-10">
//                         Let&apos;s work together
//                       </h4>
//                       <h2 className="heading1__title">
//                         Get a free <span>quote</span>
//                       </h2>
//                     </div>
//                     <div className="contact1__form_wrapper">
//                       <form onSubmit={handleSubmit}>
//                         <div className="row">
//                           <div className="col-sm-6">
//                             <input
//                               className="form-control"
//                               type="text"
//                               name="name"
//                               placeholder="Name"
//                               value={formData.name}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                           <div className="col-sm-6">
//                             <input
//                               className="form-control"
//                               type="email"
//                               name="email"
//                               placeholder="Email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                           <div className="col-sm-6">
//                             <input
//                               className="form-control"
//                               type="tel"
//                               name="phone"
//                               placeholder="Phone"
//                               value={formData.phone}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                           <div className="col-sm-6">
//                             <input
//                               className="form-control"
//                               type="text"
//                               name="subject"
//                               placeholder="Subject"
//                               value={formData.subject}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                           <div className="col-sm-12">
//                             <textarea
//                               className="form-control"
//                               name="message"
//                               placeholder="Message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               required
//                             />
//                             {/* Site BTN */}
//                             <button
//                               type="submit"
//                               className="btn3 mt-15"
//                               disabled={loading}
//                               style={{ border: "none", cursor: loading ? "not-allowed" : "pointer" }}
//                             >
//                               {loading ? "Sending..." : "Send Message"} <i data-feather="arrow-right" />
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                       {responseMsg.text && (
//                         <p className={`form-message mt-3 ${responseMsg.type === "error" ? "text-danger" : "text-success"}`}>
//                           {responseMsg.text}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="mapouter">
//         <div className="gmap_canvas1">

//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.062210398921!2d78.4176411!3d17.408801900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96c4d0930ed5%3A0xe0d8430591014da6!2s471%2C%20Road%20No.%2087%2C%20Paramount%20Hills%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500096!5e0!3m2!1sen!2sin!4v1768814625603!5m2!1sen!2sin"
//             style={{ border: 0, width: "100%", height: 600 }}
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </div>

//     </>

//   );

// };

// export default Contactus;
"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const Contactus = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [captchaInput, setCaptchaInput] = React.useState("");
  const [captchaSvg, setCaptchaSvg] = React.useState<string>("");
  const [captchaLoading, setCaptchaLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [responseMsg, setResponseMsg] = React.useState({ type: "", text: "" });

  // ── Load / refresh captcha ──────────────────────────────────────────────────
  const fetchCaptcha = useCallback(async () => {
    setCaptchaLoading(true);
    try {
      const res = await fetch("/api/captcha", { cache: "no-store" });
      const svg = await res.text();
      setCaptchaSvg(svg);
      setCaptchaInput("");
    } catch {
      console.error("Failed to load captcha");
    } finally {
      setCaptchaLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCaptcha();
  }, [fetchCaptcha]);

  // ── Form field change ──────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg({ type: "", text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaInput }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg({
          type: "success",
          text: "Thanks for contacting us! We will get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setCaptchaInput("");
        fetchCaptcha(); // refresh captcha after successful submit
      } else {
        setResponseMsg({
          type: "error",
          text: data.error || "Something went wrong. Please try again.",
        });
        // Always refresh captcha on failure so the user gets a new one
        fetchCaptcha();
      }
    } catch {
      setResponseMsg({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
      fetchCaptcha();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* ── Breadcrumb ──────────────────────────────────────────────────────── */}
      <section
        className="breadcrumb1"
        style={{
          backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-01.png)",
        }}
      >
        <div className="breadcrumb1__padding">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="breadcrumb1__content text-center">
                  <h3 className="breadcrumb1__title">Contact Us</h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span>Contact Us</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact info cards ───────────────────────────────────────────────── */}
      <section className="process2">
        <div className="content_box_120_90">
          <div className="container_m_30 container_l">
            <div className="row mb-55">
              <div className="col-xl-12 col_padding">
                <div className="heading1">
                  <h2 className="heading1__title mb-2">
                    Sandor Medicaids Pvt. Ltd.
                  </h2>
                  <h5>
                    Please use the following information to contact us or simply
                    complete the form
                  </h5>
                </div>
              </div>
            </div>
            <div className="process2__wrapper">
              <div className="row">
                <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
                  <div className="process2__item">
                    <div className="process2__item_thumb">
                      <img
                        src="/assets/img/png-icon/png-icon-70.png"
                        alt="Image"
                      />
                      <span>01</span>
                    </div>
                    <div className="process2__item_content">
                      <h5>Phone</h5>
                      <p className="m-0">040-23357048</p>
                      <p className="m-0">Toll Free Number</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
                  <div className="process2__item">
                    <div className="process2__item_thumb">
                      <img
                        src="/assets/img/png-icon/png-icon-71.png"
                        alt="Image"
                      />
                      <span>02</span>
                    </div>
                    <div className="process2__item_content">
                      <h5>Email</h5>
                      <p className="m-0">Fax : 040-23357046</p>
                      <p className="m-0">
                        Email :{" "}
                        <a href="mailto:info@sandor.co.in" className="acolor">
                          info@sandor.co.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-lg-4 col-md-6 col_padding">
                  <div className="process2__item">
                    <div className="process2__item_thumb">
                      <img
                        src="/assets/img/png-icon/png-icon-72.png"
                        alt="Image"
                      />
                      <span>03</span>
                    </div>
                    <div className="process2__item_content">
                      <h5>Location</h5>
                      <p className="m-0">
                        471, Road No. 87, Paramount Hills, Jubilee Hills,
                        Hyderabad, Telangana 500096
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact form ────────────────────────────────────────────────────── */}
      <section className="contact1">
        <div className="content_box_120 pt-0">
          <div className="contact1__wrapper">
            <div className="contact1__thumb">
              <img src="/assets/img/contact/contact-02.png" alt="Image" />
            </div>
            <div className="container_m_30 container_l">
              <div className="row">
                <div className="col-xl-6 col_padding">
                  <div className="contact1__info">
                    <div className="contact1__info_box">
                      <div className="contact1__info_thumb">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <div className="contact1__info_content">
                        <h4>Toll Free Number :</h4>
                        <p className="m-0">1800 425 9515</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col_padding d-flex align-items-center">
                  <div className="contact1__form">
                    <div className="heading1 mb-50">
                      <h4 className="heading1__subtitle mb-10">
                        Let&apos;s work together
                      </h4>
                      <h2 className="heading1__title">
                        Get a free <span>quote</span>
                      </h2>
                    </div>

                    <div className="contact1__form_wrapper">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          {/* Name */}
                          <div className="col-sm-6">
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          {/* Email */}
                          <div className="col-sm-6">
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          {/* Phone */}
                          <div className="col-sm-6">
                            <input
                              className="form-control"
                              type="tel"
                              name="phone"
                              placeholder="Phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          {/* Subject */}
                          <div className="col-sm-6">
                            <input
                              className="form-control"
                              type="text"
                              name="subject"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          {/* Message */}
                          <div className="col-sm-12">
                            <textarea
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* ── Captcha ─────────────────────────────────────── */}
                          <div className="col-sm-12">
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                margin: "10px 0 8px",
                                flexWrap: "wrap",
                              }}
                            >
                              {/* SVG rendered inline */}
                              <div
                                style={{
                                  border: "1px solid #ddd",
                                  borderRadius: "6px",
                                  overflow: "hidden",
                                  lineHeight: 0,
                                  minWidth: 160,
                                  minHeight: 50,
                                  background: "#f0f4ff",
                                  opacity: captchaLoading ? 0.4 : 1,
                                  transition: "opacity 0.2s",
                                }}
                                dangerouslySetInnerHTML={{ __html: captchaSvg }}
                                aria-label="Captcha image"
                              />

                              {/* Refresh button */}
                              <button
                                type="button"
                                onClick={fetchCaptcha}
                                disabled={captchaLoading}
                                title="Refresh captcha"
                                style={{
                                  background: "none",
                                  border: "1px solid #ccc",
                                  borderRadius: "6px",
                                  padding: "8px 10px",
                                  cursor: captchaLoading
                                    ? "not-allowed"
                                    : "pointer",
                                  color: "#555",
                                  fontSize: "16px",
                                  lineHeight: 1,
                                  transition: "border-color 0.2s, color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                  (
                                    e.currentTarget as HTMLButtonElement
                                  ).style.borderColor = "#002fb1";
                                  (
                                    e.currentTarget as HTMLButtonElement
                                  ).style.color = "#002fb1";
                                }}
                                onMouseLeave={(e) => {
                                  (
                                    e.currentTarget as HTMLButtonElement
                                  ).style.borderColor = "#ccc";
                                  (
                                    e.currentTarget as HTMLButtonElement
                                  ).style.color = "#555";
                                }}
                              >
                                ↺
                              </button>

                              {/* Captcha text input */}
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Enter captcha"
                                value={captchaInput}
                                onChange={(e) =>
                                  setCaptchaInput(e.target.value)
                                }
                                required
                                autoComplete="off"
                                style={{ flex: 1, minWidth: 120, margin: 0 }}
                              />
                            </div>
                            <small style={{ color: "#888", fontSize: "12px" }}>
                              Type the characters shown in the image above
                              (case-insensitive).
                            </small>
                          </div>
                          {/* ── /Captcha ─────────────────────────────────────── */}

                          {/* Submit */}
                          <div className="col-sm-12">
                            <button
                              type="submit"
                              className="btn3 mt-15"
                              disabled={loading || captchaLoading}
                              style={{
                                border: "none",
                                cursor:
                                  loading || captchaLoading
                                    ? "not-allowed"
                                    : "pointer",
                              }}
                            >
                              {loading ? "Sending..." : "Send Message"}{" "}
                              <i data-feather="arrow-right" />
                            </button>
                          </div>
                        </div>
                      </form>

                      {responseMsg.text && (
                        <p
                          className={`form-message mt-3 ${
                            responseMsg.type === "error"
                              ? "text-danger"
                              : "text-success"
                          }`}
                        >
                          {responseMsg.text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────────────────────────────── */}
      <div className="mapouter">
        <div className="gmap_canvas1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.062210398921!2d78.4176411!3d17.408801900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96c4d0930ed5%3A0xe0d8430591014da6!2s471%2C%20Road%20No.%2087%2C%20Paramount%20Hills%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500096!5e0!3m2!1sen!2sin!4v1768814625603!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: 600 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default Contactus;
