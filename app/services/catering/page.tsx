"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function CateringPage() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <>
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
                  <h1>Catering</h1>
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
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Heading */}
          <h1 style={{ textAlign: "center", marginBottom: 24 }}>
            Catering Services
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            At <strong>Dream Aura Events</strong>, food is more than just a
            meal—it’s a celebration of culture, emotion, and memory. Our
            catering team curates unforgettable menus that delight every guest
            and suit every occasion.
          </p>

          {/* Section: Cuisine Options */}
          <h2 style={{ marginTop: 40, marginBottom: 16 }}>
            🍽️ Cuisines We Offer
          </h2>
          <ul
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              paddingLeft: 20,
            }}
          >
            <li>
              <strong>South Indian:</strong> Authentic banana leaf spreads,
              tiffin counters, traditional sweets
            </li>
            <li>
              <strong>North Indian:</strong> Royal thalis, chaat counters,
              Mughlai specialties
            </li>
            <li>
              <strong>Continental:</strong> Pasta, salads, baked dishes, and
              live grill stations
            </li>
            <li>
              <strong>Fusion & Themed:</strong> Indo-Chinese, mocktail bars,
              regional specials with a twist
            </li>
          </ul>

          {/* Section: Importance of Good Catering */}
          <h2 style={{ marginTop: 40, marginBottom: 16 }}>
            🎯 Why Catering is Crucial
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            Great food brings people together. Our chefs focus on taste,
            hygiene, presentation, and dietary preferences. From welcome drinks
            to dessert counters, we ensure your guests enjoy a five-star
            experience at your event.
          </p>

          {/* Section: Dream Aura’s Signature Experience */}
          <h2 style={{ marginTop: 40, marginBottom: 16 }}>
            💫 A Taste That Lasts Forever
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
            What sets us apart is our attention to personalization. Want a live
            dosa station with a cartoon chef for kids? A curated vegan menu? Or
            a mocktail bar that matches your theme? We’ll make it happen with
            flair and flavor.
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
              src="/assets/img/all-images/catering/img1.png"
              alt="catering"
              style={{ width: "300px", borderRadius: 12 }}
            />
            <img
              src="/assets/img/all-images/catering/img2.png"
              alt="catering"
              style={{ width: "300px", borderRadius: 12 }}
            />
            <img
              src="/assets/img/all-images/catering/img3.png"
              alt="catering"
              style={{ width: "300px", borderRadius: 12 }}
            />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <h3>Let’s serve up smiles together!</h3>
            <p>
              Book our catering team today and let your guests remember your
              event by its deliciousness.
            </p>
            <a
              href="/contact"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: 6,
                display: "inline-block",
                marginTop: 16,
                textDecoration: "none",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </>
    </Layout>
  );
}
