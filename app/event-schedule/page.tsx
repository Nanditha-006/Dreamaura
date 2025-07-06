"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function EventSchedule() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <div
          className="inner-page-header"
          style={{ backgroundImage: "url(assets/img/bg/header-bg10.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto">
                <div className="heading1 text-center">
                  <h1>Event Schedule</h1>
                  <div className="space20" />
                  <Link href="/">
                    Home <i className="fa-solid fa-angle-right" />{" "}
                    <span>Event Schedule</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Current Date & Time Display */}
        <div className="container text-center mt-4 mb-4">
          <h5 style={{ fontWeight: "bold" }}>Current Date & Time</h5>
          <p style={{ fontSize: "18px", margin: "0" }}>
            {currentTime.toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
          </p>
        </div>

        {/* ✅ Add rest of your event content here */}
      </div>
    </Layout>
  );
}