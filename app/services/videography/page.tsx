"use client";

import Head from "next/head";
import Layout from "@/components/layout/Layout"; // ✅ Added import
import Footer1 from "@/components/layout/footer/Footer1";
import Link from "next/link";

export default function VideographyPage() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
            integrity="sha512-9usAa10I+Br5D+eAG5unFBSuHfCr0D1F5GZ5Y03jH2G9e4KLwckH5Y2HxC1OdAd9hZ9xZgksUJ+QvGgPi2dZ1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>

        {/* Inner Page Header */}
        <div
          className="inner-page-header"
          style={{
            backgroundImage: "url(/assets/img/bg/header-bg12.png)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto">
                <div className="heading1 text-center">
                  <h1>Videography</h1> {/* ✅ Corrected heading */}
                  <div className="space20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            padding: "60px 20px",
            paddingTop: "100px",
            maxWidth: "1200px",
            margin: "0 auto",
            fontFamily: "'Poppins', Arial, sans-serif",
            color: "#333",
          }}
        >
          {/* Heading */}
          <h1
            style={{
              textAlign: "center",
              marginBottom: 24,
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            Videography Services
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            At <strong>Dream Aura Events</strong>, we don’t just film events —
            we craft cinematic stories. From slow-motion vows to aerial shots of
            grand entrances, our videography brings your moments to life with
            elegance and emotion.
          </p>

          {/* What We Offer */}
          <h2
            style={{ marginTop: 40, marginBottom: 16, fontSize: 18, fontWeight: "bold" }}
          >
            🎥 Our Videography Includes
          </h2>
          <ul
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              paddingLeft: 20,
            }}
          >
            <li>
              <strong>Full Event Coverage:</strong> Every key moment, from start
              to send-off
            </li>
            <li>
              <strong>Cinematic Highlights:</strong> Artistically edited reels
              with background music
            </li>
            <li>
              <strong>Drone Shots:</strong> Aerial perspectives that elevate
              storytelling
            </li>
            <li>
              <strong>Pre-wedding Films:</strong> Personalized love stories shot
              and scripted with care
            </li>
          </ul>

          {/* Why It Matters */}
          <h2
            style={{ marginTop: 40, marginBottom: 16, fontSize: 18, fontWeight: "bold" }}
          >
            🎯 Why It Matters
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            A video brings your event back to life — the laughter, the music,
            the tears, the vows. It's a time machine for your emotions. We make
            sure your film doesn’t just document the day but tells the story in
            a cinematic and heartfelt way.
          </p>

          {/* Signature Edge */}
          <h2
            style={{ marginTop: 40, marginBottom: 16, fontSize: 18, fontWeight: "bold" }}
          >
            💫 Your Story, Cinematically Told
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Our expert videographers combine creativity and technology to
            deliver stunning visuals and immersive sound. Whether it’s a
            romantic pre-wedding shoot or a high-energy reception reel, we frame
            your narrative with elegance and style.
          </p>

          {/* Images */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 20,
              marginTop: 40,
            }}
          >
            <img
              src="/assets/img/all-images/videography/img1.png"
              alt="videography"
              style={{ width: "300px", borderRadius: 12 }}
            />
            <img
              src="/assets/img/all-images/videography/img2.png"
              alt="videography"
              style={{ width: "300px", borderRadius: 12 }}
            />
            <img
              src="/assets/img/all-images/videography/img3.png"
              alt="videography"
              style={{ width: "300px", borderRadius: 12 }}
            />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <h3 style={{ fontSize: 18, fontWeight: "bold" }}>
              Let’s make your story unforgettable!
            </h3>
            <p>
              Get in touch to book our videography team and relive your day,
              frame by frame.
            </p>
            <Link
              href="/contact"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: 6,
                display: "inline-block",
                marginTop: 16,
                textDecoration: "none",
                fontFamily: "'Poppins', Arial, sans-serif",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Remove <Footer1 /> from here */}
      </>
    </Layout>
  );
}
