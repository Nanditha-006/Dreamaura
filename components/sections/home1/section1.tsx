import Link from 'next/link';
import BgSlider from './BgSlider'; 

export default function Section1() {
    return (
        <div className="hero1-section-area" style={{ fontFamily: "Arial, sans-serif", }}>
            <BgSlider />
            
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10">
                        <div className="hero1-header heading1">
                            <h1 className="text-anime-style-3" style={{ fontWeight: 600, fontSize: 38, color: '#fff', fontFamily: "Arial, sans-serif" }}>
                                Creating Timeless Memories<br className="d-lg-block d-none" />
                                With Passion
                            </h1>

                            <div style={{ height: 18 }} />

                            <p style={{ fontWeight: 600, fontSize: 24, color: "#fff", lineHeight: 1.6 }}>
                                Dream Aura Events is a premier event management company.<br />
                                We specialize in wedding planning, birthday parties, corporate events, and more—ensuring every celebration is unique and unforgettable.
                            </p>

                            <div style={{ height: 32 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}