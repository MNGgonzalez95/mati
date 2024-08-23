'use client'

import BannerSection from "@/components/home/banner-section";
import IntroSection from "@/components/home/intro-section";

export default function Home() {
    return (
        <main>
            <div className="page-wrapper">
                <IntroSection/>
                <BannerSection/>
            </div>
        </main>
    );
}
