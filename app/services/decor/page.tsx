"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Head from "next/head";


export default function DecorPage() {
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
                  <h1>Decor</h1>
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
          <h1
            style={{
              textAlign: "center",
              marginBottom: 24,
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            Event Decoration Services
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            At <strong>Dream Aura Events</strong>, we believe decor is the soul
            of every celebration. From concept to execution, our team crafts
            immersive atmospheres that reflect your unique story and elevate
            every moment.
          </p>

          <h2
            style={{
              marginTop: 40,
              marginBottom: 16,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            🌿 Types of Decoration We Offer
          </h2>
          <ul
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              paddingLeft: 20,
            }}
          >
            <li>
              <strong>Wedding Decor:</strong> Mandaps, floral arches, stage
              setups, and aisle styling
            </li>
            <li>
              <strong>Birthday & Baby Showers:</strong> Themed balloon work,
              welcome boards, cartoon cutouts
            </li>
            <li>
              <strong>Corporate Events:</strong> Elegant minimalistic branding
              setups, entrance decor
            </li>
            <li>
              <strong>Traditional & Cultural Functions:</strong> Authentic
              elements with modern design fusion
            </li>
          </ul>

          <h2
            style={{
              marginTop: 40,
              marginBottom: 16,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            🎯 Why Decoration Matters
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Good decor doesn’t just make a venue pretty—it sets the emotional
            tone of the event. It guides your guests’ attention, creates
            photographic memories, and defines your event’s personality.
          </p>

          <h2
            style={{
              marginTop: 40,
              marginBottom: 16,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            💫 Reimagining Expectations
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Our in-house designers continuously innovate by blending nature,
            technology, and art. Whether it's a starry ceiling illusion, flower
            chandelier, or a surprise reveal stage— our goal is to make your
            event not just beautiful but unforgettable.
          </p>

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
              src="/assets/img/all-images/decoration/img1.png"
              alt="decoration"
              style={{ width: "300px", borderRadius: 12 }}
            />
            <img
              src="/assets/img/all-images/decoration/img2.png"
              alt="decoration"
              style={{ width: "300px", borderRadius: 12 }}
            />
            <img
              src="/assets/img/all-images/decoration/img3.png"
              alt="decoration"
              style={{ width: "300px", borderRadius: 12 }}
            />
          </div>

          <div style={{ textAlign: "center", marginTop: 60 }}>
            <h3 style={{ fontSize: 18, fontWeight: "bold" }}>
              Ready to turn your dream into reality?
            </h3>
            <p>Let Dream Aura Events design a space that speaks your soul.</p>
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

  
      </>
    </Layout>
  );
}
