"use client";
import React from "react";
import Countdown from "@/components/elements/Countdown";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = React.useState<{
    Name: string;
    Email: string;
    Phone: string;
    Subject: string;
    Message: string;
  }>({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const [errors, setErrors] = React.useState<{
    Name?: string;
    Email?: string;
    Phone?: string;
    Subject?: string;
    Message?: string;
  }>({});
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: {
      Name?: string;
      Email?: string;
      Phone?: string;
      Subject?: string;
      Message?: string;
    } = {};
    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.Name.trim())) {
      newErrors.Name = "Name must contain only letters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!emailRegex.test(formData.Email)) {
      newErrors.Email = "Enter a valid email";
    }

    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.Phone)) {
      newErrors.Phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.Subject.trim()) {
      newErrors.Subject = "Subject is required";
    }

    if (!formData.Message.trim()) {
      newErrors.Message = "Message is required";
    } else if (formData.Message.length < 10) {
      newErrors.Message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setMessage("✅ Your message has been sent successfully!");
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Subject: "",
        Message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        {/* HERO */}
        <div
          className="inner-page-header"
          style={{ backgroundImage: "url(assets/img/bg/header-bg12.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto">
                <div className="heading1 text-center">
                  <h1>Contact Us</h1>
                  <div className="space20" />
                  <Link href="/">
                    Home <i className="fa-solid fa-angle-right" />{" "}
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-inner-section sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img1 image-anime">
                  <img
                    src="/assets/img/all-images/contact/contact-img4.png"
                    alt="Contact"
                  />
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="zoom-in"
                data-aos-duration={1000}
              >
                <form onSubmit={handleSubmit} className="contact4-boxarea">
                  <h3 className="text-anime-style-3">Get In Touch Now</h3>
                  <div className="space8" />

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="Name"
                          placeholder="Name"
                          value={formData.Name}
                          onChange={handleChange}
                        />
                        {errors.Name && (
                          <p style={{ color: "red" }}>{errors.Name}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="input-area">
                        <input
                          type="text"
                          name="Phone"
                          placeholder="Phone"
                          value={formData.Phone}
                          onChange={handleChange}
                        />
                        {errors.Phone && (
                          <p style={{ color: "red" }}>{errors.Phone}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="input-area">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email"
                          value={formData.Email}
                          onChange={handleChange}
                        />
                        {errors.Email && (
                          <p style={{ color: "red" }}>{errors.Email}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="input-area">
                        <select
                          name="Subject"
                          value={formData.Subject}
                          onChange={handleChange}
                          style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                          }}
                        >
                          <option value="">Select Service Required</option>
                          <option value="Photography">Photography</option>
                          <option value="Videography">Videography</option>
                          <option value="Catering">Catering</option>
                          <option value="Decor">Decor</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.Subject && (
                          <p style={{ color: "red" }}>{errors.Subject}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <textarea
                          name="Message"
                          placeholder="Message"
                          value={formData.Message}
                          onChange={handleChange}
                        />
                        {errors.Message && (
                          <p style={{ color: "red" }}>{errors.Message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="space24" />
                      <div className="input-area text-end">
                        <button
                          type="submit"
                          className="vl-btn1"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Submit Now"}
                        </button>
                      </div>
                      {message && (
                        <p style={{ marginTop: "10px" }}>{message}</p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="contact2-bg-section">
          <div className="img1">
            <img
              src="/assets/img/all-images/contact/contact-img1.png"
              alt=""
              className="contact-img1"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="space48" />
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div
                      className="contact-boxarea"
                      data-aos="zoom-in"
                      data-aos-duration={900}
                    >
                      <div className="icons">
                        <img src="/assets/img/icons/mail1.svg" alt="" />
                      </div>
                      <div className="text">
                        <h5>Our Email</h5>
                        <div className="space14" />
                        <Link
                          href="mailto:Dreamauraevent@gmail.com"
                          style={{ fontSize: "11px" }}
                        >
                          Dreamauraevent@gmail.com
                        </Link>
                      </div>
                    </div>

                    <div className="space18" />
                    <div
                      className="contact-boxarea"
                      data-aos="zoom-in"
                      data-aos-duration={1000}
                    >
                      <div className="icons">
                        <img src="/assets/img/icons/location1.svg" alt="" />
                      </div>
                      <div className="text">
                        <h5>Our Location</h5>
                        <div className="space14" />
                        <Link href="#">Chennai, India</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="space30 d-md-none d-block" />
                    <div
                      className="contact-boxarea"
                      data-aos="zoom-in"
                      data-aos-duration={1000}
                    >
                      <div className="icons">
                        <img src="/assets/img/icons/phn1.svg" alt="" />
                      </div>
                      <div className="text">
                        <h5>Call/Message</h5>
                        <div className="space14" />
                        <Link href="tel:+917550277296" style={{ fontSize: "11px" }}>
                          +91 75502 77296
                        </Link>
                      </div>
                    </div>
                    <div className="space18" />
                    <div
                      className="contact-boxarea"
                      data-aos="zoom-in"
                      data-aos-duration={1200}
                    >
                      <div className="icons">
                        <img src="/assets/img/icons/instagram.svg" alt="" />
                      </div>
                      <div className="text">
                        <h5>Instagram</h5>
                        <div className="space14" />
                        <Link
                          href="https://instagram.com/dreamaura.events"
                          target="_blank"
                        >
                          dreamaura.events
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.979751845173!2d80.22097707504944!3d13.06042288726337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d1b8e8e8e9%3A0x7f8e8e8e8e8e8e8e!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1704088968016!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
