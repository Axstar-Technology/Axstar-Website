import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const DigitalSetup1 = () => {
  const expertises = [
    {
      id: "01",
      title: "Social Media Management",
      description: "In a noisy digital world, your brand needs a voice that resonates. We don’t just post content; we engineer engagement. Our Digital marketing team handles everything from visual storytelling to community building, ensuring your brand stays top-of-mind across all major social platforms. We focus on building a loyal audience that eventually converts into your brand advocates.",
      deliverables: [
        "Social Media Audit & Strategy Development",
        "Professional Content Creation & Visual Design",
        "Paid Social Media Advertising",
        "Social Listening & Brand Monitoring",
        "Community Management & Real-time Engagement"
      ],
      hasButton: true
    },
    {
      id: "02",
      title: "Search Engine Optimization (SEO)",
      description: "Being on page one isn't a luxury; it’s a necessity. We optimize your digital footprint to ensure that when your customers are looking for a solution, they find you first. By focusing on both the technical health of your site and high-quality content, we build long-term organic authority that reduces your dependence on paid ads.",
      deliverables: [
        "Comprehensive Keyword & Competitor Research",
        "On-Page Optimization & Content Mapping",
        "High-Quality Backlink Building & PR",
        "Local SEO & Google Business Profile Management"
      ],
      hasButton: true
    },
    {
      id: "03",
      title: "Product Strategy & Digital Transformation",
      description: "Growth starts with a solid foundation. We help businesses modernize their approach by identifying gaps in their current digital journey. Whether you are moving from offline to online or looking to optimize an existing product, we provide the roadmap to ensure your technology and marketing are working in perfect harmony.",
      deliverables: [
        "Market Analysis & Product Positioning",
        "Product Roadmap & Planning",
        "User Journey Mapping Strategy & UX Consulting",
        "Product Analytics & Optimization",
        "Business Process Digitalization & Workflow Automation",
        "Technology Stack Audits & Upgrades"
      ]
    },
    {
      id: "04",
      title: "Data Analytics & Performance Optimization",
      description: "We believe what gets measured gets improved. Our analytics services turn raw data into a clear story about your customers' behavior. We set up advanced tracking and custom dashboards so you can see exactly where your budget is going and which channels are delivering the highest return on investment.",
      deliverables: [
        "Advanced Web & App Analytics Setup",
        "Customer & Product Analytics",
        "Custom KPI Dashboards & Automated Reporting",
        "A/B Testing & Conversion Rate Optimization (CRO)",
        "Customer Lifetime Value (CLV) Analysis"
      ]
    },
    {
      id: "05",
      title: "Digital Presence Setup",
      description: "Your digital presence is your first impression — and in most cases, your most important one. We help you build a strong, cohesive foundation across all digital touchpoints so your brand looks professional, trustworthy, and ready to scale from day one. From websites to social platforms, we ensure everything is aligned, optimized, and built for growth.",
      deliverables: [
        "Website Setup & Optimization (Business Websites / Landing Pages)",
        "Social Media Profile Creation & Branding (Facebook, Instagram, LinkedIn, etc.)",
        "Google Business Profile Setup & Optimization",
        "Domain, Hosting & Professional Email Configuration",
        "Basic SEO & Performance Optimization Setup",
        "Brand Consistency Across All Digital Channels",
        "Analytics & Tracking Integration (Google Analytics, Meta Pixel, etc.)"
      ]
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-slate-300 py-24 px-6 md:px-12  selection:bg-emerald-500/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Centered Header Section */}
        <header className="text-center mb-32">
          <h2 className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm mb-6">
            Our Expertise
          </h2>
          <h1 className="text-4xl md:text-6xl font-extralight text-white leading-tight mb-8">
            At Axstar, we bridge the gap between <br className="hidden md:block" /> 
            technical infrastructure and market dominance.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don’t just provide digital marketing; we engineer growth ecosystems designed for scale. 
            By integrating deep software expertise with performance-driven marketing, we empower brands 
            to navigate the digital landscape with precision.
          </p>
          
          <div className="mt-12 h-20 w-px bg-gradient-to-b from-emerald-500 to-transparent mx-auto"></div>
        </header>

        {/* Secondary Intro Statement */}
        <div className="text-center mb-40 max-w-4xl mx-auto border-y border-slate-900 py-12">
          <p className="italic text-slate-500 text-lg">
            "From high-level Product Strategy and Digital Transformation to the granular execution of 
            Technical SEO and Data Analytics, our approach is built on a foundation of measurable results. 
            We are not just your service provider; we are your strategic partner in building a future-proof digital presence."
          </p>
        </div>

        {/* Vertical Flow Concept */}
        <div className="space-y-40">
          {expertises.map((item) => (
            <section key={item.id} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Numbering Side */}
              <div className="lg:col-span-2 flex items-center lg:justify-end">
                <span className="text-5xl md:text-7xl font-black text-emerald-500/10 tracking-tighter">
                  {item.id}
                </span>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-10 border-l border-slate-800 pl-8 md:pl-16">
                <h3 className="text-2xl md:text-4xl font-light text-white mb-6 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
                  {item.description}
                </p>

                <div className="space-y-4 mb-10">
                  <p className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Key Deliverables</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.deliverables.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-400 group">
                        <div className="h-px w-4 bg-emerald-900 group-hover:w-6 transition-all duration-300"></div>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.hasButton && (
                  <button className="inline-flex items-center gap-4 text-emerald-500 border border-emerald-500/30 px-8 py-3 rounded-full hover:bg-emerald-500 hover:text-black transition-all duration-300 text-sm font-bold uppercase tracking-tighter">
                    Talk to Expert
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Accent */}
        <footer className="mt-40 text-center border-t border-slate-900 pt-20">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-slate-600 text-sm tracking-widest uppercase">Axstar Engineering Growth</p>
        </footer>
      </div>
    </div>
  );
};

export default DigitalSetup1;