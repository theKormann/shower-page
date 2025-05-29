'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { HeroSection } from '@/components/hero-section';
import ServicesSection from '@/components/services';
import { CtaSection } from '@/components/cta';
import { PricesSection } from '@/components/prices';
import React from 'react';
import { Steps } from '@/components/steps';

export default function MainPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <ServicesSection />
            <PricesSection />
            <CtaSection />
            <Steps />
            <Footer />
        </>
    );
}