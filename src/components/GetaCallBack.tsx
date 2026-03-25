"use client";

import React, { useEffect, useCallback } from "react";
import Link from "next/link";

const GetaCallBack = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    organisation: "",
    source: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg({ type: "", text: "" });
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaInput }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg({
          type: "success",
          text: "Thanks! We'll call you back soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          organisation: "",
          source: "",
        });
        setCaptchaInput("");
        fetchCaptcha();
      } else {
        setResponseMsg({
          type: "error",
          text: data.error || "Something went wrong. Please try again.",
        });
        fetchCaptcha();
      }
    } catch (error) {
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
        style={{
          backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-01.png)",
        }}
      >
        <div className="breadcrumb1__padding">
          <div className="container_m_30 container_l">
            <div className="row">
              <div className="col-xl-12 col_padding">
                <div className="breadcrumb1__content text-center">
                  <h3 className="breadcrumb1__title"> Get a Call Back </h3>
                  <div className="breadcrumb1__list">
                    <span>
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </span>
                    <span>
                      <span> Get a Call Back </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact1 mt-100">
        <div className="content_box_120 pt-0">
          <div className="contact1__wrapper">
            <div className="container_m_30 container_l">
              <div className="row">
                <div className="col-xl-6 col_padding">
                  <img
                    className="rounded-4"
                    src="/assets/img/contact/Get-a-Call-Back.jpg"
                    alt="Image"
                  />
                </div>
                <div className="col-xl-6 col_padding d-flex align-items-center">
                  <div className="contact1__form1 bg-body-secondary p-50 rounded-4">
                    <div className="heading1 mb-30">
                      <h2 className="fw-bold mb-2">
                        Expert support, when you need it
                      </h2>
                      <p className="fs-6 lh-base">
                        {" "}
                        Fill in your details and one of our experts will reach
                        out to you with the right solutions.{" "}
                      </p>
                    </div>
                    <div className="contact1__form_wrapper">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-sm-12">
                            <input
                              className="form-control rounded-2"
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="col-sm-12">
                            <input
                              className="form-control rounded-2"
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="col-sm-12">
                            <input
                              className="form-control rounded-2"
                              type="tel"
                              name="phone"
                              placeholder="Your Phone No"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="col-sm-12">
                            <input
                              className="form-control rounded-2"
                              type="text"
                              name="product"
                              placeholder="Product"
                              value={formData.product}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-12">
                            <input
                              className="form-control rounded-2"
                              type="text"
                              name="organisation"
                              placeholder="Organisation"
                              value={formData.organisation}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-12">
                            <div className="fs-7 mb-2">
                              {" "}
                              How did you come to know about Sandor ?{" "}
                            </div>
                            <select
                              className="form-control rounded-2 h56 react-safe"
                              name="source"
                              value={formData.source}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Option</option>
                              <option value="Facebook">Facebook</option>
                              <option value="LinkedIn">LinkedIn</option>
                              <option value="Quora">Quora</option>
                              <option value="Others">Others</option>
                            </select>
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
                              {loading ? "Submitting..." : "Submit"}{" "}
                              <i data-feather="arrow-right" />
                            </button>
                          </div>
                        </div>
                      </form>
                      {responseMsg.text && (
                        <p
                          className={`form-message mt-3 ${responseMsg.type === "error" ? "text-danger" : "text-success"}`}
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
    </>
  );
};

export default GetaCallBack;
